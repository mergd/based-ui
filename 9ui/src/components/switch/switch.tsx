import * as React from "react"
import { Switch as BaseSwitch } from "@base-ui-components/react/switch"

import { merge } from "../../utils"

/********
Switch
********/
const Switch = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>
>(({ className, ...props }, ref) => {
	return (
		<BaseSwitch.Root
			ref={ref}
			className={merge(
				"peer inline-flex h-6 w-10 items-center rounded-full bg-muted p-0.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-accent-fg data-[checked]:bg-accent",
				className
			)}
			{...props}
		>
			<BaseSwitch.Thumb className="left-0 top-0 aspect-square h-5 rounded-full bg-accent transition-[colors,transform] duration-300 ease-in-out data-[checked]:translate-x-4 data-[checked]:bg-accent-fg" />
		</BaseSwitch.Root>
	)
})
Switch.displayName = "Switch"

export { Switch }
