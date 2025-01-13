"use client"

import * as React from "react"
import { Toaster as Sonner, toast } from "sonner"

import { merge } from "../../utils"
import { buttonVariants } from "../button/button"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			className="text-xs text-fg"
			toastOptions={{
				unstyled: true,
				classNames: {
					toast:
						"group max-w-96 w-full bg-bg rounded-md p-4 border flex gap-4 border-muted right-0 shadow-elevation-low",
					title: "font-medium",
					success:
						"data-[rich-colors]:!bg-success data-[rich-colors]:!text-success-fg data-[rich-colors]:!border-success-fg",
					error:
						"data-[rich-colors]:!bg-danger data-[rich-colors]:!text-danger-fg data-[rich-colors]:!border-danger-fg",
					warning:
						"data-[rich-colors]:!bg-warning data-[rich-colors]:!text-warning-fg data-[rich-colors]:!border-warning-fg",
					info: "data-[rich-colors]:!bg-info data-[rich-colors]:!text-info-fg data-[rich-colors]:!border-info-fg",
					description: "text-muted-fg group-data-[rich-colors]:text-fg",
					actionButton: merge(
						buttonVariants({ variant: "ghost", size: "sm" }),
						"my-auto"
					),
					cancelButton: merge(
						buttonVariants({ variant: "destructive", size: "sm" }),
						"my-auto"
					),
					closeButton: "!bg-bg border-muted text-fg transition-colors",
					icon: "my-auto",
				},
			}}
			{...props}
		/>
	)
}

export { Toaster, toast }
