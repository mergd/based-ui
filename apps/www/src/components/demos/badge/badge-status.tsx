import { Badge } from "9ui"

export default function BadgeStatus() {
	return (
		<div className="flex items-center justify-center gap-2">
			<Badge variant="success">Active</Badge>
			<span className="text-secondary-fg text-xs">Ready to use</span>
		</div>
	)
}
