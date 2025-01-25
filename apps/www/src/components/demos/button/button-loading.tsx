import { Monicon } from "@monicon/react"

import { Button } from "@/components/ui/button"

export default function ButtonLoading() {
	return (
		<Button className="gap-2" disabled>
			<div className="animate-spin">
				<Monicon name="ri:loader-5-fill" />
			</div>
			Loading
		</Button>
	)
}
