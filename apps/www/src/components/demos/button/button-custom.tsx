import { Monicon } from "@monicon/react"
import { Button } from "9ui"

export default function ButtonCustom() {
	return (
		<Button
			className="border-primary text-primary-fg hover:border-fg hover:text-fg rounded-full border bg-transparent hover:bg-transparent"
			size="icon-sm"
		>
			<Monicon name="ri:add-fill" />
		</Button>
	)
}
