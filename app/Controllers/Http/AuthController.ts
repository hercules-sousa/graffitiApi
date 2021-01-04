import User from "App/Models/User";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async register({ request }: HttpContextContract) {
    const validationSchema = schema.create({
      username: schema.string(),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: "users", column: "email" }),
      ]),
      password: schema.string(),
      number: schema.string(),
      city: schema.string(),
      state: schema.string(),
      country: schema.string(),
      remember_me_token: schema.string(),
    });

    const userDetails = await request.validate({
      schema: validationSchema,
    });

    const user = new User();
    user.username = userDetails.username;
    user.email = userDetails.email;
    user.password = userDetails.password;
    user.number = userDetails.number;
    user.city = userDetails.city;
    user.state = userDetails.state;
    user.country = userDetails.country;
    user.remember_me_token = userDetails.remember_me_token;
    await user.save();

    return { Status: "User created" };
    // await auth.login(user);
    // response.redirect("/dashboard");
  }
}
