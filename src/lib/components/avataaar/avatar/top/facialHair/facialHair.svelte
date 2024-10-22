<!-- FacialHair.svelte -->
<script lang="ts">
	import { FacialHairOption } from '$lib/components/avataaar/options/options.js';
	import Selector from '$lib/components/avataaar/options/Selector.svelte';
	import BeardLight from './BeardLight.svelte';
	// import BeardMajestic from './BeardMajestic.svelte';
	// import BeardMedium from './BeardMedium.svelte';
	import Blank from '$lib/components/avataaar/avatar/top/facialHair/Blank.svelte';
	// import MoustacheFancy from './MoustacheFancy.svelte';
	// import MoustacheMagnum from './MoustacheMagnum.svelte';

	const components = [
		{ component: Blank, optionValue: 'Blank' },
		{ component: BeardLight, optionValue: 'BeardLight' },
		//   { component: BeardMedium, optionValue: 'BeardMedium' },
		//   { component: BeardMajestic, optionValue: 'BeardMajestic' },
		//   { component: MoustacheFancy, optionValue: 'MoustacheFancy' },
		//   { component: MoustacheMagnum, optionValue: 'MoustacheMagnum' },
	];

	const option = FacialHairOption;
	const defaultOption = { component: Blank, optionValue: 'Blank' };
</script>

<Selector {option} {defaultOption} {components} />
