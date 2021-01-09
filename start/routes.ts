import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
	return { hello: "world" };
});

Route.post("register", "AuthController.register");

Route.get("dashboard", async ({ auth }) => {
	const user = auth.authenticate();
	return { login: `you are logged ${(await user).username}` };
});

Route.get("users", "UsersController.index");
Route.get("posts", "PostsController.index");

Route.get("user/:id", "UsersController.getSingleUserAndPosts");
Route.get("users-and-posts", "UsersController.getUsersAndPosts");
