import * as React from "react"
import { CheckCircle, InfoIcon, XCircle } from "lucide-react"

import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	type AlertProps,
} from "@/components/ui/alert"

import { cn } from "@/lib/utils"

type OpinionatedAlertVariant = "success" | "error" | "info"

interface OpinionatedAlertProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
	variant: OpinionatedAlertVariant
	title: React.ReactNode
	msg: React.ReactNode
}

const variantMap: Record<
	OpinionatedAlertVariant,
	{
		icon: React.ElementType
		alertVariant: AlertProps["variant"]
	}
> = {
	success: { icon: CheckCircle, alertVariant: "success" },
	error: { icon: XCircle, alertVariant: "danger" },
	info: { icon: InfoIcon, alertVariant: "info" },
}

const OpinionatedAlert = React.forwardRef<
	HTMLDivElement,
	OpinionatedAlertProps
>(({ className, variant, title, msg, ...props }, ref) => {
	const { icon: Icon, alertVariant } = variantMap[variant]

	return (
		<Alert
			ref={ref}
			variant={alertVariant}
			className={cn("items-center", className)} // items-center to vertically align icon with single-line text
			{...props}
		>
			<AlertIcon>
				<Icon className="size-5" /> {/* Increased size slightly */}
			</AlertIcon>
			<AlertContent>
				{title && <AlertTitle>{title}</AlertTitle>}
				{msg && <AlertDescription>{msg}</AlertDescription>}
			</AlertContent>
		</Alert>
	)
})
OpinionatedAlert.displayName = "OpinionatedAlert"

export { OpinionatedAlert, type OpinionatedAlertProps }
