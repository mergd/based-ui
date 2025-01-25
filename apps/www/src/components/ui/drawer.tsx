"use client"

import * as React from "react"
import { Drawer as BaseDrawer } from "vaul-base"

import { merge } from "@/lib/utils"

/********
Drawer Mappings
********/
const DrawerTrigger = BaseDrawer.Trigger

const DrawerPortal = BaseDrawer.Portal

const DrawerClose = BaseDrawer.Close

/********
Drawer
********/
const Drawer = ({
	shouldScaleBackground = true,
	...props
}: React.ComponentProps<typeof BaseDrawer.Root>) => (
	<BaseDrawer.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)
Drawer.displayName = "Drawer"

/********
Drawer Backdrop
********/
const DrawerBackdrop = React.forwardRef<
	React.ElementRef<typeof BaseDrawer.Overlay>,
	React.ComponentPropsWithoutRef<typeof BaseDrawer.Overlay>
>(({ className, ...props }, ref) => (
	<BaseDrawer.Overlay
		ref={ref}
		className={merge("fixed inset-0 z-50 bg-black/70", className)}
		{...props}
	/>
))
DrawerBackdrop.displayName = "DrawerBackdrop"

/********
Drawer Content
********/
const DrawerContent = React.forwardRef<
	React.ElementRef<typeof BaseDrawer.Content>,
	React.ComponentPropsWithoutRef<typeof BaseDrawer.Content>
>(({ className, children, ...props }, ref) => (
	<DrawerPortal>
		<DrawerBackdrop />
		<BaseDrawer.Content
			ref={ref}
			className={merge(
				"fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col rounded-t-lg border border-muted bg-bg",
				className
			)}
			{...props}
		>
			<div className="mx-auto mb-8 mt-4 h-2 w-20 rounded-full bg-muted" />
			{children}
		</BaseDrawer.Content>
	</DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

/********
Drawer Header
********/
const DrawerHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={merge("grid gap-1.5 p-4 text-center sm:text-left", className)}
		{...props}
	/>
)
DrawerHeader.displayName = "DrawerHeader"

/********
Drawer Footer
********/
const DrawerFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={merge("mt-auto flex flex-col gap-2 p-4", className)}
		{...props}
	/>
)
DrawerFooter.displayName = "DrawerFooter"

/********
Drawer Title
********/
const DrawerTitle = React.forwardRef<
	React.ElementRef<typeof BaseDrawer.Title>,
	React.ComponentPropsWithoutRef<typeof BaseDrawer.Title>
>(({ className, ...props }, ref) => (
	<BaseDrawer.Title
		ref={ref}
		className={merge(
			"text-lg font-semibold leading-none tracking-tight",
			className
		)}
		{...props}
	/>
))
DrawerTitle.displayName = "DrawerTitle"

/********
Drawer Description
********/
const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof BaseDrawer.Description>,
	React.ComponentPropsWithoutRef<typeof BaseDrawer.Description>
>(({ className, ...props }, ref) => (
	<BaseDrawer.Description
		ref={ref}
		className={merge("text-sm text-muted-fg", className)}
		{...props}
	/>
))
DrawerDescription.displayName = "DrawerDescription"

export {
	Drawer,
	DrawerPortal,
	DrawerBackdrop,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
}
