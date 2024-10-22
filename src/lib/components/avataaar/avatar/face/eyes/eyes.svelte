<!-- Eyes.svelte -->
<script lang="ts">
	import { EyesOption } from '$lib/components/avataaar/options/options.js';
	import Selector from '$lib/components/avataaar/options/Selector.svelte';
	import Close from '$lib/components/avataaar/avatar/face/eyes/Close.svelte';
	import Default from '$lib/components/avataaar/avatar/face/eyes/Default.svelte';
	import Cry from './Cry.svelte';
	import Dizzy from './Dizzy.svelte';
	import EyeRoll from './EyeRoll.svelte';
	import Happy from './Happy.svelte';
	import Hearts from './Hearts.svelte';
	import Side from './Side.svelte';
	import Squint from './Squint.svelte';
	import Surprised from './Surprised.svelte';
	import Wink from './Wink.svelte';
	import WinkWacky from './WinkWacky.svelte';

	const components = [
		{ component: Close, optionValue: 'Close' },
		{ component: Cry, optionValue: 'Cry' },
		{ component: Default, optionValue: 'Default' },
		{ component: Dizzy, optionValue: 'Dizzy' },
		{ component: EyeRoll, optionValue: 'EyeRoll' },
		{ component: Happy, optionValue: 'Happy' },
		{ component: Hearts, optionValue: 'Hearts' },
		{ component: Side, optionValue: 'Side' },
		{ component: Squint, optionValue: 'Squint' },
		{ component: Surprised, optionValue: 'Surprised' },
		{ component: Wink, optionValue: 'Wink' },
		{ component: WinkWacky, optionValue: 'WinkWacky' }
	];

	const option = EyesOption;
	const defaultOption = { component: Default, optionValue: 'Default' };
</script>

<Selector {option} {defaultOption} {components} />
