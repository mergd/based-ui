"use client"

import { useState } from "react"
import { Calendar } from "9ui"
import { DateRange } from "react-day-picker"

export default function CalendarRange() {
	const [range, setRange] = useState<DateRange | undefined>(undefined)

	return (
		<Calendar
			mode="range"
			selected={range}
			onSelect={setRange}
			showOutsideDays
		/>
	)
}
