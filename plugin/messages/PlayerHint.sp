public void Message_PlayerHint(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object chatdata = jsondata.GetObject("message")

	int id = chatdata.GetInt("id", id);
	char chatmessage[256];
	chatdata.GetString("message", chatmessage, sizeof(chatmessage))

	PrintHintText(id, chatmessage)
}