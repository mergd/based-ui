import Monicon from "@monicon/react"

import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"

export default function ToggleGroupDemo() {
	return (
		<ToggleGroup>
			<Toggle value="left">
				<Monicon name="ri:align-left" />
			</Toggle>
			<Toggle value="center">
				<Monicon name="ri:align-center" />
			</Toggle>
			<Toggle value="right">
				<Monicon name="ri:align-right" />
			</Toggle>
		</ToggleGroup>
	)
}
