import * as React from "react"
import { ToggleGroup as BaseToggleGroup } from "@base-ui-components/react/toggle-group"

import { merge } from "../../utils"

const ToggleGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseToggleGroup>
>(({ className, ...props }, ref) => {
	return (
		<BaseToggleGroup
			ref={ref}
			className={merge(
				"flex gap-1 rounded-md border border-muted bg-bg p-1",
				className
			)}
			{...props}
		/>
	)
})
ToggleGroup.displayName = "ToggleGroup"

export { ToggleGroup }
