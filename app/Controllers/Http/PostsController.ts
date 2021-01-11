// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post";

export default class PostsController {
	public async index() {
		return await Post.all();
	}
}
