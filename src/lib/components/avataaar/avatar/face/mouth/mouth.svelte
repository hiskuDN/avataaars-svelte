<!-- Mouth.svelte -->
<script lang="ts">
	import { MouthOption } from '$lib/components/avataaar/options/options.js';
	import Selector from '$lib/components/avataaar/options/Selector.svelte';
	import Concerned from './Concerned.svelte';
	import Default from './Default.svelte';
	import Disbelief from './Disbelief.svelte';
	import Eating from './Eating.svelte';
	import Grimace from './Grimace.svelte';
	import Sad from './Sad.svelte';
	import ScreamOpen from './ScreamOpen.svelte';
	import Serious from './Serious.svelte';
	import Smile from './Smile.svelte';
	import Tongue from './Tongue.svelte';
	import Twinkle from './Twinkle.svelte';
	import Vomit from './Vomit.svelte';

	const components = [
		{ component: Concerned, optionValue: 'Concerned' },
		{ component: Default, optionValue: 'Default' },
		{ component: Disbelief, optionValue: 'Disbelief' },
		{ component: Eating, optionValue: 'Eating' },
		{ component: Grimace, optionValue: 'Grimace' },
		{ component: Sad, optionValue: 'Sad' },
		{ component: ScreamOpen, optionValue: 'ScreamOpen' },
		{ component: Serious, optionValue: 'Serious' },
		{ component: Smile, optionValue: 'Smile' },
		{ component: Tongue, optionValue: 'Tongue' },
		{ component: Twinkle, optionValue: 'Twinkle' },
		{ component: Vomit, optionValue: 'Vomit' }
	];

	const option = MouthOption;
	const defaultOption = { component: Default, optionValue: 'Default' };
</script>

<Selector {option} {defaultOption} {components} />
