import Monicon from "@monicon/react"
import { Toggle, ToggleGroup } from "9ui"

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
