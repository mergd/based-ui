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
			"min-h-20 w-full rounded-md border border-border bg-background p-4 text-sm text-foreground placeholder:text-muted-fg focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-danger-fg aria-[invalid=true]:bg-destructive aria-[invalid=true]:text-destructive-fg aria-[invalid=true]:placeholder:text-destructive-fg aria-[invalid=true]:focus:outline-danger",
			className
		)}
		{...props}
	/>
))
Textarea.displayName = "Textarea"

export { Textarea }
