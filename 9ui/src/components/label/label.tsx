import * as React from "react"

import { merge } from "@/src/utils"

const Label = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
	return (
		<label
			ref={ref}
			className={merge(
				"text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-primary-fg",
				className
			)}
			{...props}
		/>
	)
})

export { Label }
