"use client"

import { useState } from "react"
import { Calendar } from "9ui"

export default function CalendarSingle() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

	return (
		<Calendar
			mode="single"
			selected={selectedDate}
			onSelect={setSelectedDate}
			showOutsideDays
		/>
	)
}
