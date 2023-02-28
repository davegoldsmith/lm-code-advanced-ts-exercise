import { state, states } from "./states";

export class State {
	#state : state = states.MENU;

	get() {
		return this.#state as state;
	}

	set(newState : state) {
		this.#state = newState;
	}
}
