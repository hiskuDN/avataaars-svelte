<!-- Black.svelte -->
<script lang="ts">
	export let maskID: string;
	export let optionValue: string = 'Black';
</script>

<g id={'Skin/' + optionValue} mask={'url(#' + maskID + ')'} fill="#614335">
	<g transform="translate(0.000000, 0.000000)" id="Color">
		<rect x="0" y="0" width="264" height="280" />
	</g>
</g>
