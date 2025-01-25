import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`)

export default function ScrollAreaDemo() {
	return (
		<ScrollArea className="h-60 w-full max-w-60 rounded-lg border border-muted p-2">
			<h4 className="text-sm font-medium text-fg">Versions</h4>
			<Separator className="my-2" />
			<div className="mt-2 flex flex-col gap-2 text-sm text-fg">
				{versions.map((version) => (
					<div key={version}>{version}</div>
				))}
			</div>
		</ScrollArea>
	)
}
