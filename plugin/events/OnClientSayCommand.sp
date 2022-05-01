public Action OnClientSayCommand(int client, const char[] command, const char[] sArgs)
{
	JSON_Object obj = new JSON_Object()
	obj.SetString("args", sArgs)
	obj.SetString("command", command)
	obj.SetInt("userid", client)

	BroadcastComplexMessage("PlayerChat", obj)
}