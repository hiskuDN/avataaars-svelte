// OptionContext.ts
import { writable, type Writable } from 'svelte/store';
import type Option from './Option.js';

export interface OptionState {
	key: string;
	options: Array<string>;
	defaultValue?: string;
	available: number;
}

export type OptionContextState = { [index: string]: OptionState };

export default class OptionContext {
	private _state: Writable<OptionContextState>;
	private _data: Writable<{ [index: string]: string }>;
	private readonly _options: Array<Option>;

	get options() {
		return this._options;
	}

	get state() {
		return this._state;
	}

	get data() {
		return this._data;
	}

	constructor(options: Array<Option>) {
		this._options = options;

		// Initialize state and data as writable stores
		const initialState: OptionContextState = {};

		for (const option of options) {
			initialState[option.key] = {
				key: option.key,
				available: 0,
				options: []
			};
		}

		this._state = writable(initialState);
		this._data = writable({});
	}

	optionEnter(key: string) {
		this._state.update((state) => {
			const optionState = state[key];
			return {
				...state,
				[key]: {
					...optionState,
					available: optionState.available + 1
				}
			};
		});
	}

	optionExit(key: string) {
		this._state.update((state) => {
			const optionState = state[key];
			return {
				...state,
				[key]: {
					...optionState,
					available: optionState.available - 1
				}
			};
		});
	}

	getOptionState(key: string): OptionState | null {
		let optionState: OptionState | undefined;
		this._state.subscribe((state) => {
			optionState = state[key];
		})();
		return optionState || null;
	}

	getValue(key: string): string | null {
		let value: string | undefined;
		const optionState: OptionState | null = this.getOptionState(key);
		if (!optionState) {
			return null;
		}
		this._data.subscribe((data) => {
			value = data[key];
		})();
		if (value) {
			return value;
		}
		return optionState.defaultValue || null;
	}

	setValue(key: string, value: string) {
		this._data.update((data) => {
			return {
				...data,
				[key]: value
			};
		});
	}

	// Set single source of truth
	setData(data: { [index: string]: string }) {
		this._data.set(data);
	}

	setDefaultValue(key: string, defaultValue: string) {
		this._state.update((state) => {
			const optionState = state[key];
			return {
				...state,
				[key]: {
					...optionState,
					defaultValue
				}
			};
		});
	}

	setOptions(key: string, options: Array<string>) {
		this._state.update((state) => {
			const optionState = state[key];
			return {
				...state,
				[key]: {
					...optionState,
					options
				}
			};
		});
	}
}
