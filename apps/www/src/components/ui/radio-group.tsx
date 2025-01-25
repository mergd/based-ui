import * as React from "react"
import { Radio } from "@base-ui-components/react/radio"
import { RadioGroup as BaseRadioGroup } from "@base-ui-components/react/radio-group"

import { merge } from "@/lib/utils"

/********
Radio Group
********/
const RadioGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseRadioGroup>
>(({ className, ...props }, ref) => (
	<BaseRadioGroup
		ref={ref}
		className={merge("flex flex-col gap-2", className)}
		{...props}
	/>
))
RadioGroup.displayName = "RadioGroup"

/********
Radio Group Item
********/
const RadioGroupItem = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Radio.Root>
>(({ className, ...props }, ref) => (
	<Radio.Root
		ref={ref}
		className={merge(
			"peer flex size-4 items-center justify-center rounded-full border border-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-accent",
			className
		)}
		{...props}
	>
		<Radio.Indicator className="flex before:size-2 before:rounded-full before:bg-accent data-[unchecked]:hidden" />
	</Radio.Root>
))
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
