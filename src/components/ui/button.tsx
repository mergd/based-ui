"use client"

import * as React from "react"
import { mergeProps } from "@base-ui-components/react"
import { useRender } from "@base-ui-components/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
	"cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors duration-200 outline-none select-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 disabled:pointer-events-none disabled:opacity-70 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/80",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
				outline:
					"border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
				link: "text-foreground hover:underline",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/80",
				success: "bg-success text-success-foreground hover:bg-success/80",
			},
			size: {
				sm: "h-8 px-2.5 text-sm",
				md: "h-9 px-3 text-base",
				lg: "h-10 px-3.5 text-base",
				"icon-sm": "size-8 text-sm [&>svg]:size-4",
				icon: "size-9 text-base [&>svg]:size-4",
				"icon-lg": "size-10 text-base [&>svg]:size-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "lg",
		},
	}
)

export interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		useRender.ComponentProps<"button"> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			render = <button />,
			children,
			disabled,
			...props
		},
		ref
	) => {
		const defaultProps: useRender.ElementProps<"button"> = {
			className: cn(buttonVariants({ variant, size, className })),
			ref: ref,
			disabled: disabled,
		}

		const { renderElement } = useRender({
			render,
			props: mergeProps<"button">(defaultProps, props, { children }),
		})

		return renderElement()
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }
