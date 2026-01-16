import * as React from "react"
import {
	NavigationMenuRoot,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuPortal,
	NavigationMenuPositioner,
	NavigationMenuPopup,
	NavigationMenuArrow,
	NavigationMenuViewport,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {
	return (
		<NavigationMenuRoot>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Overview</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid list-none grid-cols-1 gap-0 xs:grid-cols-[12rem_12rem]">
							{overviewLinks.map((item) => (
								<li key={item.href}>
									<NavigationMenuLink
										render={<a href={item.href} />}
										className="block rounded-md p-2 xs:p-3 no-underline text-inherit hover:bg-accent focus-visible:relative focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring"
									>
										<h3 className="m-0 mb-1 text-base leading-5 font-medium">
											{item.title}
										</h3>
										<p className="m-0 text-sm leading-5 text-muted-foreground">
											{item.description}
										</p>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="flex max-w-[400px] flex-col justify-center">
							{componentsLinks.map((item) => (
								<li key={item.href}>
									<NavigationMenuLink
										render={<a href={item.href} />}
										className="block rounded-md p-2 xs:p-3 no-underline text-inherit hover:bg-accent focus-visible:relative focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring"
									>
										<h3 className="m-0 mb-1 text-base leading-5 font-medium">
											{item.title}
										</h3>
										<p className="m-0 text-sm leading-5 text-muted-foreground">
											{item.description}
										</p>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink
						href="#"
						className="box-border flex items-center justify-center gap-1.5 h-10 px-2 xs:px-3.5 m-0 rounded-md bg-background text-foreground font-medium text-[0.925rem] xs:text-base leading-6 select-none no-underline hover:bg-accent active:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring focus-visible:relative"
					>
						GitHub
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>

			<NavigationMenuPortal>
				<NavigationMenuPositioner>
					<NavigationMenuPopup>
						<NavigationMenuArrow>
							<ArrowSvg />
						</NavigationMenuArrow>
						<NavigationMenuViewport />
					</NavigationMenuPopup>
				</NavigationMenuPositioner>
			</NavigationMenuPortal>
		</NavigationMenuRoot>
	)
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
	return (
		<svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
			<path
				d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
				className="fill-popover"
			/>
			<path
				d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
				className="fill-border dark:fill-none"
			/>
			<path
				d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
				className="dark:fill-border"
			/>
		</svg>
	)
}

const overviewLinks = [
	{
		href: "/docs/getting-started/introduction",
		title: "Introduction",
		description: "Get started with our component library.",
	},
	{
		href: "/docs/getting-started/installation",
		title: "Installation",
		description: "Install and configure the library.",
	},
	{
		href: "/docs/getting-started/theming",
		title: "Theming",
		description: "Customize the appearance of components.",
	},
	{
		href: "/docs/getting-started/dark-mode",
		title: "Dark Mode",
		description: "Add dark mode support to your app.",
	},
] as const

const componentsLinks = [
	{
		href: "/docs/components/button",
		title: "Button",
		description: "A clickable button component with multiple variants.",
	},
	{
		href: "/docs/components/input",
		title: "Input",
		description: "Form input component with validation support.",
	},
	{
		href: "/docs/components/dialog",
		title: "Dialog",
		description: "Modal dialog component for overlays and confirmations.",
	},
] as const