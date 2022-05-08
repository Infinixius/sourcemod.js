public void Message_FetchServer(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	char map[32]
	char nextmap[32]
	char authid[32]
	char folder[32]
	char desc[64]

	GetCurrentMap(map, sizeof(map))
	GetNextMap(nextmap, sizeof(nextmap))
	GetServerAuthId(AuthId_Steam3, authid, sizeof(authid))
	GetGameFolderName(folder, sizeof(folder))
	GetGameDescription(desc, sizeof(desc), true)

	JSON_Object obj = new JSON_Object()

	obj.SetString("currentMap", map)
	obj.SetString("nextMap", nextmap)
	obj.SetBool("isDedicated", IsDedicatedServer())
	obj.SetString("authID", authid)

	obj.SetFloat("gameTime", GetGameTime())
	obj.SetInt("gameTick", GetGameTickCount())

	obj.SetString("gameFolder", folder)
	obj.SetString("gameDescription", desc)
	obj.SetInt("engineVersion", GetEngineVersion())
	
	SendComplexMessage(websocket, "ServerUpdate", obj)
}