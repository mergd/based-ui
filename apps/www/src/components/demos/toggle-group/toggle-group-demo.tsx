import Monicon from "@monicon/react"
import { ToggleGroup } from "9ui/src/components/toggle-group/toggle-group"
import { Toggle } from "9ui/src/components/toggle/toggle"

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
