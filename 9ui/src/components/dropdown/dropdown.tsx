"use client"

import * as React from "react"
import { Menu } from "@base-ui-components/react"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { createChildElement, merge } from "../../utils"

/********
Dropdown Mappings
********/
const Dropdown = Menu.Root
Dropdown.displayName = "Dropdown"

const DropdownPositioner = Menu.Positioner
DropdownPositioner.displayName = "DropdownPositioner"

const DropdownPopup = Menu.Popup
DropdownPopup.displayName = "DropdownPopup"

/********
Dropdown Portal
********/
const DropdownPortal = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Portal>
>((props, ref) => {
	return <Menu.Portal ref={ref} {...props} />
})
DropdownPortal.displayName = "DropdownPortal"

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
		<DropdownPortal>
			<DropdownPositioner sideOffset={8}>
				<DropdownPopup
					ref={ref}
					className={merge(
						"bg-bg border-secondary text-fg min-w-40 rounded-md border p-1 outline-none",
						className
					)}
					{...props}
				/>
			</DropdownPositioner>
		</DropdownPortal>
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
				"data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg flex select-none items-center gap-2 rounded px-2 py-1.5 text-sm outline-none",
				className
			)}
			{...props}
		/>
	)
})
DropdownItem.displayName = "DropdownItem"

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
			className={merge("bg-secondary -mx-1 my-1 h-px", className)}
			{...props}
		/>
	)
})
DropdownSeparator.displayName = "DropdownSeparator"

/********
Dropdown Group
********/
const DropdownGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Group>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.Group ref={ref} className={className} {...props}>
			{children}
		</Menu.Group>
	)
})
DropdownGroup.displayName = "DropdownGroup"

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
			className={merge("text-primary-fg px-2 py-1.5 text-xs", className)}
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
				"data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg grid select-none grid-cols-[0.75rem_auto] items-center gap-2 rounded px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				className
			)}
			{...props}
		>
			<Menu.CheckboxItemIndicator className="col-start-1">
				<CheckIcon className="size-3" />
			</Menu.CheckboxItemIndicator>
			<span className="col-start-2">{children}</span>
		</Menu.CheckboxItem>
	)
})
DropdownCheckboxItem.displayName = "DropdownCheckboxItem"

/********
Dropdown Radio Group
********/
const DropdownRadioGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.RadioGroup>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.RadioGroup ref={ref} className={className} {...props}>
			{children}
		</Menu.RadioGroup>
	)
})
DropdownRadioGroup.displayName = "DropdownRadioGroup"

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
				"data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg grid select-none grid-cols-[0.75rem_auto] items-center gap-2 rounded px-2 py-1.5 text-sm outline-none",
				className
			)}
			{...props}
		>
			<Menu.RadioItemIndicator className="col-start-1">
				<CheckIcon className="size-3" />
			</Menu.RadioItemIndicator>
			<span className="col-start-2">{children}</span>
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
				"data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg grid select-none grid-cols-[0.75rem_auto_0.75rem] items-center gap-2 rounded px-2 py-1.5 text-sm outline-none",
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="size-3" />
		</Menu.SubmenuTrigger>
	)
})
DropdownSubTrigger.displayName = "DropdownSubTrigger"

export {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownGroupLabel,
	DropdownPortal,
	DropdownPositioner,
	DropdownSeparator,
	DropdownTrigger,
	DropdownCheckboxItem,
	DropdownRadioItem,
	DropdownRadioGroup,
	DropdownGroup,
	DropdownSubTrigger,
}
