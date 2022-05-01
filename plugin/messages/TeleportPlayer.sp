public void Message_TeleportPlayer(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object tpdata = jsondata.GetObject("message")
	
	int to = tpdata.GetInt("to")
	int from = tpdata.GetInt("from")
	
	new Float:ang[3], Float:pos[3];
	GetClientEyeAngles(to, ang)
	GetClientAbsOrigin(to, pos)

	TeleportEntity(from, pos, ang, NULL_VECTOR)
}