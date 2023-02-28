import { sendBlogPost } from "../../../api/send_blog_post";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addBlogPost() {
	clear();

	const authorID = await prompt("Please specify author id of the blog post? ");
  const title = await prompt("What is title of the blog post? ");
  const text = await prompt("What is text for the blog post? ");

	printNewLine();
	print(`➕📨 Creating new blog posting "${title}"...`);

	const success = await sendBlogPost({authorID, title, text});

	if (success === true) print("🥳 Blog successfully posted!");
	else print("😵 Blog post could NOT be created.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}