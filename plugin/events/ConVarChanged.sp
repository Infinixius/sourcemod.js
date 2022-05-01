public void Event_ConVarChanged(Event event, const char[] name, bool dontBroadcast)
{
	char name[64]
	event.GetString("cvarname", name, sizeof(name))

	char value[64]
	event.GetString("cvarvalue", value, sizeof(value))

	char output[1024]
	JSON_Object obj = new JSON_Object()
	obj.SetString("name", name)
	obj.SetString("value", value)

	obj.Encode(output, sizeof(output))

	BroadcastComplexMessage("ConVarChanged", obj)
}