<!-- Skin.svelte -->
<script lang="ts">
	import { SkinOption } from '../../options/options.js';
	import Selector from '../../options/Selector.svelte';
	import Black from '$lib/components/avataaar/avatar/skin/Colors/Black.svelte';

	import Brown from '$lib/components/avataaar/avatar/skin/Colors/Brown.svelte';
	import DarkBrown from '$lib/components/avataaar/avatar/skin/Colors/DarkBrown.svelte';
	import Light from '$lib/components/avataaar/avatar/skin/Colors/Light.svelte';
	import Pale from '$lib/components/avataaar/avatar/skin/Colors/Pale.svelte';
	import Tanned from '$lib/components/avataaar/avatar/skin/Colors/Tanned.svelte';
	import Yellow from '$lib/components/avataaar/avatar/skin/Colors/Yellow.svelte';

	export let maskID: string;

	const components = [
		{ component: Tanned, optionValue: 'Tanned' },
		{ component: Yellow, optionValue: 'Yellow' },
		{ component: Pale, optionValue: 'Pale' },
		{ component: Light, optionValue: 'Light' },
		{ component: Brown, optionValue: 'Brown' },
		{ component: DarkBrown, optionValue: 'DarkBrown' },
		{ component: Black, optionValue: 'Black' }
	];

	const option = SkinOption;
	const defaultOption = { component: Light, optionValue: 'Light' };
</script>

<Selector {option} {defaultOption} {components} restProps={{ maskID }} />
