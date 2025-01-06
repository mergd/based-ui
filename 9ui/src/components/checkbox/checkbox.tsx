"use client"

import * as React from "react"
import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox"
import { CheckIcon } from "lucide-react"

import { merge } from "../../utils"

const Checkbox = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>
>(({ className, ...props }, ref) => {
	return (
		<BaseCheckbox.Root
			ref={ref}
			className={merge(
				"peer flex size-4 shrink-0 items-center justify-center rounded-sm border border-secondary bg-bg transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-accent data-[checked]:bg-accent data-[checked]:text-accent-fg",
				props["aria-invalid"] &&
					"border-danger-fg bg-danger text-danger-fg placeholder:text-danger-fg focus:outline-danger",
				className
			)}
			{...props}
		>
			<BaseCheckbox.Indicator className="text-accent-fg data-[unchecked]:hidden">
				<CheckIcon className="size-3" />
			</BaseCheckbox.Indicator>
		</BaseCheckbox.Root>
	)
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
