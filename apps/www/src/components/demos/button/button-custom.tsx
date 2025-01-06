import { Monicon } from "@monicon/react"
import { Button } from "9ui"

export default function ButtonCustom() {
	return (
		<Button
			className="rounded-full border border-primary bg-transparent text-primary-fg hover:border-fg hover:bg-transparent hover:text-fg"
			size="icon-sm"
		>
			<Monicon name="ri:add-fill" />
		</Button>
	)
}
