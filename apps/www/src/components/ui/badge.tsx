import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/********
Badge Variants
********/
const badgeVariants = cva(
	"inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold gap-2",
	{
		variants: {
			variant: {
				default: "border border-primary-fg bg-primary text-primary-foreground",
				secondary:
					"border border-muted-foreground bg-muted text-muted-foreground",
				success:
					"border border-green-800 bg-green-200 text-green-800 dark:border-green-600 dark:bg-green-800 dark:text-green-100",
				danger:
					"border border-destructive-foreground bg-destructive text-destructive-foreground",
				warning:
					"border border-yellow-800 bg-yellow-200 text-yellow-800 dark:border-yellow-600 dark:bg-yellow-800 dark:text-yellow-100",
				info: "border border-blue-800 bg-blue-200 text-blue-800 dark:border-blue-600 dark:bg-blue-800 dark:text-blue-100",
				outline: "border border-border text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
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
	<div className={cn(badgeVariants({ variant }), className)} {...props} />
)

export { Badge, badgeVariants }
