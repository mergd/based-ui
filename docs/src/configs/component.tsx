import { AspectRatio, Badge, Button } from "9ui"

type ComponentConfig = {
	anatomy: {
		preview: React.ReactNode
		structure: {
			name: string
			label?: "root" | "required" | "optional"
		}[]
		description: string
	}
	variants?: React.ReactNode[]
}

export const ComponentConfig: Record<string, ComponentConfig> = {
	aspectRatio: {
		anatomy: {
			preview: <AspectRatio ratio={16 / 9}></AspectRatio>,
			structure: [
				{
					name: "AspectRatio",
					label: "root",
				},
				{
					name: "Content",
				},
			],
			description: "",
		},
	},
	badge: {
		anatomy: {
			preview: <Badge>Badge</Badge>,
			structure: [
				{
					name: "Badge",
					label: "root",
				},
				{
					name: "Content",
					label: "required",
				},
			],
			description:
				"The badge component is designed to be simple and flexible. The content can be text, numbers, or any other element that fits within the badge's compact layout.",
		},
		variants: [
			<Badge key="solid" variant="solid">
				Solid
			</Badge>,
			<Badge key="secondary" variant="secondary">
				Secondary
			</Badge>,
			<Badge key="success" variant="success">
				Success
			</Badge>,
			<Badge key="danger" variant="danger">
				Danger
			</Badge>,
			<Badge key="warning" variant="warning">
				Warning
			</Badge>,
			<Badge key="info" variant="info">
				Info
			</Badge>,
			<Badge key="outline" variant="outline">
				Outline
			</Badge>,
		],
	},
	button: {
		anatomy: {
			preview: <Button>Button</Button>,
			structure: [
				{
					name: "Button",
					label: "root",
				},
				{
					name: "Content",
					label: "required",
				},
			],
			description:
				"The button component is designed to be simple and flexible. The content can be text, numbers, or any other element that fits within the button's compact layout.",
		},
		variants: [
			<Button key="solid" variant="solid">
				Solid
			</Button>,
			<Button key="ghost" variant="ghost">
				Ghost
			</Button>,
			<Button key="outline" variant="outline">
				Outline
			</Button>,
			<Button key="link" variant="link">
				Link
			</Button>,
			<Button key="destructive" variant="destructive">
				Destructive
			</Button>,
		],
	},
}
