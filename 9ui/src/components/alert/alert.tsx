import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { merge } from "../../utils"
import { Slot } from "../slot/slot"

const alertVariants = cva(
	"flex w-full items-start space-x-4 rounded-md border p-4",
	{
		variants: {
			variant: {
				default: "bg-bg text-fg border-secondary",
				warning: "bg-warning text-warning-fg border-warning-fg",
				error: "bg-danger text-danger-fg border-danger-fg",
				info: "bg-info text-info-fg border-info-fg",
				success: "bg-success text-success-fg border-success-fg",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

export interface AlertProps
	extends VariantProps<typeof alertVariants>,
		React.HTMLAttributes<HTMLDivElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ children, className, variant, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={merge(alertVariants({ variant }), className)}
				{...props}
			>
				{children}
			</div>
		)
	}
)
Alert.displayName = "Alert"

const AlertContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={merge("flex flex-1 flex-col gap-y-2", className)}
			{...props}
		>
			{children}
		</div>
	)
})
AlertContent.displayName = "AlertContent"

const AlertIcon = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={merge("[&>svg]:size-3.5", className)}
			{...props}
		/>
	)
})

const AlertTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
	return (
		<h4
			ref={ref}
			className={merge("text-sm font-medium leading-none", className)}
			{...props}
		/>
	)
})
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	return <p ref={ref} className={merge("text-sm", className)} {...props} />
})
AlertDescription.displayName = "AlertDescription"

const AlertAction = React.forwardRef<
	HTMLButtonElement,
	React.HTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
	return (
		<Slot
			ref={ref}
			className={merge("ml-auto self-center", className)}
			{...props}
		>
			{children}
		</Slot>
	)
})
AlertAction.displayName = "AlertAction"

export {
	Alert,
	AlertContent,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	AlertAction,
}
