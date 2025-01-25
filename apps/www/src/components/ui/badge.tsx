import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { merge } from "@/lib/utils"

/********
Badge Variants
********/
const badgeVariants = cva(
	"inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold",
	{
		variants: {
			variant: {
				solid: "border border-accent-fg bg-accent text-accent-fg",
				secondary: "border border-subtle-fg bg-subtle text-subtle-fg",
				success: "border border-success-fg bg-success text-success-fg",
				danger: "border border-danger-fg bg-danger text-danger-fg",
				warning: "border border-warning-fg bg-warning text-warning-fg",
				info: "border border-info-fg bg-info text-info-fg",
				outline: "border border-fg text-fg",
			},
		},
		defaultVariants: {
			variant: "solid",
		},
	}
)

/********
Badge
********/
export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => (
	<div className={merge(badgeVariants({ variant }), className)} {...props} />
)

export { Badge, badgeVariants }
