"use client"

import * as React from "react"
import { Menu } from "@base-ui-components/react/menu"
import { useControlled, useForkRef } from "@base-ui-components/react/utils"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/********
Menubar Mappings
********/
const MenubarSubMenu = Menu.Root
MenubarSubMenu.displayName = "MenubarSubMenu"

const MenubarRadioGroup = Menu.RadioGroup
MenubarRadioGroup.displayName = "MenubarRadioGroup"

/********
Menubar Types
********/
type TriggerRect = {
	left: number
	width: number
	height: number
}

/********
Menubar Context
********/
type MenubarContext = {
	activeMenuId: string | null
	setActiveMenuId: (id: string | null) => void
	triggerRects: Map<string, TriggerRect>
	registerTrigger: (id: string, rect: TriggerRect) => void
}

const MenubarContext = React.createContext<MenubarContext | null>(null)

const useMenubar = () => {
	const context = React.useContext(MenubarContext)

	if (!context) {
		throw new Error("useMenubar must be used within a MenubarProvider")
	}

	return context
}

/********
Menubar Root
********/
const Menubar = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
	const [activeMenuId, setActiveMenuId] = React.useState<string | null>(null)
	const [triggerRects, setTriggerRects] = React.useState<
		Map<string, TriggerRect>
	>(new Map())

	const registerTrigger = React.useCallback((id: string, rect: TriggerRect) => {
		setTriggerRects((prev) => new Map(prev).set(id, rect))
	}, [])

	return (
		<MenubarContext.Provider
			value={{ activeMenuId, setActiveMenuId, triggerRects, registerTrigger }}
		>
			<div
				ref={ref}
				className={cn(
					"relative flex w-fit gap-1 rounded-md border px-1 shadow-sm",
					className
				)}
				{...props}
			>
				{children}
				<MenubarIndicator />
			</div>
		</MenubarContext.Provider>
	)
})
Menubar.displayName = "Menubar"

/********
Menubar Menu
********/
type MenubarMenuContext = {
	id: string
}

const MenubarMenuContext = React.createContext<MenubarMenuContext | null>(null)

const useMenubarMenu = () => {
	const context = React.useContext(MenubarMenuContext)

	if (!context) {
		throw new Error("useMenubarMenu must be used within a MenubarMenuProvider")
	}

	return context
}

const MenubarMenu = ({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Menu.Root>) => {
	const id = React.useId()

	const { activeMenuId, setActiveMenuId } = useMenubar()
	const [open, setOpen] = useControlled({
		controlled: props.open,
		default: false,
		name: "MenubarMenu",
		state: "open",
	})

	React.useEffect(() => {
		if (open) {
			setActiveMenuId(id)
		} else if (activeMenuId === id) {
			setActiveMenuId(null)
		}
	}, [open])

	return (
		<MenubarMenuContext.Provider value={{ id }}>
			<Menu.Root
				open={open}
				modal={false}
				openOnHover={activeMenuId ? activeMenuId !== id : false}
				delay={0}
				onOpenChange={setOpen}
				{...props}
			>
				{children}
			</Menu.Root>
		</MenubarMenuContext.Provider>
	)
}
MenubarMenu.displayName = "MenubarMenu"

/********
Menubar Trigger
********/
const MenubarTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Menu.Trigger>
>(({ className, ...props }, ref) => {
	const { id } = useMenubarMenu()
	const { registerTrigger } = useMenubar()

	const triggerRef = React.useRef<HTMLButtonElement>(null)

	React.useEffect(() => {
		const updateRect = () => {
			const element = triggerRef.current
			if (element) {
				const rect = element.getBoundingClientRect()
				const parentRect = element.parentElement?.getBoundingClientRect()
				if (parentRect) {
					registerTrigger(id, {
						left: rect.left - parentRect.left - 1,
						width: rect.width,
						height: rect.height,
					})
				}
			}
		}

		updateRect()
		window.addEventListener("resize", updateRect)

		return () => window.removeEventListener("resize", updateRect)
	}, [])

	return (
		<Menu.Trigger
			ref={useForkRef(ref, triggerRef)}
			className={cn(
				"relative flex min-h-10 cursor-default select-none items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium outline-none data-[popup-open]:text-foreground",
				className
			)}
			{...props}
		/>
	)
})
MenubarTrigger.displayName = "MenubarTrigger"

/********
Menubar Indicator
********/
export const MenubarIndicatorCssVars = {
	activeMenuLeft: "--active-menu-left",
	activeMenuWidth: "--active-menu-width",
	activeMenuHeight: "--active-menu-height",
} as const

const MenubarIndicator = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { activeMenuId, triggerRects } = useMenubar()
	const activeRect = activeMenuId ? triggerRects.get(activeMenuId) : null
	const prevRectRef = React.useRef(activeRect)

	React.useEffect(() => {
		if (activeRect) {
			prevRectRef.current = activeRect
		}
	}, [activeRect])

	const targetRect = activeRect || prevRectRef.current
	const displayIndicator = Boolean(activeRect)

	const style = React.useMemo(() => {
		if (!targetRect) {
			return undefined
		}

		return {
			[MenubarIndicatorCssVars.activeMenuLeft]: `${targetRect.left}px`,
			[MenubarIndicatorCssVars.activeMenuWidth]: `${targetRect.width}px`,
			[MenubarIndicatorCssVars.activeMenuHeight]: `${targetRect.height}px`,
		} as React.CSSProperties
	}, [targetRect])

	return (
		<div
			ref={ref}
			className={cn(
				"absolute left-[var(--active-menu-left)] top-1/2 z-[-1] h-[calc(var(--active-menu-height)-0.5rem)] w-[var(--active-menu-width)] -translate-y-1/2 rounded-md bg-accent transition-all duration-200 ease-in-out",
				className
			)}
			style={style}
			role="presentation"
			hidden={!displayIndicator}
			{...props}
		/>
	)
})
MenubarIndicator.displayName = "MenubarIndicator"

/********
Menubar Content
********/
const MenubarContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Popup>
>(({ className, ...props }, ref) => (
	<Menu.Portal>
		<Menu.Positioner sideOffset={4} alignOffset={-5} align="start">
			<Menu.Popup
				ref={ref}
				className={cn(
					"min-w-48 origin-[var(--transform-origin)] rounded-md border bg-background p-1 text-foreground shadow-sm outline-none transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:shadow-none",
					className
				)}
				{...props}
			/>
		</Menu.Positioner>
	</Menu.Portal>
))
MenubarContent.displayName = "MenubarContent"

/********
Menubar Item
********/
const MenubarItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => (
	<Menu.Item
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
			className
		)}
		{...props}
	/>
))
MenubarItem.displayName = "MenubarItem"

/********
Menubar Item Shortcut
********/
const MenubarItemShortcut = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn(
			"ml-auto pl-10 text-xs tracking-widest text-muted-foreground",
			className
		)}
		{...props}
	/>
))
MenubarItemShortcut.displayName = "MenubarItemShortcut"

/********
Menubar Separator
********/
const MenubarSeparator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Separator>
>(({ className, ...props }, ref) => (
	<Menu.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-muted", className)}
		{...props}
	/>
))
MenubarSeparator.displayName = "MenubarSeparator"

/********
Menubar Sub Trigger
********/
const MenubarSubTrigger = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger>
>(({ className, children, ...props }, ref) => (
	<Menu.SubmenuTrigger
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[popup-open]:bg-accent data-[highlighted]:text-accent-foreground data-[popup-open]:text-accent-foreground data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		{children}
		<ChevronRightIcon className="ml-auto size-3" />
	</Menu.SubmenuTrigger>
))
MenubarSubTrigger.displayName = "MenubarSubTrigger"

/********
Menubar Checkbox Item
********/
const MenubarCheckboxItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.CheckboxItem>
>(({ className, children, ...props }, ref) => (
	<Menu.CheckboxItem
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
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
))
MenubarCheckboxItem.displayName = "MenubarCheckboxItem"

/********
Menubar Radio Item
********/
const MenubarRadioItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.RadioItem>
>(({ className, children, ...props }, ref) => (
	<Menu.RadioItem
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
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
))
MenubarRadioItem.displayName = "MenubarRadioItem"

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
