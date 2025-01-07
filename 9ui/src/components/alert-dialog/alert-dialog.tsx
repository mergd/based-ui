import * as React from "react"
import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react/alert-dialog"

import { createChildElement, merge } from "../../utils"

/********
Alert Dialog Mappings
********/
const AlertDialog = BaseAlertDialog.Root
AlertDialog.displayName = "AlertDialog"

/********
Alert Dialog Trigger
********/
interface AlertDialogTriggerProps
	extends React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Trigger> {
	asChild?: boolean
}

const AlertDialogTrigger = React.forwardRef<
	HTMLButtonElement,
	AlertDialogTriggerProps
>(({ asChild, children, ...props }, ref) => {
	return (
		<BaseAlertDialog.Trigger
			ref={ref}
			render={asChild ? createChildElement(children) : undefined}
			{...props}
		>
			{children}
		</BaseAlertDialog.Trigger>
	)
})
AlertDialogTrigger.displayName = "AlertDialogTrigger"

/********
Alert Dialog Backdrop
********/
const AlertDialogBackdrop = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Backdrop>
>(({ className, ...props }, ref) => {
	return (
		<BaseAlertDialog.Backdrop
			ref={ref}
			className={merge(
				"fixed inset-0 h-dvh bg-black/70 transition-all [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
				className
			)}
			{...props}
		/>
	)
})
AlertDialogBackdrop.displayName = "AlertDialogBackdrop"

/********
Alert Dialog Close
********/
interface AlertDialogCloseProps
	extends React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Close> {
	asChild?: boolean
}

const AlertDialogClose = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Close>,
	AlertDialogCloseProps
>(({ className, asChild, children, ...props }, ref) => (
	<BaseAlertDialog.Close
		ref={ref}
		className={merge(className)}
		render={asChild ? createChildElement(children) : undefined}
		{...props}
	>
		{children}
	</BaseAlertDialog.Close>
))
AlertDialogClose.displayName = "AlertDialogClose"

/********
Alert Dialog Content
********/
const AlertDialogContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Popup>
>(({ className, children, ...props }, ref) => {
	return (
		<BaseAlertDialog.Portal>
			<AlertDialogBackdrop />
			<BaseAlertDialog.Popup
				ref={ref}
				className={merge(
					"fixed left-1/2 top-1/2 z-50 grid w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] rounded-md border border-primary bg-bg p-4 shadow-elevation-low duration-200 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 sm:max-w-96",
					className
				)}
				{...props}
			>
				{children}
			</BaseAlertDialog.Popup>
		</BaseAlertDialog.Portal>
	)
})
AlertDialogContent.displayName = "AlertDialogContent"

/********
Alert Dialog Header
********/
const AlertDialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={merge("flex flex-col space-y-2", className)} {...props} />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

/********
Alert Dialog Footer
********/
const AlertDialogFooter = ({
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
AlertDialogFooter.displayName = "AlertDialogFooter"

/********
Alert Dialog Title
********/
const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Title
		ref={ref}
		className={merge("text-lg font-semibold text-fg", className)}
		{...props}
	/>
))
AlertDialogTitle.displayName = "AlertDialogTitle"

/********
Alert Dialog Description
********/
const AlertDialogDescription = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Description>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Description>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Description
		ref={ref}
		className={merge("text-sm text-primary-fg", className)}
		{...props}
	/>
))
AlertDialogDescription.displayName = "AlertDialogDescription"

export {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTrigger,
	AlertDialogClose,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
}
