import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { merge } from "../../utils"

const badgeVariants = cva(
	"inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold",
	{
		variants: {
			variant: {
				solid: "bg-accent text-accent-fg",
				secondary: "bg-primary text-primary-fg",
				success: "bg-success text-success-fg",
				danger: "bg-danger text-danger-fg",
				warning: "bg-warning text-warning-fg",
				info: "bg-info text-info-fg",
				outline: "border border-fg text-fg",
			},
		},
		defaultVariants: {
			variant: "solid",
		},
	}
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={merge(badgeVariants({ variant }), className)} {...props} />
	)
}

export { Badge, badgeVariants }
