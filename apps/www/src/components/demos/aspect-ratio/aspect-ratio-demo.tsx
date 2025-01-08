import { AspectRatio } from "9ui"

export default function AspectRatioDemo() {
	return (
		<AspectRatio ratio={16 / 9} className="rounded-lg bg-subtle">
			<div className="flex size-full items-center justify-center text-fg font-medium">
				Content
			</div>
		</AspectRatio>
	)
}
