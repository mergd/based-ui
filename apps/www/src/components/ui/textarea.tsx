import * as React from "react"

import { cn } from "@/lib/utils"

/********
Textarea
********/
const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
	<textarea
		ref={ref}
		className={cn(
			"min-h-20 w-full rounded-md border border-input bg-background p-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive aria-[invalid=true]:placeholder:text-destructive aria-[invalid=true]:focus:ring-destructive",
			className
		)}
		{...props}
	/>
))
Textarea.displayName = "Textarea"

export { Textarea }
