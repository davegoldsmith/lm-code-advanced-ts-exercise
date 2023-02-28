import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { addBlogPost } from "./menu/options/add_blog_post/add_blog_post";
import { addUser } from "./menu/options/add_user/add_user";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { State } from "./states/state";
import { states } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear(true);
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	let state = new State();

	while (true) {
		switch (state.get()) {
			case states.MENU:
				const newMenuOption = await showMenu();
				state.set(newMenuOption);
				break;
			case states.SEND_MESSAGE:
				const nextState = await sendMessage();
				state.set(nextState);
				break;
			case states.SHOW_POSTS:
				clear();
				const posts = await showAllPosts();
				state.set(states.MENU);
				break;
			case states.SHOW_USERS:
				clear();
				const users = await showAllUsers();
				state.set(states.MENU);
				break;
			case states.BROWSE_POSTS:
				clear();
				const post = await browsePosts();
				state.set(states.MENU);
				break;
			case states.ADD_USER:
				clear();
				const user = await addUser();
				state.set(user);
				break;
			case states.ADD_POST:
				clear();
				const addPost = await addBlogPost();
				state.set(addPost);
				break;
			case states.UNKNOWN:
				clear();
				print("😵 We have entered an unknown state.");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state.set(states.MENU);
				break;
			case states.CABBAGE:
				clear();
				print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
				print("🥬      CABBAGE MODE UNLOCKED     🥬", false);
				print("🥬     Why did you want this?     🥬", false);
				print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state.set(states.MENU);
				break;
			default:
				clear();
				print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state.get()}"`);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				print("💥 Crashing the program now...  💥", false);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				printNewLine();
				exit(99);
				break;
		}
	}
}

begin();
