import * as React from "react"
import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible"

import { merge } from "../../utils"

const Collapsible = BaseCollapsible.Root

const CollapsibleTrigger = BaseCollapsible.Trigger

const CollapsibleContent = React.forwardRef<
	HTMLButtonElement,
	BaseCollapsible.Panel.Props
>(({ className, ...props }, ref) => {
	return (
		<BaseCollapsible.Panel
			ref={ref}
			className={merge(
				"h-[var(--collapsible-panel-height)] overflow-hidden text-sm transition-all duration-200 data-[ending-style]:h-0 data-[starting-style]:h-0",
				className
			)}
			{...props}
		/>
	)
})

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
