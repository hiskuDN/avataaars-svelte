<!-- Eyebrow.svelte -->
<script lang="ts">
	import { EyebrowOption } from '$lib/components/avataaar/options/options.js';
	import AngryNatural from './AngryNatural.svelte';
	import Default from './Default.svelte';
	import DefaultNatural from './DefaultNatural.svelte';
	import FlatNatural from './FlatNatural.svelte';
	import RaisedExcited from './RaisedExcited.svelte';
	import RaisedExcitedNatural from './RaisedExcitedNatural.svelte';
	import SadConcerned from './SadConcerned.svelte';
	import SadConcernedNatural from './SadConcernedNatural.svelte';
	import UnibrowNatural from './UnibrowNatural.svelte';
	import UpDown from './UpDown.svelte';
	import UpDownNatural from './UpDownNatural.svelte';
	import Angry from '$lib/components/avataaar/avatar/face/eyebrow/Angry.svelte';
	import Selector from '$lib/components/avataaar/options/Selector.svelte';

	const components = [
		{ component: Angry, optionValue: 'Angry' },
		{ component: AngryNatural, optionValue: 'AngryNatural' },
		{ component: Default, optionValue: 'Default' },
		{ component: DefaultNatural, optionValue: 'DefaultNatural' },
		{ component: FlatNatural, optionValue: 'FlatNatural' },
		{ component: RaisedExcited, optionValue: 'RaisedExcited' },
		{ component: RaisedExcitedNatural, optionValue: 'RaisedExcitedNatural' },
		{ component: SadConcerned, optionValue: 'SadConcerned' },
		{ component: SadConcernedNatural, optionValue: 'SadConcernedNatural' },
		{ component: UnibrowNatural, optionValue: 'UnibrowNatural' },
		{ component: UpDown, optionValue: 'UpDown' },
		{ component: UpDownNatural, optionValue: 'UpDownNatural' }
	];

	const option = EyebrowOption;
	const defaultOption = { component: Default, optionValue: 'Default' };
</script>

<Selector {option} {defaultOption} {components} />
