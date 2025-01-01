"use client"

import React from "react"
import { Separator as BaseSeparator } from "@base-ui-components/react/separator"

import { merge } from "@/src/utils"

interface SeparatorProps extends BaseSeparator.Props {
	orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<
	React.ElementRef<typeof BaseSeparator>,
	SeparatorProps
>(({ className, orientation = "horizontal", ...props }, ref) => (
	<BaseSeparator
		ref={ref}
		className={merge(
			"shrink-0 bg-primary",
			orientation === "horizontal" ? "h-px" : "w-px",
			className
		)}
		{...props}
	/>
))
Separator.displayName = BaseSeparator.displayName

export { Separator }
