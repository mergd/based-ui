import { AspectRatio } from "9ui"

export default function AspectRatioDemo() {
	return (
		<AspectRatio ratio={16 / 9} className="bg-primary rounded-lg">
			<div className="flex size-full items-center justify-center">Content</div>
		</AspectRatio>
	)
}
