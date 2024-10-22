<!-- Top.svelte -->
<script lang="ts">
	import { TopOption } from '../../options/options.js';
	import Selector from '../../options/Selector.svelte';
	import NoHair from './/NoHair.svelte';
	// import Eyepatch from './Eyepatch.svelte';
	// import Hat from './Hat.svelte';
	// import Hijab from './Hijab.svelte';
	// import Turban from './Turban.svelte';
	// import WinterHat1 from './WinterHat1.svelte';
	// import WinterHat2 from './WinterHat2.svelte';
	// import WinterHat3 from './WinterHat3.svelte';
	// import WinterHat4 from './WinterHat4.svelte';
	// import LongHairBigHair from './LongHairBigHair.svelte';
	// import LongHairBob from './LongHairBob.svelte';
	// import LongHairBun from './LongHairBun.svelte';
	// import LongHairCurly from './LongHairCurly.svelte';
	// import LongHairCurvy from './LongHairCurvy.svelte';
	// import LongHairDreads from './LongHairDreads.svelte';
	// import LongHairFrida from './LongHairFrida.svelte';
	// import LongHairFro from './LongHairFro.svelte';
	// import LongHairFroBand from './LongHairFroBand.svelte';
	// import LongHairNotTooLong from './LongHairNotTooLong.svelte';
	// import LongHairShavedSides from './LongHairShavedSides.svelte';
	// import LongHairMiaWallace from './LongHairMiaWallace.svelte';
	// import LongHairStraight from './LongHairStraight.svelte';
	// import LongHairStraight2 from './LongHairStraight2.svelte';
	// import LongHairStraightStrand from './LongHairStraightStrand.svelte';
	// import ShortHairDreads01 from './ShortHairDreads01.svelte';
	// import ShortHairDreads02 from './ShortHairDreads02.svelte';
	// import ShortHairFrizzle from './ShortHairFrizzle.svelte';
	// import ShortHairShaggyMullet from './ShortHairShaggyMullet.svelte';
	// import ShortHairShortCurly from './ShortHairShortCurly.svelte';
	// import ShortHairShortFlat from './ShortHairShortFlat.svelte';
	// import ShortHairShortRound from './ShortHairShortRound.svelte';
	// import ShortHairShortWaved from './ShortHairShortWaved.svelte';
	// import ShortHairSides from './ShortHairSides.svelte';
	// import ShortHairTheCaesar from './ShortHairTheCaesar.svelte';
	// import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart.svelte';

	const components = [
		{ component: NoHair, optionValue: 'NoHair' }
		// { component: Eyepatch, optionValue: 'Eyepatch' },
		// { component: Hat, optionValue: 'Hat' },
		// { component: Hijab, optionValue: 'Hijab' },
		// { component: Turban, optionValue: 'Turban' },
		// { component: WinterHat1, optionValue: 'WinterHat1' },
		// { component: WinterHat2, optionValue: 'WinterHat2' },
		// { component: WinterHat3, optionValue: 'WinterHat3' },
		// { component: WinterHat4, optionValue: 'WinterHat4' },
		// { component: LongHairBigHair, optionValue: 'LongHairBigHair' },
		// { component: LongHairBob, optionValue: 'LongHairBob' },
		// { component: LongHairBun, optionValue: 'LongHairBun' },
		// { component: LongHairCurly, optionValue: 'LongHairCurly' },
		// { component: LongHairCurvy, optionValue: 'LongHairCurvy' },
		// { component: LongHairDreads, optionValue: 'LongHairDreads' },
		// { component: LongHairFrida, optionValue: 'LongHairFrida' },
		// { component: LongHairFro, optionValue: 'LongHairFro' },
		// { component: LongHairFroBand, optionValue: 'LongHairFroBand' },
		// { component: LongHairNotTooLong, optionValue: 'LongHairNotTooLong' },
		// { component: LongHairShavedSides, optionValue: 'LongHairShavedSides' },
		// { component: LongHairMiaWallace, optionValue: 'LongHairMiaWallace' },
		// { component: LongHairStraight, optionValue: 'LongHairStraight' },
		// { component: LongHairStraight2, optionValue: 'LongHairStraight2' },
		// { component: LongHairStraightStrand, optionValue: 'LongHairStraightStrand' },
		// { component: ShortHairDreads01, optionValue: 'ShortHairDreads01' },
		// { component: ShortHairDreads02, optionValue: 'ShortHairDreads02' },
		// { component: ShortHairFrizzle, optionValue: 'ShortHairFrizzle' },
		// { component: ShortHairShaggy, optionValue: 'ShortHairShaggy' }, // Broken, fix it later
		// { component: ShortHairShaggyMullet, optionValue: 'ShortHairShaggyMullet' },
		// { component: ShortHairShortCurly, optionValue: 'ShortHairShortCurly' },
		// { component: ShortHairShortFlat, optionValue: 'ShortHairShortFlat' },
		// { component: ShortHairShortRound, optionValue: 'ShortHairShortRound' },
		// { component: ShortHairShortWaved, optionValue: 'ShortHairShortWaved' },
		// { component: ShortHairSides, optionValue: 'ShortHairSides' },
		// { component: ShortHairTheCaesar, optionValue: 'ShortHairTheCaesar' },
		// { component: ShortHairTheCaesarSidePart, optionValue: 'ShortHairTheCaesarSidePart' }
	];

	const option = TopOption;
	// deafult was LongHairStraight
	const defaultOption = { component: NoHair, optionValue: 'LongHairStraight' };
</script>

<Selector {option} {defaultOption} {components}>
	<slot />
</Selector>
