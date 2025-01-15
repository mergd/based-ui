"use client"

import * as React from "react"
import { Menu } from "@base-ui-components/react"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { useControlledState } from "../../hooks/use-controlled-state"
import { merge } from "../../utils"

/********
Context Menu Context
********/
type ContextMenuContext = {
	open: boolean
	setOpen: (open: boolean) => void
}

const ContextMenuContext = React.createContext<ContextMenuContext | null>(null)

const useContextMenu = () => {
	const context = React.useContext(ContextMenuContext)

	if (!context) {
		throw new Error("useContextMenu must be used within a ContextMenuProvider")
	}

	return context
}

/********
Context Menu
********/
const ContextMenu = ({ ...props }: Menu.Root.Props) => {
	const [open, setOpen] = useControlledState({
		state: props.open,
		defaultState: false,
		onStateChange: (state) => props.onOpenChange?.(state, undefined, undefined),
	})

	return (
		<ContextMenuContext.Provider value={{ open, setOpen }}>
			<Menu.Root open={open} onOpenChange={setOpen} {...props} />
		</ContextMenuContext.Provider>
	)
}
ContextMenu.displayName = "ContextMenu"

/********
Context Menu Content
********/
const ContextMenuContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Popup>
>(({ className, ...props }, ref) => {
	return (
		<Menu.Portal>
			<Menu.Positioner align="start">
				<Menu.Popup
					ref={ref}
					className={merge(
						"min-w-40 rounded-md border border-muted bg-bg p-1 text-fg outline-none",
						className
					)}
					{...props}
				/>
			</Menu.Positioner>
		</Menu.Portal>
	)
})
ContextMenuContent.displayName = "ContextMenuContent"

/********
Context Menu Trigger
********/
const ContextMenuTrigger = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
	const [position, setPosition] = React.useState({ x: 0, y: 0 })
	const { open, setOpen } = useContextMenu()

	const handleContextMenu = (e: React.MouseEvent) => {
		e.preventDefault()

		if (open) {
			setOpen(false)
		}

		setTimeout(() => {
			setPosition({ x: e.clientX, y: e.clientY })
			setOpen(true)
		}, 0)
	}

	return (
		<div
			ref={ref}
			className={className}
			onContextMenu={handleContextMenu}
			{...props}
		>
			{children}
			<Menu.Trigger
				style={{
					position: "fixed",
					left: position.x,
					top: position.y,
					margin: 0,
				}}
			/>
		</div>
	)
})
ContextMenuTrigger.displayName = "ContextMenuTrigger"

/********
Context Menu Group
********/
const ContextMenuGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Group>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.Group ref={ref} className={className} {...props}>
			{children}
		</Menu.Group>
	)
})
ContextMenuGroup.displayName = "ContextMenuGroup"

/********
Context Menu Group Label
********/
const ContextMenuGroupLabel = React.forwardRef<
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
ContextMenuGroupLabel.displayName = "ContextMenuGroupLabel"

/********
Context Menu Checkbox Item
********/
const ContextMenuCheckboxItem = React.forwardRef<
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
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem"

/********
Context Menu Radio Group
********/
const ContextMenuRadioGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.RadioGroup>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.RadioGroup ref={ref} className={className} {...props}>
			{children}
		</Menu.RadioGroup>
	)
})
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup"

/********
Context Menu Radio Item
********/
const ContextMenuRadioItem = React.forwardRef<
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
ContextMenuRadioItem.displayName = "ContextMenuRadioItem"

/********
Context Menu Sub Trigger
********/
const ContextMenuSubTrigger = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.SubmenuTrigger
			ref={ref}
			className={merge(
				"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg data-[disabled]:opacity-50",
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-3" />
		</Menu.SubmenuTrigger>
	)
})
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger"

/********
Context Menu Item
********/
const ContextMenuItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => {
	return (
		<Menu.Item
			ref={ref}
			className={merge(
				"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-fg data-[disabled]:opacity-50",
				className
			)}
			{...props}
		/>
	)
})
ContextMenuItem.displayName = "ContextMenuItem"

/********
Context Menu Separator
********/
const ContextMenuSeparator = React.forwardRef<
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
ContextMenuSeparator.displayName = "ContextMenuSeparator"

export {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
	ContextMenuSeparator,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuCheckboxItem,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSubTrigger,
}
