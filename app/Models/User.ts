import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
	public static table = "users";

	@column({ isPrimary: true })
	public id: number;

	@column()
	public username: string;

	@column()
	public email: string;

	@column()
	public password: string;

	@column()
	public number: string;

	@column()
	public city: string;

	@column()
	public state: string;

	@column()
	public country: string;

	@column()
	public remember_me_token: string;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
