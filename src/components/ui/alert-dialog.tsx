import * as React from "react"
import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react/alert-dialog"

import { cn } from "@/lib/utils"

const AlertDialog = BaseAlertDialog.Root

const AlertDialogTrigger = BaseAlertDialog.Trigger

const AlertDialogClose = BaseAlertDialog.Close

const AlertDialogBackdrop = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Backdrop>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Backdrop
		ref={ref}
		className={cn(
			"fixed inset-0 bg-black/20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:bg-black/70",
			className
		)}
		{...props}
	/>
))
AlertDialogBackdrop.displayName = "AlertDialogBackdrop"

const AlertDialogContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Popup>
>(({ className, children, ...props }, ref) => (
	<BaseAlertDialog.Portal>
		<AlertDialogBackdrop />
		<BaseAlertDialog.Popup
			ref={ref}
			className={cn(
				"fixed left-1/2 top-1/2 z-50 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-card p-4 text-card-foreground outline-none transition-all duration-150 data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:border-border",
				className
			)}
			{...props}
		>
			{children}
		</BaseAlertDialog.Popup>
	</BaseAlertDialog.Portal>
))
AlertDialogContent.displayName = "AlertDialogContent"

const AlertDialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-col space-y-2", className)} {...props} />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex justify-end gap-4", className)} {...props} />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Title
		ref={ref}
		className={cn(
			"-mt-1.5 mb-1 text-lg font-medium text-foreground",
			className
		)}
		{...props}
	/>
))
AlertDialogTitle.displayName = "AlertDialogTitle"

const AlertDialogDescription = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Description>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Description>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Description
		ref={ref}
		className={cn("mb-6 text-base text-muted-foreground", className)}
		{...props}
	/>
))
AlertDialogDescription.displayName = "AlertDialogDescription"

export {
	AlertDialog,
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
}
