public void Message_Pong(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	lastMessage[websocket] = GetEngineTime()
}