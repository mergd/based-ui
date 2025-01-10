import { Slider, SliderLabel } from "9ui"

export default function SliderWithLabel() {
	return (
		<Slider defaultValue={50}>
			<div className="flex justify-between">
				<span className="text-xs font-medium text-muted-fg">Opacity</span>
				<SliderLabel />
			</div>
		</Slider>
	)
}
