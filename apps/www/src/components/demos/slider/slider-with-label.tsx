import { Slider, SliderLabel } from "@/components/ui/slider"

export default function SliderWithLabel() {
	return (
		<Slider defaultValue={50}>
			<div className="flex justify-between">
				<span className="text-xs font-medium text-muted-foreground">
					Opacity
				</span>
				<SliderLabel />
			</div>
		</Slider>
	)
}
