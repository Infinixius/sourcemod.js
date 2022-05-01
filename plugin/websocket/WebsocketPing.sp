Handle lastMessage[MAXPLAYERS + 1]

public Action Ping(Handle timer) {
	BroadcastSimpleMessage("Ping", "ping")

	new iSize = GetArraySize(g_hChilds)
	for (new i=0; i < iSize; i++) {
		any websocket = GetArrayCell(g_hChilds, i)
		
		if (lastMessage[websocket]) {
			if (GetEngineTime() - lastMessage[websocket] > 5.0) {
				TerminateWebsocket(websocket, "TimedOut")
				lastMessage[websocket] = null
				return Plugin_Stop;
			}
		}
	}

	return Plugin_Continue;
}