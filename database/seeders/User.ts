import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { UserFactory } from 'Database/factories';

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const users = await UserFactory.createMany(5);
  }
}
