"use client"

import { useState } from "react"
import Monicon from "@monicon/react"
import { Toggle } from "9ui"

export default function ToggleCustomControl() {
	const [isPinned, setIsPinned] = useState(false)

	return (
		<Toggle aria-label="Pin" pressed={isPinned} onPressedChange={setIsPinned}>
			<Monicon name={isPinned ? "ri:unpin-line" : "ri:pushpin-line"} />
		</Toggle>
	)
}
