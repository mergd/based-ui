"use client"

import * as React from "react"
import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox"
import { CheckIcon, MinusIcon } from "lucide-react"

import { merge } from "@/lib/utils"

/********
Checkbox
********/
const Checkbox = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>
>(({ className, ...props }, ref) => (
	<BaseCheckbox.Root
		ref={ref}
		className={merge(
			"peer flex size-4 shrink-0 items-center justify-center rounded-sm border border-muted bg-bg transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-danger-fg aria-[invalid=true]:bg-danger aria-[invalid=true]:text-danger-fg aria-[invalid=true]:focus:outline-danger data-[checked]:border-accent data-[checked]:bg-accent data-[indeterminate]:bg-accent data-[checked]:text-accent-fg",
			className
		)}
		{...props}
	>
		<BaseCheckbox.Indicator className="block text-accent-fg data-[unchecked]:hidden">
			{props.indeterminate ? (
				<MinusIcon className="size-3" />
			) : (
				<CheckIcon className="size-3" />
			)}
		</BaseCheckbox.Indicator>
	</BaseCheckbox.Root>
))
Checkbox.displayName = "Checkbox"

export { Checkbox }
