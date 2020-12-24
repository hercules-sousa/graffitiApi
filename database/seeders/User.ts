import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { UserFactory } from "Database/factories";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const rememberedUsers = await UserFactory.createMany(25);
    const notRememberedUsers = await UserFactory.apply("not_remember_me_token").createMany(25);
  }
}
