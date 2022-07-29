public void Message_ApplyCondition(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	JSON_Object conditiondata = jsondata.GetObject("message")
	
	int player = conditiondata.GetInt("id")
	int condition = conditiondata.GetInt("condition")
	int duration = conditiondata.GetFloat("duration")
	
	if (IsClientInGame(player)) {
		if (duration == 0) {
			TF2_AddCondition(player, condition, TFCondDuration_Infinite, 0);
		} else {
			TF2_AddCondition(player, condition, duration, 0);
		}
	}
}