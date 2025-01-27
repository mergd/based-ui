import * as React from "react"
import { Progress as BaseProgress } from "@base-ui-components/react/progress"

import { cn } from "@/lib/utils"

/********
Progress
********/
const Progress = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof BaseProgress.Root>
>(({ className, children, ...props }, ref) => (
	<BaseProgress.Root ref={ref} className="relative" {...props}>
		<BaseProgress.Track
			className={cn(
				"block h-1 w-full overflow-hidden rounded-full bg-muted",
				className
			)}
		>
			<BaseProgress.Indicator className="block bg-accent transition-all duration-300" />
		</BaseProgress.Track>
		{children}
	</BaseProgress.Root>
))
Progress.displayName = "Progress"

/********
Progress Label
********/
const ProgressLabel = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn(
			"absolute right-0 top-2 text-xs font-medium text-foreground",
			className
		)}
		{...props}
	/>
))
ProgressLabel.displayName = "ProgressLabel"

export { Progress, ProgressLabel }
