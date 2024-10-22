// options.ts
import Option from './Option.js';
export { default as Option } from './Option.js';
export { default as OptionContext } from './OptionContext.js';
export type { OptionContextState } from './OptionContext.js';
export { default as Selector } from './Selector.svelte';

export const TopOption = new Option({
	key: 'topType',
	label: 'Top'
});

export const AccessoriesOption = new Option({
	key: 'accessoriesType',
	label: '↳ 👓 Accessories'
});

export const HatColorOption = new Option({
	key: 'hatColor',
	label: '🎨 HatColor'
});

export const HairColorOption = new Option({
	key: 'hairColor',
	label: '↳ 💈 Hair Color'
});

export const FacialHairOption = new Option({
	key: 'facialHairType',
	label: 'Facial Hair'
});

export const FacialHairColor = new Option({
	key: 'facialHairColor',
	label: '↳ ✂️ Facial Hair Color'
});

export const ClotheOption = new Option({
	key: 'clotheType',
	label: '👔 Clothes'
});

export const ClotheColorOption = new Option({
	key: 'clotheColor',
	label: '↳ Color Fabric'
});

export const GraphicOption = new Option({
	key: 'graphicType',
	label: '↳ Graphic'
});

export const EyesOption = new Option({
	key: 'eyeType',
	label: '👁 Eyes'
});

export const EyebrowOption = new Option({
	key: 'eyebrowType',
	label: '✏️ Eyebrow'
});

export const MouthOption = new Option({
	key: 'mouthType',
	label: '👄 Mouth'
});

export const SkinOption = new Option({
	key: 'skinColor',
	label: '🎨 Skin'
});

export const allOptions: Option[] = [
	TopOption,
	AccessoriesOption,
	HatColorOption,
	HairColorOption,
	FacialHairOption,
	FacialHairColor,
	ClotheOption,
	ClotheColorOption,
	GraphicOption,
	EyesOption,
	EyebrowOption,
	MouthOption,
	SkinOption
];

export const allStyles: { option: string; styles: string[] }[] = [
	{
		option: TopOption.key,
		styles: ['NoHair']
	},
	{
		option: AccessoriesOption.key,
		styles: ['Blank']
	},
	{
		option: HatColorOption.key,
		styles: []
	},
	{
		option: HairColorOption.key,
		styles: []
	},
	{
		option: FacialHairOption.key,
		styles: ['Blank', 'BeardLight']
	},
	{
		option: FacialHairColor.key,
		styles: ['Auburn', 'Black', 'Blonde', 'Brown', 'BrownGolden', 'BrownDark', 'Platinum', 'Red']
	},
	{
		option: ClotheOption.key,
		styles: [
			'BlazerShirt',
			'BlazerSweater',
			'CollarSweater',
			'GraphicShirt',
			'Hoodie',
			'ShirtCrewNeck',
			'ShirtScoopNeck',
			'ShirtVNeck'
		]
	},
	{
		option: ClotheColorOption.key,
		styles: [
			'Black',
			'Blue01',
			'Blue02',
			'Blue03',
			'Gray01',
			'Gray02',
			'Heather',
			'PastelBlue',
			'PastelGreen',
			'PastelOrange',
			'PastelRed',
			'PastelYellow',
			'Pink',
			'Red',
			'White'
		]
	},
	{
		option: GraphicOption.key,
		styles: ['Bat', 'Cumbia', 'Deer', 'Diamond', 'Hola', 'Pizza', 'Resist', 'Selena', 'Bear', 'SkullOutline']
	},
	{
		option: EyesOption.key,
		styles: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky']
	},
	{
		option: EyebrowOption.key,
		styles: ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural']
	},
	{
		option: MouthOption.key,
		styles: ['Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit']
	},
	{
		option: SkinOption.key,
		styles: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black']
	}
];
