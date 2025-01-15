"use client"

import * as React from "react"
import { Menu } from "@base-ui-components/react/menu"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { createChildElement, merge } from "../../utils"

/********
Dropdown Mappings
********/
const Dropdown = Menu.Root

const DropdownGroup = Menu.Group

const DropdownRadioGroup = Menu.RadioGroup

/********
Dropdown Trigger
********/
interface DropdownTriggerProps
	extends React.ComponentPropsWithoutRef<typeof Menu.Trigger> {
	asChild?: boolean
}

const DropdownTrigger = React.forwardRef<
	HTMLButtonElement,
	DropdownTriggerProps
>(({ className, children, asChild, ...props }, ref) => {
	return (
		<Menu.Trigger
			ref={ref}
			className={className}
			render={asChild ? createChildElement(children) : undefined}
			{...props}
		/>
	)
})
DropdownTrigger.displayName = "DropdownTrigger"

/********
Dropdown Content
********/
const DropdownContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Popup>
>(({ className, ...props }, ref) => {
	return (
		<Menu.Portal>
			<Menu.Positioner sideOffset={4}>
				<Menu.Popup
					ref={ref}
					className={merge(
						"min-w-48 origin-[var(--transform-origin)] rounded-md border border-muted bg-bg p-1 text-fg shadow-elevation-low outline-none transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:shadow-none",
						className
					)}
					{...props}
				/>
			</Menu.Positioner>
		</Menu.Portal>
	)
})
DropdownContent.displayName = "DropdownContent"

/********
Dropdown Item
********/
const DropdownItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => {
	return (
		<Menu.Item
			ref={ref}
			className={merge(
				"group flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg data-[disabled]:opacity-50",
				className
			)}
			{...props}
		/>
	)
})
DropdownItem.displayName = "DropdownItem"

/********
Dropdown Item Shortcut
********/
const DropdownItemShortcut = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
	return (
		<span
			ref={ref}
			className={merge(
				"ml-auto pl-10 text-xs tracking-widest text-muted-fg group-data-[highlighted]:text-accent-fg",
				className
			)}
			{...props}
		/>
	)
})
DropdownItemShortcut.displayName = "DropdownItemShortcut"

/********
Dropdown Separator
********/
const DropdownSeparator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Separator>
>(({ className, ...props }, ref) => {
	return (
		<Menu.Separator
			ref={ref}
			className={merge("-mx-1 my-1 h-px bg-muted", className)}
			{...props}
		/>
	)
})
DropdownSeparator.displayName = "DropdownSeparator"

/********
Dropdown Group Label
********/
const DropdownGroupLabel = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.GroupLabel>
>(({ className, ...props }, ref) => {
	return (
		<Menu.GroupLabel
			ref={ref}
			className={merge("px-2 py-1.5 text-xs text-subtle-fg", className)}
			{...props}
		/>
	)
})
DropdownGroupLabel.displayName = "DropdownGroupLabel"

/********
Dropdown Checkbox Item
********/
const DropdownCheckboxItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.CheckboxItem>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.CheckboxItem
			ref={ref}
			className={merge(
				"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg data-[disabled]:opacity-50",
				className
			)}
			{...props}
		>
			<div className="size-3">
				<Menu.CheckboxItemIndicator>
					<CheckIcon className="size-full" />
				</Menu.CheckboxItemIndicator>
			</div>
			<span>{children}</span>
		</Menu.CheckboxItem>
	)
})
DropdownCheckboxItem.displayName = "DropdownCheckboxItem"

/********
Dropdown Radio Item
********/
const DropdownRadioItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.RadioItem>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.RadioItem
			ref={ref}
			className={merge(
				"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg data-[disabled]:opacity-50",
				className
			)}
			{...props}
		>
			<div className="size-3">
				<Menu.RadioItemIndicator>
					<CheckIcon className="size-full" />
				</Menu.RadioItemIndicator>
			</div>
			<span>{children}</span>
		</Menu.RadioItem>
	)
})
DropdownRadioItem.displayName = "DropdownRadioItem"

/********
Dropdown Sub Trigger
********/
const DropdownSubTrigger = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.SubmenuTrigger
			ref={ref}
			className={merge(
				"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[popup-open]:bg-accent data-[highlighted]:text-accent-fg data-[popup-open]:text-accent-fg data-[disabled]:opacity-50",
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-3" />
		</Menu.SubmenuTrigger>
	)
})
DropdownSubTrigger.displayName = "DropdownSubTrigger"

export {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownItemShortcut,
	DropdownGroupLabel,
	DropdownSeparator,
	DropdownTrigger,
	DropdownCheckboxItem,
	DropdownRadioItem,
	DropdownRadioGroup,
	DropdownGroup,
	DropdownSubTrigger,
}
