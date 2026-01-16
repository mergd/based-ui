import * as React from "react"
import { Radio } from "@base-ui-components/react/radio"
import { RadioGroup as BaseRadioGroup } from "@base-ui-components/react/radio-group"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseRadioGroup>
>(({ className, ...props }, ref) => (
	<BaseRadioGroup
		ref={ref}
		className={cn("flex flex-col items-start gap-1", className)}
		{...props}
	/>
))
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Radio.Root>
>(({ className, ...props }, ref) => (
	<Radio.Root
		ref={ref}
		className={cn(
			"peer flex size-5 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[unchecked]:border-[1.5px] data-[unchecked]:border-muted-foreground/60 data-[checked]:bg-primary data-[checked]:text-primary-foreground",
			className
		)}
		{...props}
	>
		<Radio.Indicator
			className={cn(
				"flex items-center justify-center before:size-2 before:rounded-full before:bg-current data-[unchecked]:hidden"
			)}
		/>
	</Radio.Root>
))
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
