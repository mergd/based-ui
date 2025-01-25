import * as React from "react"

import { merge } from "@/lib/utils"

/********
Aspect Ratio
********/
export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
	ratio?: number
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
	({ children, className, ratio = 1, style, ...props }, ref) => (
		<div
			ref={ref}
			style={{
				...style,
				paddingBottom: `${(1 / ratio) * 100}%`,
			}}
			className={merge("relative w-full", className)}
			{...props}
		>
			<div className="absolute inset-0 size-full">{children}</div>
		</div>
	)
)
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
