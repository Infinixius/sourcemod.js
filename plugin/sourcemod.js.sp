#include <sourcemod>
#include <sdktools>

#include <json>
#include <websocket>

#include <clients>
#include <float>
#include <nextmap>
#include <timers>

int port
char localip[64]
char authstr[64]
bool debugLogging = false

new WebsocketHandle:g_hListenSocket = INVALID_WEBSOCKET_HANDLE
new Handle:g_hChilds

#include "events/ConVarChanged.sp"
#include "events/OnClientSayCommand.sp"
#include "events/PlayerConnect.sp"
#include "events/PlayerDisconnect.sp"

#include "messages/FetchPlayer.sp"
#include "messages/FetchPlayers.sp"
#include "messages/FetchServer.sp"
#include "messages/KickPlayer.sp"
#include "messages/PlayerCenterHint.sp"
#include "messages/PlayerCenterHintAll.sp"
#include "messages/PlayerChat.sp"
#include "messages/PlayerChatAll.sp"
#include "messages/PlayerHint.sp"
#include "messages/PlayerHintAll.sp"
#include "messages/PlaySound.sp"
#include "messages/PlaySoundAll.sp"
//#include "messages/Pong.sp"
#include "messages/PrintToServer.sp"
#include "messages/ServerCommand.sp"
#include "messages/SetNextMap.sp"
#include "messages/SetMap.sp"
#include "messages/SetPlayerRendering.sp"
#include "messages/SlapPlayer.sp"
#include "messages/TeleportPlayer.sp"
#include "messages/tf2/RegeneratePlayer.sp"

#include "websocket/WebsocketPing.sp"
#include "websocket/WebsocketEvents.sp"
#include "websocket/WebsocketFunctions.sp"
#include "websocket/OnWebsocketReceive.sp"

public Plugin myinfo =
{
	name = "sourcemod.js",
	author = "infinixius",
	description = "A JavaScript wrapper over SourceMod",
	version = "1.1.0",
	url = "https://infinixi.us"
}

public void OnPluginStart()
{
	g_hChilds = CreateArray()
	
	HookEvent("server_cvar", Event_ConVarChanged)
	HookEvent("player_connect", Event_PlayerConnect)
	HookEvent("player_disconnect", Event_PlayerDisconnect)

	CreateTimer(1.0, Ping, _, TIMER_REPEAT)

	ConVar convar = CreateConVar("smjs_port", "27013", "Port for sourcemod.js to listen on.")
	port = GetConVarInt(convar)

	ConVar convar2 = CreateConVar("smjs_ip", "0.0.0.0", "Local IP for sourcemod.js to listen on.")
	GetConVarString(convar2, localip, sizeof(localip))

	ConVar convar3 = CreateConVar("smjs_auth", "test", "Authorization string that must be provided to send messages to this server.")
	GetConVarString(convar3, authstr, sizeof(authstr))

	ConVar convar4 = CreateConVar("smjs_debug", "0", "Toggles debug logging.")
	debugLogging = GetConVarBool(convar4)
	HookConVarChange(convar4, ConVarChanged)

	PrintToServer("[SMJS] sourcemod.js loaded!")
}

public OnAllPluginsLoaded()
{
	if (g_hListenSocket == INVALID_WEBSOCKET_HANDLE)
	{
		g_hListenSocket = Websocket_Open(localip, port, OnWebsocketIncoming, OnWebsocketMasterError, OnWebsocketMasterClose);
		PrintToServer("[SMJS] Started WebSocket server on port %d!", port)
	}
}

public ConVarChanged(ConVar convar, const char[] oldValue, const char[] newValue) {
	char name[32]
	convar.GetName(name, sizeof(name))

	if (StrEqual(name, "smjs_debug")) {
		debugLogging = GetConVarBool(convar)
	}
}