"use client"

import * as React from "react"
import { NavigationMenu } from "@base-ui-components/react/navigation-menu"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenuRoot = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Root>
>(({ className, ...props }, ref) => (
	<NavigationMenu.Root
		ref={ref}
		className={cn(
			"min-w-max rounded-lg bg-background p-1 text-foreground",
			className
		)}
		{...props}
	/>
))
NavigationMenuRoot.displayName = NavigationMenu.Root.displayName

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.List>
>(({ className, ...props }, ref) => (
	<NavigationMenu.List
		ref={ref}
		className={cn("relative flex", className)}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenu.List.displayName

const NavigationMenuItem = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Item>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Item>
>(({ className, ...props }, ref) => (
	<NavigationMenu.Item ref={ref} className={className} {...props} />
))
NavigationMenuItem.displayName = NavigationMenu.Item.displayName

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenu.Trigger
		ref={ref}
		className={cn(
			"box-border flex items-center justify-center gap-1.5 h-10 px-2 xs:px-3.5 m-0 rounded-md bg-background text-foreground font-medium text-[0.925rem] xs:text-base leading-6 select-none no-underline hover:bg-accent active:bg-accent data-[popup-open]:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring focus-visible:relative",
			className
		)}
		{...props}
	>
		{children}
		<NavigationMenu.Icon className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
			<ChevronDownIcon className="h-4 w-4" />
		</NavigationMenu.Icon>
	</NavigationMenu.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenu.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenu.Content
		ref={ref}
		className={cn(
			"w-[calc(100vw_-_40px)] h-full p-6 xs:w-max xs:min-w-[400px] xs:w-max transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]",
			className
		)}
		{...props}
	/>
))
NavigationMenuContent.displayName = NavigationMenu.Content.displayName

const NavigationMenuPortal = NavigationMenu.Portal

const NavigationMenuPositioner = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Positioner>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Positioner>
>(({ className, children, sideOffset = 10, ...props }, ref) => (
	<NavigationMenu.Positioner
		ref={ref}
		sideOffset={sideOffset}
		collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
		className={cn(
			"box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
			className
		)}
		style={{
			["--duration" as string]: "0.35s",
			["--easing" as string]: "cubic-bezier(0.22, 1, 0.36, 1)",
		}}
		{...props}
	>
		{children}
	</NavigationMenu.Positioner>
))
NavigationMenuPositioner.displayName = NavigationMenu.Positioner.displayName

const NavigationMenuPopup = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Popup>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Popup>
>(({ className, ...props }, ref) => (
	<NavigationMenu.Popup
		ref={ref}
		className={cn(
			"data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] w-full origin-[var(--transform-origin)] rounded-lg bg-popover text-popover-foreground shadow-lg shadow-border outline outline-1 outline-border transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 min-[500px]:w-[var(--popup-width)] xs:w-[var(--popup-width)] dark:shadow-none dark:-outline-offset-1 dark:outline-border",
			className
		)}
		{...props}
	/>
))
NavigationMenuPopup.displayName = NavigationMenu.Popup.displayName

const NavigationMenuArrow = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Arrow>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Arrow>
>(({ className, ...props }, ref) => (
	<NavigationMenu.Arrow
		ref={ref}
		className={cn(
			"flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
			className
		)}
		{...props}
	/>
))
NavigationMenuArrow.displayName = NavigationMenu.Arrow.displayName

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Viewport>
>(({ className, ...props }, ref) => (
	<NavigationMenu.Viewport
		ref={ref}
		className={cn("relative h-full w-full overflow-hidden", className)}
		{...props}
	/>
))
NavigationMenuViewport.displayName = NavigationMenu.Viewport.displayName

const NavigationMenuLink = React.forwardRef<
	React.ElementRef<typeof NavigationMenu.Link>,
	React.ComponentPropsWithoutRef<typeof NavigationMenu.Link>
>(({ className, ...props }, ref) => (
	<NavigationMenu.Link
		ref={ref}
		className={cn(
			"block rounded-md p-2 xs:p-3 no-underline text-inherit hover:bg-accent focus-visible:relative focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring",
			className
		)}
		{...props}
	/>
))
NavigationMenuLink.displayName = NavigationMenu.Link.displayName

export {
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
}