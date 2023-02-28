import { BlogSubmission } from "../types/blog_submission";
import { baseUrl } from "./base_url";

export async function sendBlogPost(blog: BlogSubmission) {
	try {
		const result = await fetch(baseUrl + "/api/posts/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
      body: JSON.stringify(blog),
		});

		const json = await result.json();
		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}