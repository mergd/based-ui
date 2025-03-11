export type ShadeOption = {
	name: string
	value: string
	color: string
}

export type PrimaryColorOption = {
	name: string
	value: string
	color: string
}

export type RadiusOption = {
	name: string
	value: string
}

export const shadeOptions: ShadeOption[] = [
	{
		name: "Gray",
		value: "gray-theme",
		color: "bg-[var(--gray-main)]",
	},
	{
		name: "Stone",
		value: "stone-theme",
		color: "bg-[var(--stone-main)]",
	},
	{
		name: "Slate",
		value: "slate-theme",
		color: "bg-[var(--slate-main)]",
	},
	{
		name: "Zinc",
		value: "zinc-theme",
		color: "bg-[var(--zinc-main)]",
	},
	{
		name: "Neutral",
		value: "neutral-theme",
		color: "bg-[var(--neutral-main)]",
	},
]

export const primaryColorOptions: PrimaryColorOption[] = [
	{
		name: "Red",
		value: "red-theme",
		color: "bg-[var(--red-main)]",
	},
	{
		name: "Blue",
		value: "blue-theme",
		color: "bg-[var(--blue-main)]",
	},
	{
		name: "Green",
		value: "green-theme",
		color: "bg-[var(--green-main)]",
	},
	{
		name: "Amber",
		value: "amber-theme",
		color: "bg-[var(--amber-main)]",
	},
	{
		name: "Yellow",
		value: "yellow-theme",
		color: "bg-[var(--yellow-main)]",
	},
	{
		name: "Purple",
		value: "purple-theme",
		color: "bg-[var(--purple-main)]",
	},
	{
		name: "Pink",
		value: "pink-theme",
		color: "bg-[var(--pink-main)]",
	},
	{
		name: "Lime",
		value: "lime-theme",
		color: "bg-[var(--lime-main)]",
	},
]

export const radiusOptions: RadiusOption[] = [
	{
		name: "0rem",
		value: "radius-none",
	},
	{
		name: "0.25rem",
		value: "radius-small",
	},
	{
		name: "0.5rem",
		value: "radius-medium",
	},
	{
		name: "0.75rem",
		value: "radius-large",
	},
	{
		name: "1rem",
		value: "radius-full",
	},
]
