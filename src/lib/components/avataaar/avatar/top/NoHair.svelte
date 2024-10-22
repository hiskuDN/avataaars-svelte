<!-- NoHair.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import FacialHair from '$lib/components/avataaar/avatar/top/facialHair/facialHair.svelte';
	export const optionValue: string = 'NoHair';

	let filter1: string;
	let mask1: string;
	let path1: string;

	onMount(() => {
		const uniqueId = (): string => 'id-' + Math.random().toString(36).substring(2, 11);
		filter1 = uniqueId();
		mask1 = uniqueId();
		path1 = uniqueId();
	});
</script>

<g id="Top" stroke-width="1" fill-rule="evenodd">
	<defs>
		<rect id={path1} x="0" y="0" width="264" height="280" />
		<filter
			x="-0.8%"
			y="-2.0%"
			width="101.5%"
			height="108.0%"
			filterUnits="objectBoundingBox"
			id={filter1}
		>
			<feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
			<feColorMatrix
				values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
				type="matrix"
				in="shadowOffsetOuter1"
				result="shadowMatrixOuter1"
			/>
			<feMerge>
				<feMergeNode in="shadowMatrixOuter1" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
	</defs>
	<mask id={mask1} fill="white">
		<use xlink:href={'#' + path1} />
	</mask>
	<g id="Mask" />
	<g id="Top/No-Hair" mask={'url(#' + mask1 + ')'}>
		<g transform="translate(-1.000000, 0.000000)">
			<FacialHair />
			<slot />
		</g>
	</g>
</g>
