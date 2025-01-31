"use client"

import { useMemo, useState } from "react"

import { AIChatInterface } from "@/components/examples/ai-chat"
import { CalendarInterface } from "@/components/examples/calendar"
import { MailInterface } from "@/components/examples/mail"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

const tabs = [
	{
		label: "AI Chat",
		value: "ai-chat",
		content: <AIChatInterface />,
	},
	{
		label: "Mail",
		value: "mail",
		content: <MailInterface />,
	},
	{
		label: "Calendar",
		value: "calendar",
		content: <CalendarInterface />,
	},
]

const Examples = () => {
	const [selectedTab, setSelectedTab] = useState("ai-chat")

	const selectedTabContent = useMemo(() => {
		return tabs.find((tab) => tab.value === selectedTab)?.content
	}, [selectedTab])

	return (
		<div className="flex flex-col">
			<h2 className="text-2xl font-semibold">Examples</h2>
			<div className="flex gap-4 overflow-x-auto py-3">
				{tabs.map((tab) => (
					<Button
						key={tab.value}
						variant="ghost"
						onClick={() => setSelectedTab(tab.value)}
						className={cn(
							"rounded-full font-normal text-muted-foreground hover:bg-transparent hover:text-foreground",
							selectedTab === tab.value &&
								"bg-muted text-foreground hover:bg-muted"
						)}
					>
						{tab.label}
					</Button>
				))}
			</div>
			<div className="mt-1 flex-1">{selectedTabContent}</div>
		</div>
	)
}

export default Examples
