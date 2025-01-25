import Monicon from "@monicon/react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleDemo() {
	return (
		<Toggle aria-label="Pin">
			<Monicon name="ri:pushpin-line" />
		</Toggle>
	)
}
