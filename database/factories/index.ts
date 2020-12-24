import Factory from "@ioc:Adonis/Lucid/Factory";
import User from "App/Models/User";

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    remember_me_token: "Yes",
  };
})
  .state("not_remember_me_token", (user) => (user.remember_me_token = "No"))
  .build();
