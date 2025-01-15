"use client"

import * as React from "react"
import { Menu } from "@base-ui-components/react"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { useControlledState } from "../../hooks/use-controlled-state"
import { merge, mergeRefs } from "../../utils"

/********
Menubar Context
********/
type TriggerRect = {
	left: number
	width: number
	height: number
}

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
				className={merge(
					"relative flex w-fit gap-1 rounded-md border border-muted px-1",
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
	const [open, setOpen] = useControlledState({
		state: props.open,
		defaultState: false,
		onStateChange: (open) => {
			if (open) {
				setActiveMenuId(id)
			} else if (activeMenuId === id) {
				setActiveMenuId(null)
			}
		},
	})

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
Menubar Sub Menu
********/

const MenubarSubMenu = ({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Menu.Root>) => {
	return <Menu.Root {...props}>{children}</Menu.Root>
}
MenubarSubMenu.displayName = "MenubarSubMenu"

/********
Menubar Trigger
********/
const MenubarTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Menu.Trigger>
>(({ className, children, ...props }, ref) => {
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
			ref={mergeRefs([ref, triggerRef])}
			className={merge(
				"group relative flex cursor-default select-none items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium outline-none data-[popup-open]:text-fg",
				className
			)}
			{...props}
		>
			{children}
		</Menu.Trigger>
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
			className={merge(
				"absolute left-[var(--active-menu-left)] top-1/2 z-[-1] h-[calc(var(--active-menu-height)-0.5rem)] w-[var(--active-menu-width)] -translate-y-1/2 rounded-sm bg-muted transition-all duration-200 ease-in-out",
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
>(({ className, ...props }, ref) => {
	return (
		<Menu.Portal>
			<Menu.Positioner sideOffset={4} alignOffset={-5} align="start">
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
MenubarContent.displayName = "MenubarContent"

/********
Menubar Item
********/
const MenubarItem = React.forwardRef<
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
MenubarItem.displayName = "MenubarItem"

/********
Menubar Item Shortcut
********/
const MenubarItemShortcut = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => {
	return (
		<Menu.Item
			ref={ref}
			className={merge(
				"ml-auto pl-10 text-xs tracking-widest text-muted-fg group-data-[highlighted]:text-accent-fg",
				className
			)}
			{...props}
		/>
	)
})
MenubarItemShortcut.displayName = "MenubarItemShortcut"

/********
Menubar Separator
********/
const MenubarSeparator = React.forwardRef<
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
MenubarSeparator.displayName = "MenubarSeparator"

/********
Menubar Sub Trigger
********/
const MenubarSubTrigger = React.forwardRef<
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
MenubarSubTrigger.displayName = "MenubarSubTrigger"

/********
Menubar Checkbox Item
********/
const MenubarCheckboxItem = React.forwardRef<
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
MenubarCheckboxItem.displayName = "MenubarCheckboxItem"

/********
Menubar Radio Group
********/
const MenubarRadioGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Menu.RadioGroup>
>(({ className, children, ...props }, ref) => {
	return (
		<Menu.RadioGroup ref={ref} className={className} {...props}>
			{children}
		</Menu.RadioGroup>
	)
})
MenubarRadioGroup.displayName = "MenubarRadioGroup"

/********
Menubar Radio Item
********/
const MenubarRadioItem = React.forwardRef<
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
