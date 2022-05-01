public void Message_SetPlayerRendering(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object renderdata = jsondata.GetObject("message")

	int id = renderdata.GetInt("id")
	
	int r = renderdata.GetInt("r")
	int g = renderdata.GetInt("g")
	int b = renderdata.GetInt("b")
	int a = renderdata.GetInt("a")

	int effect = renderdata.GetInt("effect")
	int mode = renderdata.GetInt("mode")

	SetEntityRenderColor(id, r, g, b, a)
	SetEntityRenderFx(id, effect)
	SetEntityRenderMode(id, mode)
}