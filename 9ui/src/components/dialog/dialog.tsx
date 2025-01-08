"use client"

import * as React from "react"
import { Dialog as BaseDialog } from "@base-ui-components/react"
import { XIcon } from "lucide-react"

import { createChildElement, merge } from "../../utils"

/********
Dialog Mappings
********/
const Dialog = BaseDialog.Root

const DialogPortal = BaseDialog.Portal

/********
Dialog Close
********/
interface DialogCloseProps
	extends React.ComponentPropsWithoutRef<typeof BaseDialog.Close> {
	asChild?: boolean
}

const DialogClose = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Close>,
	DialogCloseProps
>(({ className, asChild, children, ...props }, ref) => (
	<BaseDialog.Close
		ref={ref}
		className={merge(className)}
		render={asChild ? createChildElement(children) : undefined}
		{...props}
	>
		{children}
	</BaseDialog.Close>
))

/********
Dialog Trigger
********/
interface DialogTriggerProps
	extends React.ComponentPropsWithoutRef<typeof BaseDialog.Trigger> {
	asChild?: boolean
}

const DialogTrigger = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Trigger>,
	DialogTriggerProps
>(({ className, asChild, children, ...props }, ref) => (
	<BaseDialog.Trigger
		ref={ref}
		className={merge(className)}
		render={asChild ? createChildElement(children) : undefined}
		{...props}
	>
		{children}
	</BaseDialog.Trigger>
))

/********
Dialog Backdrop
********/
const DialogBackdrop = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Backdrop>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
	<BaseDialog.Backdrop
		ref={ref}
		className={merge(
			"fixed inset-0 h-dvh bg-black/70 transition-all duration-200 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
			className
		)}
		{...props}
	/>
))

DialogBackdrop.displayName = BaseDialog.Backdrop.displayName

/********
Dialog Content
********/
const DialogContent = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Popup>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogBackdrop />
		<BaseDialog.Popup
			ref={ref}
			className={merge(
				"fixed left-1/2 top-1/2 z-50 grid w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] gap-4 rounded-md border border-muted bg-bg p-4 shadow-elevation-low duration-200 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 sm:max-w-96",
				className
			)}
			{...props}
		>
			{children}
			<DialogClose className="absolute right-4 top-4 rounded-sm text-subtle-fg opacity-50 transition-opacity hover:opacity-100 focus:outline-none">
				<XIcon className="size-4 text-current" />
				<span className="sr-only">Close</span>
			</DialogClose>
		</BaseDialog.Popup>
	</DialogPortal>
))

DialogContent.displayName = "DialogContent"

/********
Dialog Footer
********/
const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={merge(
			"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
			className
		)}
		{...props}
	/>
)

DialogFooter.displayName = "DialogFooter"

/********
Dialog Title
********/
const DialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseDialog.Title
		ref={ref}
		className={merge("text-lg font-semibold text-fg", className)}
		{...props}
	/>
))

DialogTitle.displayName = BaseDialog.Title.displayName

/********
Dialog Description
********/
const DialogDescription = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Description>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => (
	<BaseDialog.Description
		ref={ref}
		className={merge("text-sm text-subtle-fg", className)}
		{...props}
	/>
))

DialogDescription.displayName = BaseDialog.Description.displayName

export {
	Dialog,
	DialogPortal,
	DialogBackdrop,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogFooter,
	DialogTitle,
	DialogDescription,
}
