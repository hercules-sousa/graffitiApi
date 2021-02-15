import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";
import User from "App/Models/User";

import { UserAndPostsProps } from "./props";

export default class UsersController {
	public async index() {
		return await User.all();
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
		let position: number;
		for (position = 0; position < users.length; position++) {
			const user = users[users.length - 1 - position];
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
