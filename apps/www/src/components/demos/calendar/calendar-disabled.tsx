"use client"

import { useState } from "react"
import { Calendar } from "9ui"

export default function CalendarDisabled() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

	return (
		<Calendar
			mode="single"
			disabled={(date) => date < new Date()}
			selected={selectedDate}
			onSelect={setSelectedDate}
		/>
	)
}
