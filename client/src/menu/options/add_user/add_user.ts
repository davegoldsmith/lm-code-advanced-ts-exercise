import { sendUserToServer } from "../../../api/send_user_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addUser() {
	clear();

	const userName = await prompt("What is the name of the new user? ");

	printNewLine();
	print(`➕🧑 Creating user "${userName}"...`);

	const success = await sendUserToServer(userName);

	if (success === true) print("🥳 User created successfully!");
	else print("😵 User could NOT be created.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
