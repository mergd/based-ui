import { ScrollArea, Separator } from "9ui"

const versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`).join(
	", "
)

export default function ScrollAreaHorizontal() {
	return (
		<ScrollArea
			className="h-fit max-w-60 w-full border border-muted rounded-lg p-2"
			orientation="horizontal"
		>
			<div className="flex flex-col gap-2 text-sm mt-2 text-fg pb-2 text-nowrap">
				{versions}
			</div>
		</ScrollArea>
	)
}
