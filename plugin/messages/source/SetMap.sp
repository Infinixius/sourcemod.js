public void Message_SetMap(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object mapdata = jsondata.GetObject("message")

	char map[256];
	mapdata.GetString("map", map, sizeof(map))
	char reason[256];
	mapdata.GetString("reason", reason, sizeof(reason))
	
	ForceChangeLevel(map, reason)
}