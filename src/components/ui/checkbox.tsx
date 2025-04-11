"use client"

import * as React from "react"
import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox"
import { CheckIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root> & {
		indeterminate?: boolean
	}
>(({ className, indeterminate, ...props }, ref) => (
	<BaseCheckbox.Root
		ref={ref}
		indeterminate={indeterminate}
		className={cn(
			"peer bg-input focus-visible:ring-ring aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive aria-[invalid=true]:focus:ring-destructive data-[checked]:border-primary data-[checked]:bg-primary data-[indeterminate]:bg-primary data-[checked]:text-primary-foreground flex size-4 shrink-0 items-center justify-center rounded-sm border transition-colors duration-150 outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...props}
	>
		<BaseCheckbox.Indicator className="text-primary-foreground block data-[unchecked]:hidden">
			{indeterminate ? (
				<MinusIcon className="size-3" />
			) : (
				<CheckIcon className="size-3" />
			)}
		</BaseCheckbox.Indicator>
	</BaseCheckbox.Root>
))
Checkbox.displayName = "Checkbox"

export { Checkbox }
