import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDemo() {
	return (
		<AspectRatio ratio={16 / 9} className="rounded-lg bg-secondary">
			<div className="flex size-full items-center justify-center font-medium text-foreground">
				Content
			</div>
		</AspectRatio>
	)
}
