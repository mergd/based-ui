import { Monicon } from "@monicon/react"

import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
	return (
		<Badge variant="success" className="gap-1">
			<Monicon name="ri:trophy-fill" size={14} />
			Top 10
		</Badge>
	)
}
