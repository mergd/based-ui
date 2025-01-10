import { ScrollArea, Separator } from "9ui"

const versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`)

export default function ScrollAreaDemo() {
	return (
		<ScrollArea className="h-60 max-w-60 w-full border border-muted rounded-lg p-2">
			<h4 className="text-sm font-medium text-fg">Versions</h4>
			<Separator className="my-2" />
			<div className="flex flex-col gap-2 text-sm mt-2 text-fg">
				{versions.map((version) => (
					<div key={version}>{version}</div>
				))}
			</div>
		</ScrollArea>
	)
}
