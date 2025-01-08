"use client"

import { useState } from "react"
import { Calendar } from "9ui"

export default function CalendarMultiple() {
	const [selectedDates, setSelectedDates] = useState<Date[] | undefined>(
		undefined
	)

	return (
		<Calendar
			mode="multiple"
			selected={selectedDates}
			onSelect={setSelectedDates}
			showOutsideDays
		/>
	)
}
