import Monicon from "@monicon/react"
import { Toggle, ToggleGroup } from "9ui"

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
