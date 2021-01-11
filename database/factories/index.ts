import Factory from "@ioc:Adonis/Lucid/Factory";
import Post from "App/Models/Post";
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

export const PostFactory = Factory.define(Post, ({ faker }) => {
  return {
    user_id: faker.random.number({ min: 0, max: 10 }),
    art_image: faker.image.image(),
    likes: faker.random.number({ min: 0, max: 10000 }),
  };
}).build();
