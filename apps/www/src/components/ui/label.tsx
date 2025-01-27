import * as React from "react"

import { cn } from "@/lib/utils"

/********
Label
********/
const Label = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
	<label
		ref={ref}
		className={cn(
			"text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-subtle-fg",
			className
		)}
		{...props}
	/>
))
Label.displayName = "Label"

export { Label }
