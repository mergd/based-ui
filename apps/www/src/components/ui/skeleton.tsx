import * as React from "react"

import { merge } from "@/lib/utils"

/********
Skeleton
********/
const Skeleton = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={merge("animate-pulse rounded-md bg-muted", className)}
		{...props}
	/>
)
Skeleton.displayName = "Skeleton"

export { Skeleton }
