public void Event_PlayerConnect(Event event, const char[] name, bool dontBroadcast)
{
	int userid = event.GetInt("userid", userid)

	char username[64]
	event.GetString("name", username, sizeof(username))

	char ip[64]
	event.GetString("address", ip, sizeof(ip))

	char networkid[64]
	event.GetString("networkid", networkid, sizeof(networkid))

	bool bot = event.GetBool("bot")

	JSON_Object obj = new JSON_Object()
	obj.SetString("name", username)
	obj.SetString("ip", ip)
	obj.SetInt("userid", userid)
	obj.SetString("networkid", networkid)
	obj.SetBool("bot", bot)

	BroadcastComplexMessage("PlayerConnect", obj)
}