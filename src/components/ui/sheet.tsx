"use client"

import * as React from "react"
import { Dialog } from "@base-ui-components/react/dialog"
import { cva, VariantProps } from "class-variance-authority"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/********
Sheet Mappings
********/
const Sheet = Dialog.Root

const SheetTrigger = Dialog.Trigger
SheetTrigger.displayName = "SheetTrigger"

const SheetPopup = Dialog.Popup
SheetPopup.displayName = "SheetPopup"

const SheetPortal = Dialog.Portal

const SheetClose = Dialog.Close
SheetClose.displayName = "SheetClose"

/********
Sheet Backdrop
********/
const SheetBackdrop = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<typeof Dialog.Backdrop>
>(({ className, ...props }, ref) => (
	<Dialog.Backdrop
		ref={ref}
		className={cn(
			"fixed inset-0 h-dvh bg-black/70 transition-all duration-300 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
			className
		)}
		{...props}
	/>
))
SheetBackdrop.displayName = "SheetBackdrop"

/********
Sheet Content
********/
const sheetContentVariants = cva(
	"fixed max-h-[calc(100vh-2rem)] bg-background p-6 text-foreground shadow-md outline-none transition-all duration-500 ease-in-out",
	{
		variants: {
			side: {
				bottom:
					"inset-x-0 bottom-0 mx-auto h-fit w-[calc(100vw-2rem)] origin-bottom -translate-y-4 rounded-lg border [&[data-ending-style]]:translate-y-full [&[data-starting-style]]:translate-y-full",
				right:
					"inset-y-0 right-0 top-4 h-full w-[calc(100vw-2rem)] origin-right -translate-x-4 rounded-lg border sm:w-full sm:max-w-xs [&[data-ending-style]]:translate-x-full [&[data-starting-style]]:translate-x-full",
				left: "inset-y-0 left-0 top-4 h-full w-[calc(100vw-2rem)] origin-left translate-x-4 rounded-lg border sm:max-w-xs [&[data-ending-style]]:-translate-x-full [&[data-starting-style]]:-translate-x-full",
				top: "inset-x-0 top-0 mx-auto h-fit w-[calc(100vw-2rem)] origin-top translate-y-4 rounded-lg border [&[data-ending-style]]:-translate-y-full [&[data-starting-style]]:-translate-y-full",
			},
		},
		defaultVariants: {
			side: "right",
		},
	}
)

export interface SheetContentProps
	extends VariantProps<typeof sheetContentVariants>,
		React.ComponentPropsWithoutRef<typeof Dialog.Popup> {}

const SheetContent = React.forwardRef<
	React.ElementRef<"div">,
	SheetContentProps
>(({ className, side, children, ...props }, ref) => (
	<Dialog.Popup
		ref={ref}
		className={cn(sheetContentVariants({ side, className }))}
		{...props}
	>
		<SheetClose className="absolute right-4 top-4 rounded-sm opacity-50 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none">
			<XIcon className="size-4" />
			<span className="sr-only">Close</span>
		</SheetClose>
		{children}
	</Dialog.Popup>
))
SheetContent.displayName = "SheetContent"

/********
Sheet Header
********/
const SheetHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-2", className)}
		{...props}
	/>
))
SheetHeader.displayName = "SheetHeader"

/********
Sheet Title
********/
const SheetTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h4
		ref={ref}
		className={cn("text-lg font-medium text-foreground", className)}
		{...props}
	/>
))
SheetTitle.displayName = "SheetTitle"

/********
Sheet Description
********/
const SheetDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
))
SheetDescription.displayName = "SheetDescription"

/********
Sheet Footer
********/
const SheetFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
			className
		)}
		{...props}
	/>
))
SheetFooter.displayName = "SheetFooter"

export {
	Sheet,
	SheetBackdrop,
	SheetContent,
	SheetTrigger,
	SheetPopup,
	SheetPortal,
	SheetClose,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
}
