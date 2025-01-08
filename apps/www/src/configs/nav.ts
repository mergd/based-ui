import { type SidebarNavGroup } from "@/types/nav"

export interface NavConfig {
	sidebarNav: SidebarNavGroup[]
}

export const navConfig: NavConfig = {
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs",
					disabled: true,
				},
				{
					title: "Installation",
					href: "/docs/installation",
					disabled: true,
				},
				{
					title: "Theming",
					href: "/docs/theming",
					disabled: true,
				},
				{
					title: "Dark mode",
					href: "/docs/dark-mode",
					disabled: true,
				},
				{
					title: "Changelog",
					href: "/docs/changelog",
					disabled: true,
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "/docs/components/accordion",
				},
				{
					title: "Alert Dialog",
					href: "/docs/components/alert-dialog",
				},
				{
					title: "Alert",
					href: "/docs/components/alert",
				},
				{
					title: "Aspect Ratio",
					href: "/docs/components/aspect-ratio",
				},
				{
					title: "Avatar",
					href: "/docs/components/avatar",
				},
				{
					title: "Badge",
					href: "/docs/components/badge",
				},
				{
					title: "Breadcrumbs",
					href: "/docs/components/breadcrumbs",
				},
				{
					title: "Button",
					href: "/docs/components/button",
				},
				{
					title: "Calendar",
					href: "/docs/components/calendar",
				},
				{
					title: "Checkbox",
					href: "/docs/components/checkbox",
				},
				{
					title: "Collapsible",
					href: "/docs/components/collapsible",
				},
				{
					title: "Dialog",
					href: "/docs/components/dialog",
				},
				{
					title: "Dropdown",
					href: "/docs/components/dropdown",
				},
				{
					title: "Form",
					href: "/docs/components/form",
				},
				{
					title: "Input",
					href: "/docs/components/input",
				},
				{
					title: "Input OTP",
					href: "/docs/components/input-otp",
				},
				{
					title: "Popover",
					href: "/docs/components/popover",
				},
				{
					title: "Progress",
					href: "/docs/components/progress",
				},
				{
					title: "Separator",
					href: "/docs/components/separator",
				},
				{
					title: "Sheet",
					href: "/docs/components/sheet",
				},
				{
					title: "Switch",
					href: "/docs/components/switch",
				},
				{
					title: "Textarea",
					href: "/docs/components/textarea",
				},
			],
		},
	],
}
