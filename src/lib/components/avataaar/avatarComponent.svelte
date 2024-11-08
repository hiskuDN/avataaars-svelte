<!-- AvatarComponent.svelte -->
<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import Avatar from './avatar/avatar.svelte';
	import { allOptions, OptionContext } from './options/options.js';
	import { svgToBlob } from './utils/svg2blob.js';

	// Props
	export let getBlob: ((blob: Blob) => void) | null = null;
	export let avatarStyle = '';
	export let className = '';
	export let style: string = '';

	export let topType = '';
	export let accessoriesType = '';
	export let hairColor = '';
	export let facialHairType = '';
	export let facialHairColor = '';
	export let clotheType = '';
	export let clotheColor = '';
	export let graphicType = '';
	export let eyeType = '';
	export let eyebrowType = '';
	export let mouthType = '';
	export let skinColor = '';
	export let blobUrl = '';
	let avatarRef: SVGSVGElement;

	// OptionContext
	let optionContext = new OptionContext(allOptions);
	let blob: Blob | null = null;
	$: blobUrl = '';

	// Set context
	setContext('optionContext', optionContext);

	// Update optionContext when props change
	$: updateOptionContext();

	function updateOptionContext() {
		const data: { [key: string]: any } = {};
		for (const option of allOptions) {
			let value = null;

			if (option.key === 'topType') {
				value = topType;
			} else if (option.key === 'accessoriesType') {
				value = accessoriesType;
			} else if (option.key === 'hairColor') {
				value = hairColor;
			} else if (option.key === 'facialHairType') {
				value = facialHairType;
			} else if (option.key === 'facialHairColor') {
				value = facialHairColor;
			} else if (option.key === 'clotheType') {
				value = clotheType;
			} else if (option.key === 'clotheColor') {
				value = clotheColor;
			} else if (option.key === 'graphicType') {
				value = graphicType;
			} else if (option.key === 'eyeType') {
				value = eyeType;
			} else if (option.key === 'eyebrowType') {
				value = eyebrowType;
			} else if (option.key === 'mouthType') {
				value = mouthType;
			} else if (option.key === 'skinColor') {
				value = skinColor;
			}

			if (value) {
				data[option.key] = value;
			}
		}
		optionContext.setData(data);
	}

	// Function to wait for avatarRef to be available
	function waitForAvatarRef(): Promise<void> {
		return new Promise((resolve) => {
			const checkRef = setInterval(() => {
				if (avatarRef) {
					clearInterval(checkRef);
					resolve();
				}
			}, 50);
		});
	}

	onMount(async () => {
		updateOptionContext();

		// Wait for avatarRef to be ready and then create the blob
		await waitForAvatarRef();
		blob = await svgToBlob(avatarRef);
		getBlob && getBlob(blob);
	});

	$: {
		if (blob && getBlob) {
			getBlob(blob);
			blobUrl = URL.createObjectURL(blob);
		}
	}
</script>

<Avatar bind:avatarRef {avatarStyle} {style} {className} />
