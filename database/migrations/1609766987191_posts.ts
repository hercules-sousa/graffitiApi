import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Posts extends BaseSchema {
	protected tableName = "posts";

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments("id");
			table.integer("user_id").notNullable();
			table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
			table.string("art_image").notNullable();
			table.integer("likes").notNullable();
			table.timestamps(true);
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
