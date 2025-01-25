import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { merge } from "@/lib/utils"

/********
Alert Variants
********/
const alertVariants = cva(
	"flex w-full items-start space-x-4 rounded-md border p-4",
	{
		variants: {
			variant: {
				default: "border-muted bg-bg text-fg",
				warning: "border-warning-fg bg-warning text-warning-fg",
				error: "border-danger-fg bg-danger text-danger-fg",
				info: "border-info-fg bg-info text-info-fg",
				success: "border-success-fg bg-success text-success-fg",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

/********
Alert
********/
export interface AlertProps
	extends VariantProps<typeof alertVariants>,
		React.HTMLAttributes<HTMLDivElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ className, variant, ...props }, ref) => (
		<div
			ref={ref}
			className={merge(alertVariants({ variant }), className)}
			{...props}
		/>
	)
)
Alert.displayName = "Alert"

/********
Alert Content
********/
const AlertContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={merge("flex flex-1 flex-col gap-y-2", className)}
		{...props}
	/>
))
AlertContent.displayName = "AlertContent"

/********
Alert Icon
********/
const AlertIcon = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={merge("[&>svg]:size-3.5", className)} {...props} />
))
AlertIcon.displayName = "AlertIcon"

/********
Alert Title
********/
const AlertTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h4
		ref={ref}
		className={merge("text-sm font-medium leading-none", className)}
		{...props}
	/>
))
AlertTitle.displayName = "AlertTitle"

/********
Alert Description
********/
const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={merge("text-sm", className)} {...props} />
))
AlertDescription.displayName = "AlertDescription"

/********
Alert Action
********/
const AlertAction = React.forwardRef<
	HTMLButtonElement,
	React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
	<button
		ref={ref}
		className={merge("ml-auto self-center", className)}
		{...props}
	/>
))
AlertAction.displayName = "AlertAction"

export {
	Alert,
	AlertContent,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	AlertAction,
}
