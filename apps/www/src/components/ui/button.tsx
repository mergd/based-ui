import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/********
Button Variants
********/
const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/80",
				ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
				outline:
					"border border-accent bg-background text-accent-foreground hover:bg-accent hover:text-accent-foreground",
				link: "text-link-fg hover:underline",
				destructive:
					"bg-destructive text-destructive-fg hover:bg-destructive/80",
			},
			size: {
				sm: "h-8 px-3 text-xs",
				md: "h-9 px-4 py-2 text-sm",
				lg: "h-10 px-5 py-3",
				"icon-sm": "size-8 [&>svg]:size-4",
				"icon-md": "size-9 [&>svg]:size-5",
				"icon-lg": "size-10 [&>svg]:size-6",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
)

/********
Button
********/
export interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
		React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	)
)
Button.displayName = "Button"

export { Button, buttonVariants }
