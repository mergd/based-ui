import Monicon from "@monicon/react"
import { ToggleGroup } from "9ui/src/components/toggle-group/toggle-group"
import { Toggle } from "9ui/src/components/toggle/toggle"

export default function ToggleGroupMultiple() {
	return (
		<ToggleGroup toggleMultiple>
			<Toggle value="bold">
				<Monicon name="ri:bold" />
			</Toggle>
			<Toggle value="italic">
				<Monicon name="ri:italic" />
			</Toggle>
			<Toggle value="underline">
				<Monicon name="ri:underline" />
			</Toggle>
		</ToggleGroup>
	)
}
