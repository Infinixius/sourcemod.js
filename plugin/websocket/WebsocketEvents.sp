public Action:OnWebsocketIncoming(WebsocketHandle:websocket, WebsocketHandle:newWebsocket, String:remoteIP[], remotePort, String:protocols[256])
{
	Format(protocols, sizeof(protocols), "")
	Websocket_HookChild(newWebsocket, OnWebsocketReceive, OnWebsocketDisconnect, OnChildWebsocketError)
	PushArrayCell(g_hChilds, newWebsocket)
	lastMessage[newWebsocket] = GetEngineTime()
	
	PrintToServer("[SMJS] Client #%d with IP \"%s\" connected!", _:newWebsocket, remoteIP)
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
	
	TerminateWebsocket(websocket, "UnknownError")
}

public OnWebsocketDisconnect(WebsocketHandle:websocket)
{
	TerminateWebsocket(websocket, "Disconnected")
}