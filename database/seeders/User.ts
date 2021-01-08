import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { UserFactory } from "Database/factories";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const rememberedUsers = await UserFactory.createMany(10);
  }
}
