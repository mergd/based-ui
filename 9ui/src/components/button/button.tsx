import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { merge } from "../../utils"
import { Slot } from "../slot/slot"

/********
Button Variants
********/
const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				solid: "bg-accent text-accent-fg hover:bg-accent/80",
				ghost: "text-accent hover:bg-accent hover:text-accent-fg",
				outline:
					"border border-accent bg-bg text-accent shadow-elevation-low hover:bg-accent hover:text-accent-fg",
				link: "text-link-fg hover:underline",
				destructive: "bg-danger text-danger-fg hover:bg-danger/80",
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
			variant: "solid",
			size: "md",
		},
	}
)

/********
Button
********/
export interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
		React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"

		return (
			<Comp
				className={merge(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }
