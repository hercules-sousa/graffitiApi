import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { PostFactory } from "../factories";

export default class PostSeeder extends BaseSeeder {
  public async run() {
    await PostFactory.createMany(100);
  }
}
