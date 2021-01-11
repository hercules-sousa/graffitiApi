import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";
import User from "App/Models/User";

interface UserAndPostsProps {
	id: number;
	user: Object;
	posts: Array<Object>;
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

	public async getAllUsersAndPosts() {
		let usersAndPosts: Array<UserAndPostsProps> = [];
		const users = await User.all();
		for (let position in users) {
			const user = users[position];
			const posts = await Post.query().select("*").where("user_id", "=", user.id);
			usersAndPosts.push({
				id: Number(position),
				user,
				posts,
			});
		}
		return usersAndPosts;
	}
}
