import { Monicon } from "@monicon/react"

import { Badge } from "@/components/ui/badge"

export default function BadgeWithIcon() {
	return (
		<Badge variant="info">
			<Monicon name="ri:star-fill" size={14} />
			Featured
		</Badge>
	)
}
