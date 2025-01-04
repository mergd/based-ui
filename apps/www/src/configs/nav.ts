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
					title: "Collapsible",
					href: "/docs/components/collapsible",
				},
				{
					title: "Dialog",
					href: "/docs/components/dialog",
				},
				{
					title: "Input",
					href: "/docs/components/input",
				},
				{
					title: "Form",
					href: "/docs/components/form",
				},
				{
					title: "Popover",
					href: "/docs/components/popover",
				},
				{
					title: "Separator",
					href: "/docs/components/separator",
				},
				{
					title: "Textarea",
					href: "/docs/components/textarea",
				},
			],
		},
	],
}
