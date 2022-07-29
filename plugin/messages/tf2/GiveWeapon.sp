public void Message_GiveWeapon(const String:type[], const String:message[], const JSON_Object:jsondata, WebsocketHandle:websocket) {
	if (!tf2itemsENABLED) {
		SendSimpleMessage(websocket, "Error", "TF2ItemsMissing");
		return;
	}
	
	JSON_Object weapondata = jsondata.GetObject("message")

	int player = weapondata.GetInt("id");
	int weaponid = weapondata.GetInt("weaponid");
	int weaponslot = weapondata.GetInt("weaponslot");
	char classname[32];
	weapondata.GetString("weaponclassname", classname, sizeof(classname));

	JSON_Array attributes = view_as<JSON_Array>(weapondata.GetObject("attributes"));

	new Handle:item = TF2Items_CreateItem(PRESERVE_ATTRIBUTES);
	TF2Items_SetClassname(item, classname);
	TF2Items_SetItemIndex(item, weaponid);
	TF2Items_SetNumAttributes(item, attributes.Length);

	for (int i = 0; i < attributes.Length; i += 1) {
		JSON_Object data = attributes.GetObject(i);

		char type[16];
		data.GetString("type", type, sizeof(type));

		if (StrEqual(type, "float")) {
			TF2Items_SetAttribute(item, i, data.GetInt("id"), data.GetFloat("value"));
		} else if (StrEqual(type, "int")) {
			TF2Items_SetAttribute(item, i, data.GetInt("id"), data.GetInt("value"));
		} else if (StrEqual(type, "bool")) {
			if (data.GetBool("value") == true) {
				TF2Items_SetAttribute(item, i, data.GetInt("id"), 1.0);
			} else {
				TF2Items_SetAttribute(item, i, data.GetInt("id"), 0.0);
			}
		}
	}

	TF2_RemoveWeaponSlot(player, weaponslot);
	new entity = TF2Items_GiveNamedItem(player, item);
	SetEntProp(entity, Prop_Send, "m_bValidatedAttachedEntity", 1);
	EquipPlayerWeapon(player, entity);
}