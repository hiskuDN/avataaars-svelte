<!-- +page.svelte -->
<script lang="ts">
	import Avatar from '$lib/components/avataaar/avatarComponent.svelte';
	import { onMount } from 'svelte';

	// Define props for testing
	$: avatarStyle = 'Circle';
	$: topType = 'NoHair';
	$: accessoriesType = 'Blank';
	$: hairColor = 'Brown';
	$: facialHairType = 'Blank';
	$: facialHairColor = '';
	$: clotheType = 'Hoodie';
	$: clotheColor = 'Red';
	$: graphicType = '';
	$: eyeType = 'Squint';
	$: eyebrowType = 'UpDown';
	$: mouthType = 'Vomit';
	$: skinColor = 'Light';

	onMount(() => {
		console.log('Avatar component mounted');
	});
</script>

<main>
	<h1>Test Avatar Component</h1>
	<Avatar
		{avatarStyle}
		{topType}
		{accessoriesType}
		{hairColor}
		{facialHairType}
		{facialHairColor}
		{clotheType}
		{clotheColor}
		{graphicType}
		{eyeType}
		{eyebrowType}
		{mouthType}
		{skinColor}
		style="width: 400px; height: 400px;"
	/>
</main>
