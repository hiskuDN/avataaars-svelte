<!-- Clothes.svelte -->
<script lang="ts">
	import { ClotheOption } from '../../options/options.js';
	import Selector from '../../options/Selector.svelte';
	import BlazerShirt from './BlazerShirt.svelte';
	import BlazerSweater from './BlazerSweater.svelte';
	import CollarSweater from './CollarSweater.svelte';
	import GraphicShirt from './GraphicShirt.svelte';
	import Hoodie from './Hoodie.svelte';
	import Overall from './Overall.svelte';
	import ShirtCrewNeck from './ShirtCrewNeck.svelte';
	import ShirtScoopNeck from './ShirtScoopNeck.svelte';
	import ShirtVNeck from './ShirtVNeck.svelte';

	const components = [
		{ component: BlazerShirt, optionValue: 'BlazerShirt' },
		{ component: BlazerSweater, optionValue: 'BlazerSweater' },
		{ component: CollarSweater, optionValue: 'CollarSweater' },
		{ component: GraphicShirt, optionValue: 'GraphicShirt' },
		{ component: Hoodie, optionValue: 'Hoodie' },
		{ component: Overall, optionValue: 'Overall' },
		{ component: ShirtCrewNeck, optionValue: 'ShirtCrewNeck' },
		{ component: ShirtScoopNeck, optionValue: 'ShirtScoopNeck' },
		{ component: ShirtVNeck, optionValue: 'ShirtVNeck' }
	];

	const option = ClotheOption;
	const defaultOption = { component: BlazerShirt, optionValue: 'BlazerShirt' };
</script>

<Selector {option} {defaultOption} {components} />
