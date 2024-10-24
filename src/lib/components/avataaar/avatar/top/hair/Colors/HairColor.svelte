<!-- HairColor.svelte -->
<script lang="ts">
	import Auburn from './Auburn.svelte';
	import Black from './Black.svelte';
	import Blonde from './Blonde.svelte';
	import BlondeGolden from './BlondeGolden.svelte';
	import Brown from './Brown.svelte';
	import BrownDark from './BrownDark.svelte';
	import PastelPink from './PastelPink.svelte';
	import Blue from './Blue.svelte';
	import Platinum from './Platinum.svelte';
	import Red from './Red.svelte';
	import SilverGray from './SilverGray.svelte';
	import Selector from '$lib/components/avataaar/options/Selector.svelte';
	import { HairColorOption } from '$lib/components/avataaar/options/options.js';

	export let maskID: string;

	const option = HairColorOption;
	const defaultOption = { component: BrownDark, optionValue: 'BrownDark' };

	const components = [
		{ component: Auburn, optionValue: 'Auburn' },
		{ component: Black, optionValue: 'Black' },
		{ component: Blonde, optionValue: 'Blonde' },
		{ component: BlondeGolden, optionValue: 'BlondeGolden' },
		{ component: Brown, optionValue: 'Brown' },
		{ component: BrownDark, optionValue: 'BrownDark' },
		{ component: PastelPink, optionValue: 'PastelPink' },
		{ component: Blue, optionValue: 'Blue' },
		{ component: Platinum, optionValue: 'Platinum' },
		{ component: Red, optionValue: 'Red' },
		{ component: SilverGray, optionValue: 'SilverGray' }
	];
</script>

<Selector {option} {defaultOption} {components} restProps={{ maskID }} />
