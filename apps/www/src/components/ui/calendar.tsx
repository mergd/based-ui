"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"

/********
Calendar
********/
const Calendar = (props: React.ComponentProps<typeof DayPicker>) => (
	<DayPicker
		className={cn("rounded-md border border-border p-3", props.className)}
		classNames={{
			root: "relative select-none",
			month: "text-center m-0 space-y-1",
			month_caption: "flex justify-center items-center h-8 font-medium text-sm",
			today: "bg-muted",
			week: "flex justify-center py-0.5",
			day: "size-8 flex items-center justify-center rounded-md [&:has(>button)]:hover:bg-muted text-sm font-normal",
			day_button:
				"size-8 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent rounded-md",
			weekdays: "flex justify-center",
			weekday: "size-8 text-sm text-muted-fg font-normal",
			outside: "text-subtle-fg",
			selected: "!bg-accent !text-accent-foreground hover:!bg-accent",
			range_middle: "rounded-none last:rounded-r-md first:rounded-l-md",
			range_start:
				props.mode === "range" &&
				props.selected?.from?.getTime() !== props.selected?.to?.getTime()
					? "rounded-r-none last:rounded-r-md"
					: "",
			range_end:
				props.mode === "range" &&
				props.selected?.from?.getTime() !== props.selected?.to?.getTime()
					? "rounded-l-none first:rounded-l-md"
					: "",
			disabled: "pointer-events-none opacity-30",
			hidden: "pointer-events-none",
		}}
		components={{
			NextMonthButton: (props) => (
				<button
					{...props}
					className="absolute right-3 flex size-8 items-center justify-center opacity-50 transition-opacity duration-200 hover:opacity-100"
				>
					<ChevronRightIcon className="size-4" />
				</button>
			),
			PreviousMonthButton: (props) => (
				<button
					{...props}
					className="absolute left-3 flex size-8 items-center justify-center opacity-50 transition-opacity duration-200 hover:opacity-100"
				>
					<ChevronLeftIcon className="size-4" />
				</button>
			),
		}}
		{...props}
	/>
)
Calendar.displayName = "Calendar"

export { Calendar }
