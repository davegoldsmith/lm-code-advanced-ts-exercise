export const states = {
	MENU: "MENU",

	SEND_MESSAGE: "SEND_MESSAGE",

	SHOW_POSTS: "SHOW_POSTS",
	SHOW_USERS: "SHOW_USERS",
	BROWSE_POSTS: "BROWSE_POSTS",

	ADD_USER: "ADD_USER",
	ADD_POST: "ADD_POST",

	UNKNOWN: "UNKNOWN",
	CABBAGE: "CABBAGE"
} as const;

export type state = keyof typeof states;
