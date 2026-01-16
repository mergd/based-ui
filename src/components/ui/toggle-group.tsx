import * as React from "react"
import { ToggleGroup as BaseToggleGroup } from "@base-ui-components/react/toggle-group"

import { cn } from "@/lib/utils"

import { Toggle as ToggleGroupItem } from "./toggle"

const ToggleGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseToggleGroup>
>(({ className, ...props }, ref) => (
	<BaseToggleGroup
		ref={ref}
		className={cn("flex gap-0.5 rounded-md border bg-card p-0.5", className)}
		{...props}
	/>
))
ToggleGroup.displayName = "ToggleGroup"

export { ToggleGroup, ToggleGroupItem }
