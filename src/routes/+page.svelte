<!-- +page.svelte -->
<script lang="ts">
	import AvatarComponent from '$lib/components/avataaar/avatarComponent.svelte';
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
	$: mouthType = 'Sad';
	$: skinColor = 'Light';

	let blobUrl: string;

	export function getBlob(blob: Blob) {
		console.log('Blob received:', blob, blobUrl);
	}

	$: {
		if (blobUrl) {
			console.log('Blob URL:', blobUrl);
		}
	}
</script>

<main>
	<h1>Test Avatar Component</h1>
	<AvatarComponent
		bind:blobUrl
		{getBlob}
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
