import * as React from "react"
import { Slider as BaseSlider } from "@base-ui-components/react/slider"

import { cn } from "@/lib/utils"

/********
Slider
********/
const Slider = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Root>
>(({ className, children, ...props }, ref) => {
	const isRange =
		(Array.isArray(props.defaultValue) && props.defaultValue.length > 1) ||
		(Array.isArray(props.value) && props.value.length > 1)

	return (
		<BaseSlider.Root
			ref={ref}
			className={cn(
				"relative touch-none select-none",
				props.disabled && "pointer-events-none opacity-50",
				className
			)}
			{...props}
		>
			<BaseSlider.Control className="flex w-56 items-center py-3">
				<BaseSlider.Track className="h-1 w-full rounded bg-muted">
					<BaseSlider.Indicator className="relative rounded bg-primary" />
					<BaseSlider.Thumb
						className="size-4 rounded-full bg-primary shadow-sm dark:shadow-none"
						inputId="1"
					/>
					{isRange && (
						<BaseSlider.Thumb
							className="size-4 rounded-full bg-primary shadow-sm dark:shadow-none"
							inputId="2"
						/>
					)}
				</BaseSlider.Track>
			</BaseSlider.Control>
			{children}
		</BaseSlider.Root>
	)
})
Slider.displayName = "Slider"

/********
Slider Label
********/
const SliderLabel = React.forwardRef<
	HTMLOutputElement,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Value>
>(({ className, ...props }, ref) => (
	<BaseSlider.Value
		ref={ref}
		className={cn(
			"flex justify-end text-xs font-medium text-foreground",
			className
		)}
		{...props}
	/>
))
SliderLabel.displayName = "SliderLabel"

export { Slider, SliderLabel }
