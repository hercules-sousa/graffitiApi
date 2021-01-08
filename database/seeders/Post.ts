import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { PostFactory } from "../factories";

export default class PostSeeder extends BaseSeeder {
  public async run() {
    const posts = await PostFactory.createMany(100);
  }
}
