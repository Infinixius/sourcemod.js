public void Message_FetchPlayers(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	for (int i = 1; i <= GetClientCount(true); i++)
		{
			if (IsClientInGame(i)) {
				char name[32]
				char ip[32]
				char authid[32]
				char weapon[64]

				int r
				int g
				int b
				int a

				GetClientName(i, name, sizeof(name))
				GetClientIP(i, ip, sizeof(ip))
				GetClientAuthId(i, AuthId_Engine, authid, sizeof(authid))
				GetClientWeapon(i, weapon, sizeof(weapon))

				GetEntityRenderColor(i, r, g, b, a)

				JSON_Object obj = new JSON_Object()
				obj.SetInt("id", i)
				obj.SetString("name", name)
				obj.SetString("authid", authid)
				obj.SetString("ip", ip)
				obj.SetString("weapon", weapon)
				obj.SetFloat("gravity", GetEntityGravity(i))
				obj.SetInt("health", GetClientHealth(i))
				obj.SetInt("kills", GetClientFrags(i))
				obj.SetInt("deaths", GetClientDeaths(i))
				obj.SetBool("alive", IsPlayerAlive(i))
				obj.SetInt("team", GetClientTeam(i))
				if (!IsFakeClient(i)) {
					obj.SetFloat("connectionTime", GetClientTime(i))
				} else {
					obj.SetFloat("connectionTime", 0.0)
				}

				obj.SetInt("colorr", r)
				obj.SetInt("colorg", g)
				obj.SetInt("colorb", b)
				obj.SetInt("colora", a)
				obj.SetInt("rendereffect", GetEntityRenderFx(i))
				obj.SetInt("rendermode", GetEntityRenderMode(i))
				
				SendComplexMessage(websocket, "PlayerUpdate", obj)
			}
		}
}