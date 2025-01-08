import { Badge } from "9ui"

export default function BadgeCustom() {
	return (
		<div className="flex items-center justify-center gap-2 text-xs text-muted-fg">
			<Badge variant="danger" className="gap-x-1 p-0.5 pr-2">
				<span className="size-4 rounded-full bg-danger-fg" />
				Offline
			</Badge>
		</div>
	)
}
