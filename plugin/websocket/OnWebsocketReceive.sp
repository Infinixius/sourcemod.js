public OnWebsocketReceive(WebsocketHandle:websocket, WebsocketSendType:iType, const String:receiveData[], const dataSize)
{
	if (iType == SendType_Text && FindValueInArray(g_hChilds, websocket) != -1)
	{
		if (debugLogging) {
			PrintToServer("[SMJS] [DEBUG] Message from socket #%d: \"%s\" (size: %d)", _:websocket, receiveData, dataSize)
		}

		JSON_Object jsondata = json_decode(receiveData)
		char type[32];
		jsondata.GetString("type", type, sizeof(type))
		char message[512];
		jsondata.GetString("message", message, sizeof(message))
		char ack[32];
		jsondata.GetString("ack", ack, sizeof(ack))
		char auth[32];
		jsondata.GetString("auth", auth, sizeof(auth))

		if (CheckAuthorization(auth, websocket)) {
			HandleMessage(type, message, jsondata, websocket)
			lastMessage[websocket] = GetEngineTime()
			Acknowledge(ack, websocket)
		}

		jsondata.Cleanup()
		delete jsondata
	}
}

public CheckAuthorization(const String:auth[], WebsocketHandle:websocket) {
	if (!StrEqual(auth, authstr)) {
		PrintToServer("[SMJS] Client #%i failed to authenticate! Attempted auth string: %s", websocket, auth)

		TerminateWebsocket(websocket, "Unauthorized")
	}
	return StrEqual(auth, authstr)
}

public Acknowledge(const String:ack[], WebsocketHandle:websocket) {
	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("type", "")
	obj.SetString("message", ack)

	obj.Encode(output, sizeof(output))
	obj.Cleanup()
	delete obj

	SendSimpleMessage(websocket, "Acknowledgement", ack)
}

public void HandleMessage(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	if (StrEqual(type, "PrintToServer")) {
		Message_PrintToServer(type, message, jsondata, websocket)
	} else if (StrEqual(type, "ServerCommand")) {
		Message_ServerCommand(type, message, jsondata, websocket)
	} else if (StrEqual(type, "FetchPlayer")) {
		Message_FetchPlayer(type, message, jsondata, websocket)
	} else if (StrEqual(type, "FetchPlayers")) {
		Message_FetchPlayers(type, message, jsondata, websocket)
	} else if (StrEqual(type, "KickPlayer")) {
		Message_KickPlayer(type, message, jsondata, websocket)
	} else if (StrEqual(type, "PlayerChat")) {
		Message_PlayerChat(type, message, jsondata, websocket)
	} else if (StrEqual(type, "PlayerChatAll")) {
		Message_PlayerChatAll(type, message, jsondata, websocket)
	} else if (StrEqual(type, "FetchServer")) {
		Message_FetchServer(type, message, jsondata, websocket)
	} else if (StrEqual(type, "PlayerHint")) {
		Message_PlayerHint(type, message, jsondata, websocket)
	} else if (StrEqual(type, "PlayerHintAll")) {
		Message_PlayerHintAll(type, message, jsondata, websocket)
	} else if (StrEqual(type, "PlayerCenterHint")) {
		Message_PlayerCenterHint(type, message, jsondata, websocket)
	} else if (StrEqual(type, "PlayerCenterHintAll")) {
		Message_PlayerCenterHintAll(type, message, jsondata, websocket)
	} else if (StrEqual(type, "PlaySound")) {
		Message_PlaySound(type, message, jsondata, websocket)
	} else if (StrEqual(type, "PlaySoundAll")) {
		Message_PlaySoundAll(type, message, jsondata, websocket)
	} else if (StrEqual(type, "SetMap")) {
		Message_SetMap(type, message, jsondata, websocket)
	} else if (StrEqual(type, "SetNextMap")) {
		Message_SetNextMap(type, message, jsondata, websocket)
	} else if (StrEqual(type, "TeleportPlayer")) {
		Message_TeleportPlayer(type, message, jsondata, websocket)
	} else if (StrEqual(type, "SlapPlayer")) {
		Message_SlapPlayer(type, message, jsondata, websocket)
	} else if (StrEqual(type, "SetPlayerRendering")) {
		Message_SetPlayerRendering(type, message, jsondata, websocket)
	}
}