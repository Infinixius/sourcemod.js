public void Message_PlayerChatAll(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object chatdata = jsondata.GetObject("message")

	char chatmessage[256];
	chatdata.GetString("message", chatmessage, sizeof(chatmessage))

	PrintToChatAll(chatmessage)
}