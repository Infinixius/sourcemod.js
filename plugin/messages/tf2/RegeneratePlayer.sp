public void Message_RegeneratePlayer(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	int i = jsondata.GetInt("message")
	
	if (IsClientInGame(i)) {
		TF2_RegeneratePlayer(i)
	}
}