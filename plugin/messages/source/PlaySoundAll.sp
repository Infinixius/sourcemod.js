public void Message_PlaySoundAll(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	PrecacheSound(message)
	EmitSoundToAll(message)
}