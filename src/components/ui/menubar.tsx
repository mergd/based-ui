"use client"

import * as React from "react"
import { Menubar as MenubarPrimitive } from "@base-ui-components/react/menubar"
import { Menu } from "@base-ui-components/react/menu"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Menubar = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive>
>(({ className, ...props }, ref) => (
	<MenubarPrimitive
		ref={ref}
		className={cn(
			"flex rounded-md border border-border bg-background p-0.5",
			className
		)}
		{...props}
	/>
))
Menubar.displayName = MenubarPrimitive.displayName

const MenubarMenu = Menu.Root

const MenubarTrigger = React.forwardRef<
	React.ElementRef<typeof Menu.Trigger>,
	React.ComponentPropsWithoutRef<typeof Menu.Trigger>
>(({ className, ...props }, ref) => (
	<Menu.Trigger
		ref={ref}
		className={cn(
			"h-8 rounded px-3 text-sm font-medium text-muted-foreground outline-none select-none focus-visible:bg-accent data-[disabled]:opacity-50 data-[popup-open]:bg-accent",
			className
		)}
		{...props}
	/>
))
MenubarTrigger.displayName = Menu.Trigger.displayName

interface MenubarContentProps
	extends React.ComponentPropsWithoutRef<typeof Menu.Popup> {
	sideOffset?: number
}

const MenubarContent = React.forwardRef<
	React.ElementRef<typeof Menu.Popup>,
	MenubarContentProps
>(({ className, sideOffset = 6, ...props }, ref) => (
	<Menu.Portal>
		<Menu.Positioner className="outline-none" sideOffset={sideOffset}>
			<Menu.Popup
				ref={ref}
				className={cn(
					"origin-[var(--transform-origin)] rounded-md bg-popover py-1 text-popover-foreground shadow-lg shadow-border outline outline-1 outline-border data-[ending-style]:opacity-0 data-[ending-style]:transition-opacity data-[instant]:transition-none dark:shadow-none dark:outline dark:outline-1 dark:-outline-offset-1 dark:outline-border",
					className
				)}
				{...props}
			/>
		</Menu.Positioner>
	</Menu.Portal>
))
MenubarContent.displayName = Menu.Popup.displayName

const MenubarItem = React.forwardRef<
	React.ElementRef<typeof Menu.Item>,
	React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => (
	<Menu.Item
		ref={ref}
		className={cn(
			"flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-foreground",
			className
		)}
		{...props}
	/>
))
MenubarItem.displayName = Menu.Item.displayName

const MenubarSeparator = React.forwardRef<
	React.ElementRef<typeof Menu.Separator>,
	React.ComponentPropsWithoutRef<typeof Menu.Separator>
>(({ className, ...props }, ref) => (
	<Menu.Separator
		ref={ref}
		className={cn("mx-4 my-1.5 h-px bg-border", className)}
		{...props}
	/>
))
MenubarSeparator.displayName = Menu.Separator.displayName

const MenubarSubMenu = Menu.Root

const MenubarSubTrigger = React.forwardRef<
	React.ElementRef<typeof Menu.SubmenuTrigger>,
	React.ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger> & {
		children?: React.ReactNode
	}
>(({ className, children, ...props }, ref) => (
	<Menu.SubmenuTrigger
		ref={ref}
		className={cn(
			"flex w-full cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-foreground data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-accent data-[highlighted]:data-[popup-open]:before:bg-foreground",
			className
		)}
		{...props}
	>
		{children}
		<ChevronRightIcon className="size-4" />
	</Menu.SubmenuTrigger>
))
MenubarSubTrigger.displayName = Menu.SubmenuTrigger.displayName

const MenubarCheckboxItem = React.forwardRef<
	React.ElementRef<typeof Menu.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof Menu.CheckboxItem> & {
		children?: React.ReactNode
	}
>(({ className, children, ...props }, ref) => (
	<Menu.CheckboxItem
		ref={ref}
		className={cn(
			"flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-foreground",
			className
		)}
		{...props}
	>
		<span>{children}</span>
		<Menu.CheckboxItemIndicator>
			<CheckIcon className="size-4" />
		</Menu.CheckboxItemIndicator>
	</Menu.CheckboxItem>
))
MenubarCheckboxItem.displayName = Menu.CheckboxItem.displayName

const MenubarRadioGroup = Menu.RadioGroup

const MenubarRadioItem = React.forwardRef<
	React.ElementRef<typeof Menu.RadioItem>,
	React.ComponentPropsWithoutRef<typeof Menu.RadioItem> & {
		children?: React.ReactNode
	}
>(({ className, children, ...props }, ref) => (
	<Menu.RadioItem
		ref={ref}
		className={cn(
			"flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-foreground",
			className
		)}
		{...props}
	>
		<span>{children}</span>
		<Menu.RadioItemIndicator>
			<CheckIcon className="size-4" />
		</Menu.RadioItemIndicator>
	</Menu.RadioItem>
))
MenubarRadioItem.displayName = Menu.RadioItem.displayName

const MenubarItemShortcut = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn(
			"ml-auto pl-8 text-xs tracking-widest text-muted-foreground",
			className
		)}
		{...props}
	/>
))
MenubarItemShortcut.displayName = "MenubarItemShortcut"

export {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSeparator,
	MenubarSubTrigger,
	MenubarSubMenu,
	MenubarCheckboxItem,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarItemShortcut,
}
