<!-- Accessories.svelte -->
<script lang="ts">
	import { AccessoriesOption } from '$lib/components/avataaar/options/options.js';
	import Selector from '$lib/components/avataaar/options/Selector.svelte';
	import Blank from '$lib/components/avataaar/avatar/top/accessories/Blank.svelte';
	// import Kurt from './Kurt.svelte';
	// import Prescription01 from './Prescription01.svelte';
	// import Prescription02 from './Prescription02.svelte';
	// import Round from './Round.svelte';
	// import Sunglasses from './Sunglasses.svelte';
	// import Wayfarers from './Wayfarers.svelte';

	const components = [
		{ component: Blank, optionValue: 'Blank' }
		// { component: Kurt, optionValue: 'Kurt' },
		// { component: Prescription01, optionValue: 'Prescription01' },
		// { component: Prescription02, optionValue: 'Prescription02' },
		// { component: Round, optionValue: 'Round' },
		// { component: Sunglasses, optionValue: 'Sunglasses' },
		// { component: Wayfarers, optionValue: 'Wayfarers' }
	];

	const option = AccessoriesOption;
	const defaultOption = { component: Blank, optionValue: 'Blank' };
</script>

<Selector {option} {defaultOption} {components} />
