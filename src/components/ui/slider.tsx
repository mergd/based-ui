import * as React from "react"
import { Slider as BaseSlider } from "@base-ui-components/react/slider"

import { cn } from "@/lib/utils"

const Slider = ({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof BaseSlider.Root>) => {
	const isRange =
		(Array.isArray(props.defaultValue) && props.defaultValue.length > 1) ||
		(Array.isArray(props.value) && props.value.length > 1)

	return (
		<BaseSlider.Root
			className={cn(
				"relative touch-none select-none",
				props.disabled && "pointer-events-none opacity-50",
				className
			)}
			{...props}
		>
			<BaseSlider.Control className="flex w-56 touch-none select-none items-center py-3">
				<BaseSlider.Track className="relative h-1 w-full select-none rounded bg-secondary shadow-[inset_0_0_0_1px] shadow-border">
					<BaseSlider.Indicator className="select-none rounded bg-primary/80" />
					<BaseSlider.Thumb
						className="size-4 select-none rounded-full bg-primary outline outline-1 outline-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
						inputId="1"
					/>
					{isRange && (
						<BaseSlider.Thumb
							className="size-4 select-none rounded-full bg-primary outline outline-1 outline-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
							inputId="2"
						/>
					)}
				</BaseSlider.Track>
			</BaseSlider.Control>
			{children}
		</BaseSlider.Root>
	)
}
Slider.displayName = "Slider"

const SliderValue = React.forwardRef<
	HTMLOutputElement,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Value>
>(({ className, ...props }, ref) => (
	<BaseSlider.Value
		ref={ref}
		className={cn(
			"mt-3 flex justify-end text-xs font-medium text-foreground",
			className
		)}
		{...props}
	/>
))
SliderValue.displayName = "SliderValue"

export { Slider, SliderValue }
