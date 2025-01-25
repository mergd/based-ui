import { Monicon } from "@monicon/react"

import { Button } from "@/components/ui/button"

export default function ButtonCustom() {
	return (
		<Button
			className="rounded-full border border-muted bg-transparent text-subtle-fg hover:border-fg hover:bg-transparent hover:text-fg"
			size="icon-sm"
		>
			<Monicon name="ri:add-fill" />
		</Button>
	)
}
