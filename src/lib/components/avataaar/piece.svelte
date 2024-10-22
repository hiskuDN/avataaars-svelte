<!-- Piece.svelte -->
<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { allOptions, OptionContext } from './options/options.js';

	// Props
	export let avatarStyle = '';
	export let style = {};
	export let pieceType = '';
	export let pieceSize = '';
	export let viewBox = '';

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

	// OptionContext
	let optionContext = new OptionContext(allOptions);

	// Set context
	setContext('optionContext', optionContext);

	// Collect props into an object
	$: props = {
		topType,
		accessoriesType,
		hairColor,
		facialHairType,
		facialHairColor,
		clotheType,
		clotheColor,
		graphicType,
		eyeType,
		eyebrowType,
		mouthType,
		skinColor
	};

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

	onMount(() => {
		updateOptionContext();
	});
</script>

<!-- <PieceComponent {avatarStyle} {style} {pieceType} {pieceSize} {viewBox} /> -->
