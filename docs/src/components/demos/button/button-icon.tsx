import { Monicon } from "@monicon/react"
import { Button } from "9ui"

export default function ButtonIcon() {
	return (
		<Button size="icon-sm" variant="outline">
			<Monicon name="ri:edit-fill" />
		</Button>
	)
}
