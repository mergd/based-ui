import { Badge } from "9ui"

export default function BadgeCustom() {
	return (
		<div className="text-secondary-fg flex items-center justify-center gap-2 text-xs">
			<Badge variant="danger" className="gap-x-1 p-0.5 pr-2">
				<span className="bg-danger-fg size-4 rounded-full" />
				Offline
			</Badge>
		</div>
	)
}
