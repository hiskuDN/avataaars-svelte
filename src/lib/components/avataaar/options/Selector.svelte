<!-- Selector.svelte -->
<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	import type OptionContext from './OptionContext.js';
	import type Option from './Option.js';

	export let option: Option;
	export let defaultOption: { component: any; optionValue: string };
	export let components: { component: any; optionValue: string }[];

	// Collect any additional props passed to Selector
	export let restProps: any = {};

	const optionContext: OptionContext = getContext('optionContext');

	let selectedComponent: any = null;

	function updateOptionValues() {
		const values = components.map((c) => c.optionValue);
		const uniqueValues = Array.from(new Set(values));

		if (uniqueValues.length !== values.length) {
			throw new Error('Duplicate values in components optionValues');
		}

		optionContext.setOptions(option.key, values);
	}

	function optionContextUpdate() {
		selectedComponent = getSelectedComponent();
	}

	function getSelectedComponent() {
		const value = optionContext.getValue(option.key);
		for (const c of components) {
			if (c.optionValue === value) {
				return c.component;
			}
		}

		return null;
	}

	onMount(() => {
		const defaultValue =
			typeof defaultOption === 'string' ? defaultOption : defaultOption.optionValue;

		// optionContext.addStateChangeListener(optionContextUpdate);
		optionContext.optionEnter(option.key);
		const optionState = optionContext.getOptionState(option.key);

		updateOptionValues();

		if (optionState) {
			optionContext.setDefaultValue(option.key, defaultValue);
		}

		selectedComponent = getSelectedComponent();
	});

	const unsubscribe = optionContext.state.subscribe(optionContextUpdate);

	onDestroy(() => {
		// optionContext.removeStateChangeListener(optionContextUpdate);
		optionContext.optionExit(option.key);
		unsubscribe();
	});
</script>

{#if selectedComponent}
	<!-- Pass down all additional props to the selected component -->
	<svelte:component this={selectedComponent} {...restProps} />
{/if}
