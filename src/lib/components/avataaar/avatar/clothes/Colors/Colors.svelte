<!-- Colors.svelte -->
<script lang="ts">
	import Black from '$lib/components/avataaar/avatar/clothes/Colors/Black.svelte';
	import Blue01 from '$lib/components/avataaar/avatar/clothes/Colors/Blue01.svelte';
	import Blue02 from '$lib/components/avataaar/avatar/clothes/Colors/Blue02.svelte';
	import Blue03 from '$lib/components/avataaar/avatar/clothes/Colors/Blue03.svelte';
	import Gray01 from '$lib/components/avataaar/avatar/clothes/Colors/Gray01.svelte';
	import Gray02 from '$lib/components/avataaar/avatar/clothes/Colors/Gray02.svelte';
	import Heather from '$lib/components/avataaar/avatar/clothes/Colors/Heather.svelte';
	import PastelBlue from '$lib/components/avataaar/avatar/clothes/Colors/PastelBlue.svelte';
	import PastelGreen from '$lib/components/avataaar/avatar/clothes/Colors/PastelGreen.svelte';
	import PastelOrange from '$lib/components/avataaar/avatar/clothes/Colors/PastelOrange.svelte';
	import PastelRed from '$lib/components/avataaar/avatar/clothes/Colors/PastelRed.svelte';
	import PastelYellow from '$lib/components/avataaar/avatar/clothes/Colors/PastelYellow.svelte';
	import Pink from '$lib/components/avataaar/avatar/clothes/Colors/Pink.svelte';
	import Red from '$lib/components/avataaar/avatar/clothes/Colors/Red.svelte';
	import White from '$lib/components/avataaar/avatar/clothes/Colors/White.svelte';
	import { ClotheColorOption } from '$lib/components/avataaar/options/options.js';
	import Selector from '$lib/components/avataaar/options/Selector.svelte';

	export let maskID: string;

	const components = [
		{ component: Black, optionValue: 'Black' },
		{ component: Blue01, optionValue: 'Blue01' },
		{ component: Blue02, optionValue: 'Blue02' },
		{ component: Blue03, optionValue: 'Blue03' },
		{ component: Gray01, optionValue: 'Gray01' },
		{ component: Gray02, optionValue: 'Gray02' },
		{ component: Heather, optionValue: 'Heather' },
		{ component: PastelBlue, optionValue: 'PastelBlue' },
		{ component: PastelGreen, optionValue: 'PastelGreen' },
		{ component: PastelOrange, optionValue: 'PastelOrange' },
		{ component: PastelRed, optionValue: 'PastelRed' },
		{ component: PastelYellow, optionValue: 'PastelYellow' },
		{ component: Pink, optionValue: 'Pink' },
		{ component: Red, optionValue: 'Red' },
		{ component: White, optionValue: 'White' }
	];

	const option = ClotheColorOption;
	const defaultOption = { component: Gray01, optionValue: 'Gray01' };
</script>

<Selector {option} {defaultOption} {components} restProps={{ maskID }} />
