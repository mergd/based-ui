import { Badge } from "@/components/ui/badge"

export default function BadgeStatus() {
	return (
		<div className="flex items-center justify-center gap-2">
			<Badge variant="success">Active</Badge>
			<span className="text-xs text-muted-fg">Ready to use</span>
		</div>
	)
}
