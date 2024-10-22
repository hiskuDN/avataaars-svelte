<!-- Grimace.svelte -->
<script lang="ts">
	export const optionValue = 'Grimace';

	const uniqueId = () => 'id-' + Math.random().toString(36).substr(2, 9);
	const path1 = uniqueId();
	const mask1 = uniqueId();
</script>

<g id="Mouth/Grimace" transform="translate(2.000000, 52.000000)">
	<defs>
		<rect id={path1} x="24" y="9" width="60" height="22" rx="11" />
	</defs>
	<rect
		id="Mouth"
		fill-opacity="0.599999964"
		fill="#000000"
		fill-rule="evenodd"
		x="22"
		y="7"
		width="64"
		height="26"
		rx="13"
	/>
	<mask id={mask1} fill="white">
		<use href={'#' + path1} />
	</mask>
	<use id="Mouth" fill="#FFFFFF" fill-rule="evenodd" href={'#' + path1} />
	<path
		d="M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z"
		id="Grimace-Teeth"
		fill="#E6E6E6"
		fill-rule="evenodd"
		mask={`url(#${mask1})`}
	/>
</g>
