"use client"

import * as React from "react"
import { Dialog } from "@base-ui-components/react/dialog"
import { cva, VariantProps } from "class-variance-authority"
import { XIcon } from "lucide-react"

import { createChildElement, merge } from "../../utils"

/********
Sheet Mappings
********/
const SheetPopup = Dialog.Popup

const SheetPortal = Dialog.Portal

/********
Sheet Root
********/
const Sheet = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<typeof Dialog.Root>
>((props, ref) => {
	return <Dialog.Root ref={ref} {...props} />
})
Sheet.displayName = "Sheet"

/********
Sheet Trigger
********/
interface SheetTriggerProps
	extends React.ComponentPropsWithoutRef<typeof Dialog.Trigger> {
	asChild?: boolean
}

const SheetTrigger = React.forwardRef<
	React.ElementRef<"button">,
	SheetTriggerProps
>(({ children, asChild, ...props }, ref) => {
	return (
		<Dialog.Trigger
			ref={ref}
			render={asChild ? createChildElement(children) : undefined}
			{...props}
		>
			{children}
		</Dialog.Trigger>
	)
})
SheetTrigger.displayName = "SheetTrigger"

/********
Sheet Backdrop
********/
const SheetBackdrop = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<typeof Dialog.Backdrop>
>(({ className, ...props }, ref) => {
	return (
		<Dialog.Backdrop
			ref={ref}
			className={merge(
				"fixed inset-0 h-dvh bg-black/70 transition-all duration-300 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
				className
			)}
			{...props}
		/>
	)
})
SheetBackdrop.displayName = "SheetBackdrop"

/********
Sheet Close
********/
interface SheetCloseProps
	extends React.ComponentPropsWithoutRef<typeof Dialog.Close> {
	asChild?: boolean
}

const SheetClose = React.forwardRef<
	React.ElementRef<"button">,
	SheetCloseProps
>(({ children, asChild, ...props }, ref) => {
	return (
		<Dialog.Close
			ref={ref}
			render={asChild ? createChildElement(children) : undefined}
			{...props}
		>
			{children}
		</Dialog.Close>
	)
})
SheetClose.displayName = "SheetClose"

/********
Sheet Content
********/
const sheetContentVariants = cva(
	"fixed max-h-[calc(100vh-2rem)] border-secondary bg-bg p-6 text-fg shadow-elevation-medium outline-none transition-all duration-500 ease-in-out",
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
>(({ className, side, children, ...props }, ref) => {
	return (
		<Dialog.Popup
			ref={ref}
			className={merge(sheetContentVariants({ side, className }))}
			{...props}
		>
			<SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline focus:outline-offset-2 focus:outline-accent disabled:pointer-events-none">
				<XIcon className="size-4" />
				<span className="sr-only">Close</span>
			</SheetClose>
			{children}
		</Dialog.Popup>
	)
})
SheetContent.displayName = "SheetContent"

/********
Sheet Header
********/
const SheetHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={merge("flex flex-col space-y-2", className)}
			{...props}
		/>
	)
})
SheetHeader.displayName = "SheetHeader"

/********
Sheet Title
********/
const SheetTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
	return (
		<h4
			ref={ref}
			className={merge("text-lg font-medium text-fg", className)}
			{...props}
		/>
	)
})
SheetTitle.displayName = "SheetTitle"

/********
Sheet Description
********/
const SheetDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	return (
		<p
			ref={ref}
			className={merge("text-sm text-secondary-fg", className)}
			{...props}
		/>
	)
})
SheetDescription.displayName = "SheetDescription"

/********
Sheet Footer
********/
const SheetFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={merge(
				"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				className
			)}
			{...props}
		/>
	)
})
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
