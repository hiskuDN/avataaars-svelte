<script lang="ts">
	export let optionValue: string;
	export let color: string;
	export let maskID: string;
	console.log(optionValue, color, maskID);
</script>

<g id={'Skin/' + optionValue} mask="url(#{maskID})" fill={color}>
	<g transform="translate(0.000000, 0.000000)" id="Color">
		<rect x="0" y="0" width="264" height="280" />
	</g>
</g>
