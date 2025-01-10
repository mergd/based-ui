import Monicon from "@monicon/react"
import { Toggle } from "9ui"

export default function ToggleDisabled() {
	return (
		<Toggle aria-label="Pin" disabled>
			<Monicon name="ri:pushpin-line" />
		</Toggle>
	)
}
