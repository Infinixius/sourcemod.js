#include <sourcemod>
#include <sdkhooks>
#include <sdktools>

#include <json>
#include <websocket>

#include <clients>
#include <float>
#include <nextmap>
#include <timers>

#include <halflife>
#include <tf2>
#include <tf2_stocks>

#undef REQUIRE_EXTENSIONS
#include <tf2items>
#define REQUIRE_EXTENSIONS

int port;
char localip[64];
char authstr[64];
char whitelistedips[64][16];
bool allIPSAllowed = false;
bool debugLogging = false;
bool tf2itemsENABLED = false;

new WebsocketHandle:g_hListenSocket = INVALID_WEBSOCKET_HANDLE;
new Handle:g_hChilds;

#include "events/ConVarChanged.sp"
#include "events/OnClientSayCommand.sp"
#include "events/PlayerConnect.sp"
#include "events/PlayerDisconnect.sp"

// from smlib, but the entirity of smlib would not compile properly, so just these files are included
#include "libraries/arrays.inc"
#include "libraries/crypt.inc"

#include "messages/source/FetchPlayer.sp"
#include "messages/source/FetchPlayers.sp"
#include "messages/source/FetchServer.sp"
#include "messages/source/KickPlayer.sp"
#include "messages/source/PlayerCenterHint.sp"
#include "messages/source/PlayerCenterHintAll.sp"
#include "messages/source/PlayerChat.sp"
#include "messages/source/PlayerChatAll.sp"
#include "messages/source/PlayerHint.sp"
#include "messages/source/PlayerHintAll.sp"
#include "messages/source/PlaySound.sp"
#include "messages/source/PlaySoundAll.sp"
//#include "messages/source/Pong.sp"
#include "messages/source/PrintToServer.sp"
#include "messages/source/ServerCommand.sp"
#include "messages/source/SetNextMap.sp"
#include "messages/source/SetMap.sp"
#include "messages/source/SetPlayerRendering.sp"
#include "messages/source/SlapPlayer.sp"
#include "messages/source/TeleportPlayer.sp"

#include "messages/tf2/ApplyCondition.sp"
#include "messages/tf2/GiveWeapon.sp"
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
	version = "2.0.0",
	url = "https://sourcemod.js.org"
}

public void OnPluginStart()
{
	g_hChilds = CreateArray(64);
	
	HookEvent("server_cvar", Event_ConVarChanged);
	HookEvent("player_connect", Event_PlayerConnect);
	HookEvent("player_disconnect", Event_PlayerDisconnect);

	CreateTimer(1.0, Ping, _, TIMER_REPEAT)

	ConVar convar = CreateConVar("smjs_port", "27013", "Port for sourcemod.js to listen on.")
	port = GetConVarInt(convar)

	ConVar convar2 = CreateConVar("smjs_ip", "0.0.0.0", "Local IP for sourcemod.js to listen on.")
	GetConVarString(convar2, localip, sizeof(localip))

	ConVar convar3 = CreateConVar("smjs_auth", "admin", "MD5 hash that must be provided to send messages to this server.")
	GetConVarString(convar3, authstr, sizeof(authstr))

	ConVar convar4 = CreateConVar("smjs_debug", "0", "Toggles debug logging.")
	debugLogging = GetConVarBool(convar4)
	HookConVarChange(convar4, ConVarChanged)

	ConVar convar5 = CreateConVar("smjs_whitelist", "*", "Comma-separated list of IP addresses that are permitted to connect to this server. Use * to allow any IP address to connect.")
	char ipstring[128];
	GetConVarString(convar5, ipstring, sizeof(ipstring));

	if (StrEqual(ipstring, "*")) {
		allIPSAllowed = true
		PrintToServer("[SMJS] WARNING! smjs_whitelist has been sent to \"*\"! This means any IP address can connect to your server.")
	} else {
		ExplodeString(ipstring, ",", whitelistedips, sizeof(whitelistedips), sizeof(whitelistedips[]))
	}

	RegServerCmd("smjs_generateauth", Command_GenerateAuth);

	PrintToServer("[SMJS] sourcemod.js loaded!")
}

public OnAllPluginsLoaded()
{
	tf2itemsENABLED = LibraryExists("TF2Items");

	if (tf2itemsENABLED) {
		PrintToServer("[SMJS] TF2Items detected, enabling TF2Items support.")
	} else {
		PrintToServer("[SMJS] TF2Items not detected, disabling TF2Items support.")
	}

	if (g_hListenSocket == INVALID_WEBSOCKET_HANDLE)
	{
		g_hListenSocket = Websocket_Open(localip, port, OnWebsocketIncoming, OnWebsocketMasterError, OnWebsocketMasterClose);
		PrintToServer("[SMJS] Started WebSocket server on port %d!", port)
	}
}

public Action Command_GenerateAuth(int args) {
	char arg[64];
	char output[64];

	GetCmdArg(1, arg, sizeof(arg));

	Crypt_MD5(arg, output, sizeof(output));

	PrintToServer("[SMJS] Set smjs_auth to: '%s'", output)
}

public ConVarChanged(ConVar convar, const char[] oldValue, const char[] newValue) {
	char name[32]
	convar.GetName(name, sizeof(name))

	if (StrEqual(name, "smjs_debug")) {
		debugLogging = GetConVarBool(convar)
	}
}

public void OnLibraryRemoved(const char[] name)
{
    if (StrEqual(name, "tf2items"))
    {
		tf2itemsENABLED = false;
		PrintToServer("[SMJS] TF2Items not detected, disabling TF2Items support.")
    }
}
 
public void OnLibraryAdded(const char[] name)
{
    if (StrEqual(name, "tf2items"))
    {
		tf2itemsENABLED = true;
		PrintToServer("[SMJS] TF2Items detected, enabling TF2Items support.")
	}
}