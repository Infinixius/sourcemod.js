public void Message_KickPlayer(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object kickdata = jsondata.GetObject("message")

	int id = kickdata.GetInt("id", id);
	char reason[256];
	kickdata.GetString("reason", reason, sizeof(reason))

	KickClient(id, message)
}