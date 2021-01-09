import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";
import User from "App/Models/User";

interface UserProps {
	id: number;
}

export default class UsersController {
	public async index() {
		const users = await User.all();
		return users;
	}

	public async getSingleUserAndPosts(request: HttpContextContract) {
		const { id } = request.params;
		return this.getSingleUserAndPostsById(id);
	}

	public async getSingleUserAndPostsById(id: number) {
		const user = await User.find(id);
		const posts = await Post.query().where("user_id", "=", String(id));
		return {
			user,
			posts,
		};
	}

	public async getUsersAndPosts() {
		let usersAndPosts = [{}];
		const users = await User.all();
		users.forEach(async (user) => {
			const { id } = user;
			await this.getSingleUserAndPostsById(Number(id)).then((result) => {
				console.log("RESULTADO AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
				console.log(result);
				usersAndPosts.push(result);
			});
		});
		return usersAndPosts;
	}
}
