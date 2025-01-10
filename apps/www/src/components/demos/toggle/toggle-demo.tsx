import Monicon from "@monicon/react"
import { Toggle } from "9ui"

export default function ToggleDemo() {
	return (
		<Toggle aria-label="Pin">
			<Monicon name="ri:pushpin-line" />
		</Toggle>
	)
}
