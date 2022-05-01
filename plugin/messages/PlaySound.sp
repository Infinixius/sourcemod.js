public void Message_PlaySound(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object sounddata = jsondata.GetObject("message")

	int id = sounddata.GetInt("id", id);
	char path[256];
	sounddata.GetString("path", path, sizeof(path))

	PrecacheSound(path)
	EmitSoundToClient(id, path)
}