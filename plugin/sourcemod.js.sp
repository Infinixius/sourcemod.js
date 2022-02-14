#include <sourcemod>
#include <sdktools>
#include <clients>
#include <websocket>
#include <json>
#include <halflife>

new WebsocketHandle:g_hListenSocket = INVALID_WEBSOCKET_HANDLE
new Handle:g_hChilds

public Plugin myinfo =
{
	name = "sourcemod.js",
	author = "infinixius",
	description = "A JavaScript wrapper over SourceMod",
	version = "1.0.0",
	url = "https://infinixi.us"
}

public void OnPluginStart()
{
	g_hChilds = CreateArray()

	RegAdminCmd("smjs_test", Command_test, ADMFLAG_SLAY)
	HookEvent("player_connect", Event_PlayerConnect)
	HookEvent("player_disconnect", Event_PlayerDisconnect)

	PrintToServer("[SMJS] sourcemod.js loaded!")
}

public Action Command_test(int client, int args)
{
	PrintToServer("[SMJS] Test!")
}

public OnAllPluginsLoaded()
{
	if (g_hListenSocket == INVALID_WEBSOCKET_HANDLE)
	{
		g_hListenSocket = Websocket_Open("0.0.0.0", 12345, OnWebsocketIncoming, OnWebsocketMasterError, OnWebsocketMasterClose);
		PrintToServer("[SMJS] Started WebSocket server on port 12345!")
	}
}

public Action:OnWebsocketIncoming(WebsocketHandle:websocket, WebsocketHandle:newWebsocket, String:remoteIP[], remotePort, String:protocols[256])
{
	Format(protocols, sizeof(protocols), "")
	Websocket_HookChild(newWebsocket, OnWebsocketReceive, OnWebsocketDisconnect, OnChildWebsocketError)
	PushArrayCell(g_hChilds, newWebsocket)
	
	PrintToServer("[SMJS] Client #%i with IP \"%s\" connected!", _:websocket, remoteIP)
	return Plugin_Continue
}

public OnWebsocketMasterError(WebsocketHandle:websocket, const errorType, const errorNum)
{
	LogError("[SMJS] An error occured with the master socket!: Handle: '%d', Type: '%d', Error: '%d'", _:websocket, errorType, errorNum)
	g_hListenSocket = INVALID_WEBSOCKET_HANDLE
}

public OnWebsocketMasterClose(WebsocketHandle:websocket)
{
	g_hListenSocket = INVALID_WEBSOCKET_HANDLE
}

public OnChildWebsocketError(WebsocketHandle:websocket, const errorType, const errorNum)
{
	LogError("[SMJS] An error occured with a child socket!: Handle: '%d', Type: '%d', Error: '%d'", _:websocket, errorType, errorNum)
	RemoveFromArray(g_hChilds, FindValueInArray(g_hChilds, websocket))
}

public OnWebsocketDisconnect(WebsocketHandle:websocket)
{
	PrintToServer("[SMJS] Client #%i with IP \"\" disconnected!", _:websocket)
	RemoveFromArray(g_hChilds, FindValueInArray(g_hChilds, websocket));
}

public OnWebsocketReceive(WebsocketHandle:websocket, WebsocketSendType:iType, const String:receiveData[], const dataSize)
{
	if (iType == SendType_Text)
	{
		PrintToServer("[SMJS] [DEBUG] Message from socket #%d: \"%s\" (size: %d)", _:websocket, receiveData, dataSize)

		JSON_Object jsondata = json_decode(receiveData)
		char type[32];
		jsondata.GetString("type", type, sizeof(type))
		char message[512];
		jsondata.GetString("message", message, sizeof(message))
		char acknowledgement[32];
		jsondata.GetString("acknowledgement", acknowledgement, sizeof(acknowledgement))

		if (StrEqual(type, "PrintToServer")) {
			PrintToServer(message)
		} else if (StrEqual(type, "ServerCommand")) {
			ServerCommand(message)
		} else if (StrEqual(type, "FetchPlayers")) {
			for (int i = 1; i <= GetClientCount(true); i++)
			{
				if (IsClientInGame(i)) {
					char output[1024]
					char name[32]
					char ip[32]
					char weapon[64]

					GetClientName(i, name, sizeof(name))
					GetClientIP(i, ip, sizeof(ip))
					GetClientWeapon(i, weapon, sizeof(weapon))

					JSON_Object obj = new JSON_Object()
					obj.SetString("type", "PlayerUpdate")
					obj.SetInt("id", i)
					obj.SetString("name", name)
					obj.SetString("ip", ip)
					obj.SetString("weapon", weapon)
					obj.SetInt("health", GetClientHealth(i))
					obj.SetInt("kills", GetClientFrags(i))
					obj.SetInt("deaths", GetClientDeaths(i))
					obj.SetBool("alive", IsPlayerAlive(i))

					obj.Encode(output, sizeof(output))
					PrintToServer(output)
					obj.Cleanup()
					delete obj

					new xSize = GetArraySize(g_hChilds)
					for (new x = 0; x < xSize; x++) {
						Websocket_Send(GetArrayCell(g_hChilds, x), SendType_Text, output)
					}
				}
			}
		} else if (StrEqual(type, "KickPlayer")) {
			JSON_Object kickdata = jsondata.GetObject("message")

			int id = kickdata.GetInt("id", id);
			char reason[256];
			kickdata.GetString("reason", reason, sizeof(reason))

			KickClient(id, message)
		} else if (StrEqual(type, "PlayerChat")) {
			JSON_Object chatdata = jsondata.GetObject("message")

			int id = chatdata.GetInt("id", id);
			char chatmessage[256];
			chatdata.GetString("message", chatmessage, sizeof(chatmessage))

			PrintToChat(id, chatmessage)
		} else if (StrEqual(type, "PlayerChatAll")) {
			JSON_Object chatdata = jsondata.GetObject("message")

			char chatmessage[256];
			chatdata.GetString("message", chatmessage, sizeof(chatmessage))

			PrintToChatAll(chatmessage)
		}

		// acknowledge the request

		char output[1024]
		JSON_Object obj = new JSON_Object()
		obj.SetString("type", "Acknowledgement")
		obj.SetString("message", acknowledgement)

		obj.Encode(output, sizeof(output))
		obj.Cleanup()
		delete obj

		new iSize = GetArraySize(g_hChilds)
		for (new i=0; i < iSize; i++) {
			Websocket_Send(GetArrayCell(g_hChilds, i), SendType_Text, output)
		}
	}
}

/* events */

public Action OnClientSayCommand(int client, const char[] command, const char[] sArgs)
{
	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("type", "PlayerChat")
	obj.SetString("message", sArgs)
	obj.SetString("command", command)
	obj.SetInt("userid", client)

	obj.Encode(output, sizeof(output))
	obj.Cleanup()
	delete obj

	new iSize = GetArraySize(g_hChilds)
	for (new i=0; i < iSize; i++) {
		Websocket_Send(GetArrayCell(g_hChilds, i), SendType_Text, output)
	}
}

public void Event_PlayerConnect(Event event, const char[] name, bool dontBroadcast)
{
	int userid = event.GetInt("userid", userid)

	char username[64]
	event.GetString("name", username, sizeof(username))

	char ip[64]
	event.GetString("address", ip, sizeof(ip))

	char networkid[64]
	event.GetString("networkid", networkid, sizeof(networkid))

	bool bot = event.GetBool("bot")

	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("type", "PlayerConnect")
	obj.SetString("name", username)
	obj.SetString("ip", ip)
	obj.SetInt("userid", userid)
	obj.SetString("networkid", networkid)
	obj.SetBool("bot", bot)

	obj.Encode(output, sizeof(output))
	obj.Cleanup()
	delete obj

	new iSize = GetArraySize(g_hChilds)
	for (new i=0; i < iSize; i++) {
		Websocket_Send(GetArrayCell(g_hChilds, i), SendType_Text, output)
	}
}

public void Event_PlayerDisconnect(Event event, const char[] name, bool dontBroadcast)
{
	int userid = event.GetInt("userid", userid)

	char username[64]
	event.GetString("name", username, sizeof(username))

	char reason[64]
	event.GetString("reason", reason, sizeof(reason))

	char networkid[64]
	event.GetString("networkid", networkid, sizeof(networkid))

	bool bot = event.GetBool("bot")

	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("type", "PlayerDisconnect")
	obj.SetString("name", username)
	obj.SetString("reason", reason)
	obj.SetInt("userid", userid)
	obj.SetString("networkid", networkid)
	obj.SetBool("bot", bot)

	obj.Encode(output, sizeof(output))
	obj.Cleanup()
	delete obj

	new iSize = GetArraySize(g_hChilds)
	for (new i=0; i < iSize; i++) {
		Websocket_Send(GetArrayCell(g_hChilds, i), SendType_Text, output)
	}
}