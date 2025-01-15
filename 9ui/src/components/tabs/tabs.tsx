"use client"

import * as React from "react"
import { Tabs as BaseTabs } from "@base-ui-components/react/tabs"

import { merge } from "../../utils"

/********
Types
********/
type TabsVariant = "capsule" | "underline"

/********
Tabs Context
********/
type TabsContext = {
	variant: TabsVariant
}

const TabsContext = React.createContext<TabsContext | null>(null)

const useTabs = () => {
	const context = React.useContext(TabsContext)

	if (!context) {
		throw new Error("useTabs must be used within a Tabs")
	}

	return context
}

/********
Tabs
********/
interface TabsProps
	extends React.ComponentPropsWithoutRef<typeof BaseTabs.Root> {
	variant?: TabsVariant
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
	({ variant = "capsule", ...props }, ref) => {
		return (
			<TabsContext.Provider value={{ variant }}>
				<BaseTabs.Root ref={ref} {...props} />
			</TabsContext.Provider>
		)
	}
)
Tabs.displayName = "Tabs"

/********
Tabs List
********/
const TabsList = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseTabs.List>
>(({ className, ...props }, ref) => {
	const { variant } = useTabs()

	return (
		<BaseTabs.List
			ref={ref}
			className={merge(
				"relative flex gap-1 px-1 text-sm font-medium",
				variant === "capsule"
					? "rounded-md border border-muted"
					: "border-b border-muted",
				className
			)}
			{...props}
		/>
	)
})
TabsList.displayName = "TabsList"

/********
Tab
********/
const Tab = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(({ className, ...props }, ref) => {
	return (
		<BaseTabs.Tab
			ref={ref}
			className={merge(
				"min-h-10 w-full text-fg data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				className
			)}
			{...props}
		/>
	)
})
Tab.displayName = "Tab"

/********
Tab Indicator
********/
const TabIndicator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseTabs.Indicator>
>(({ className, ...props }, ref) => {
	const { variant } = useTabs()
	return (
		<BaseTabs.Indicator
			ref={ref}
			className={merge(
				"absolute left-0 z-[-1] w-[var(--active-tab-width)] -translate-y-1/2 translate-x-[var(--active-tab-left)] transition-all duration-200 ease-in-out",
				variant === "underline"
					? "top-full h-px bg-accent"
					: "top-1/2 h-[calc(var(--active-tab-height)-0.5rem)] rounded-md bg-muted",
				className
			)}
			{...props}
		/>
	)
})
TabIndicator.displayName = "TabIndicator"

/********
Tab Content
********/
const TabContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => {
	return (
		<BaseTabs.Panel
			ref={ref}
			className={merge(
				"mt-2 flex-1 rounded-md border border-muted p-4",
				className
			)}
			{...props}
		/>
	)
})
TabContent.displayName = "TabContent"

export { Tabs, TabsList, Tab, TabContent, TabIndicator }
