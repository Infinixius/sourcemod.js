public void TerminateWebsocket(WebsocketHandle:websocket, const String:reason[]) {
	if (FindValueInArray(g_hChilds, websocket) != -1) {
		PrintToServer("[SMJS] Client #%d was disconnected for reason: %s", _:websocket, reason)
		SendSimpleMessage(websocket, "Disconnect", reason)

		if (lastMessage[websocket]) {
			lastMessage[websocket] = null
		}

		RemoveFromArray(g_hChilds, FindValueInArray(g_hChilds, websocket));
	}
}

public void SendSimpleMessage(WebsocketHandle:websocket, const String:type[], const String:message[]) {
	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("type", type)
	obj.SetString("message", message)

	obj.Encode(output, sizeof(output))
	obj.Cleanup()
	delete obj

	Websocket_Send(websocket, SendType_Text, output)
}

public void SendComplexMessage(WebsocketHandle:websocket, const String:type[], JSON_Object:message) {
	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("type", type)
	obj.SetObject("message", message)

	obj.Encode(output, sizeof(output))
	obj.Cleanup()
	delete obj

	Websocket_Send(websocket, SendType_Text, output)
}

public void BroadcastSimpleMessage(const String:type[], const String:message[]) {
	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("type", type)
	obj.SetString("message", message)

	obj.Encode(output, sizeof(output))
	obj.Cleanup()
	delete obj

	new iSize = GetArraySize(g_hChilds)
	for (new i=0; i < iSize; i++) {
		Websocket_Send(GetArrayCell(g_hChilds, i), SendType_Text, output)
	}
	
}

public void BroadcastComplexMessage(const String:type[], JSON_Object:message) {
	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("type", type)
	obj.SetObject("message", message)

	obj.Encode(output, sizeof(output))
	obj.Cleanup()
	delete obj

	new iSize = GetArraySize(g_hChilds)
	for (new i=0; i < iSize; i++) {
		Websocket_Send(GetArrayCell(g_hChilds, i), SendType_Text, output)
	}
}