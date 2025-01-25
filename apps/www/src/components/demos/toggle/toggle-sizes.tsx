import Monicon from "@monicon/react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleSizes() {
	return (
		<div className="flex items-center gap-4">
			<Toggle aria-label="Pin" size="sm">
				<Monicon name="ri:pushpin-line" />
			</Toggle>
			<Toggle aria-label="Pin" size="md">
				<Monicon name="ri:pushpin-line" />
			</Toggle>
			<Toggle aria-label="Pin" size="lg">
				<Monicon name="ri:pushpin-line" />
			</Toggle>
		</div>
	)
}
