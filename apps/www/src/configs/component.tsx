import { Monicon } from "@monicon/react"
import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	AspectRatio,
	Badge,
	Button,
	Toggle,
} from "9ui"

type ComponentConfig = {
	anatomy?: {
		preview: React.ReactNode
		structure: {
			name: string
			label?: "root" | "required" | "optional"
		}[]
		description: string
	}
	variants?: React.ReactNode[]
}

const ALERT_VARIANTS = [
	"default",
	"info",
	"warning",
	"error",
	"success",
] as const

const TOGGLE_VARIANTS = ["default", "outline"] as const

export const ComponentConfig: Record<string, ComponentConfig> = {
	alert: {
		variants: ALERT_VARIANTS.map((variant) => (
			<Alert key={variant} variant={variant}>
				<AlertIcon>
					<Monicon name="ri:alert-fill" />
				</AlertIcon>
				<AlertContent>
					<AlertTitle>Alert: {variant}</AlertTitle>
					<AlertDescription>
						This is an alert with a &quot;{variant}&quot; variant.
					</AlertDescription>
				</AlertContent>
			</Alert>
		)),
	},
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
	toggle: {
		variants: TOGGLE_VARIANTS.map((variant) => (
			<Toggle key={variant} variant={variant}>
				<Monicon name="ri:bold" />
			</Toggle>
		)),
	},
}
