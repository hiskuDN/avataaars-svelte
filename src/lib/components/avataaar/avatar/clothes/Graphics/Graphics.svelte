<!-- Graphics.svelte -->
<script lang="ts">
	import { GraphicOption } from '$lib/components/avataaar/options/options.js';
	import Skull from '$lib/components/avataaar/avatar/clothes/Graphics/Skull.svelte';
	import Bat from '$lib/components/avataaar/avatar/clothes/Graphics/Bat.svelte';
	import Cumbia from '$lib/components/avataaar/avatar/clothes/Graphics/Cumbia.svelte';
	import Deer from '$lib/components/avataaar/avatar/clothes/Graphics/Deer.svelte';
	import Diamond from '$lib/components/avataaar/avatar/clothes/Graphics/Diamond.svelte';
	import Hola from '$lib/components/avataaar/avatar/clothes/Graphics/Hola.svelte';
	import Pizza from '$lib/components/avataaar/avatar/clothes/Graphics/Pizza.svelte';
	import Resist from '$lib/components/avataaar/avatar/clothes/Graphics/Resist.svelte';
	import Selena from '$lib/components/avataaar/avatar/clothes/Graphics/Selena.svelte';
	import Bear from '$lib/components/avataaar/avatar/clothes/Graphics/Bear.svelte';
	import SkullOutline from '$lib/components/avataaar/avatar/clothes/Graphics/SkullOutline.svelte';
	import Selector from '$lib/components/avataaar/options/Selector.svelte';

	export let maskID: string;

	const option = GraphicOption;
	const defaultOption = { component: Skull, optionValue: Skull.optionValue };

	const components = [
		{ component: Bat, optionValue: Bat.optionValue },
		{ component: Cumbia, optionValue: Cumbia.optionValue },
		{ component: Deer, optionValue: Deer.optionValue },
		{ component: Diamond, optionValue: Diamond.optionValue },
		{ component: Hola, optionValue: Hola.optionValue },
		{ component: Pizza, optionValue: Pizza.optionValue },
		{ component: Resist, optionValue: Resist.optionValue },
		{ component: Selena, optionValue: Selena.optionValue },
		{ component: Bear, optionValue: Bear.optionValue },
		{ component: SkullOutline, optionValue: SkullOutline.optionValue },
		{ component: Skull, optionValue: Skull.optionValue }
	];
</script>

<Selector {option} {defaultOption} {components} {maskID} />
