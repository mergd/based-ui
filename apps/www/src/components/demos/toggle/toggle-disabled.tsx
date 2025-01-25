import Monicon from "@monicon/react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleDisabled() {
	return (
		<Toggle aria-label="Pin" disabled>
			<Monicon name="ri:pushpin-line" />
		</Toggle>
	)
}
