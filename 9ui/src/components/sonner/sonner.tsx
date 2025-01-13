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
						"max-w-96 w-full bg-bg rounded-md p-4 border flex gap-4 border-muted right-0 shadow-elevation-low",
					title: "font-medium",
					description: "text-muted-fg",
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
