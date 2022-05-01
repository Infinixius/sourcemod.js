public void Message_SlapPlayer(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object slapdata = jsondata.GetObject("message")
	
	int to = slapdata.GetInt("id")
	int dmg = slapdata.GetInt("damage")

	SlapPlayer(to, dmg)
}