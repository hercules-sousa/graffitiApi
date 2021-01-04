import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.get("dashboard", async ({ auth }) => {
  const user = auth.authenticate();
  return { login: `you are logged ${(await user).username}` };
});

Route.get("users", "UsersController.index");

Route.post("register", "AuthController.register");
