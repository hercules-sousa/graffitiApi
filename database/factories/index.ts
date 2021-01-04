import Factory from "@ioc:Adonis/Lucid/Factory";
import User from "App/Models/User";

export const UserFactory = Factory.define(User, ({ faker }) => {
  let rememberMeTokenOptions = ["Yes", "No"];
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    number: faker.phone.phoneNumber(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    remember_me_token: rememberMeTokenOptions[faker.random.number({ min: 0, max: 1 })],
  };
}).build();
