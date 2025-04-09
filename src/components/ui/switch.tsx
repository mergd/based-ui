import * as React from "react"
import { Switch as BaseSwitch } from "@base-ui-components/react/switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>
>(({ className, ...props }, ref) => (
	<BaseSwitch.Root
		ref={ref}
		className={cn(
			"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary",
			"disabled:mix-blend-multiply dark:disabled:mix-blend-screen",
			className
		)}
		{...props}
	>
		<BaseSwitch.Thumb
			className={cn(
				"pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[checked]:translate-x-5"
			)}
		/>
	</BaseSwitch.Root>
))
Switch.displayName = "Switch"

export { Switch }
