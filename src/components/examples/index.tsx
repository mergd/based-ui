"use client"

import { useMemo, useState } from "react"

import { AIChatInterface } from "@/components/examples/ai-chat"
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
	},
	{
		label: "Calendar",
		value: "calendar",
	},
	{
		label: "Notes",
		value: "notes",
	},
	{
		label: "Tasks",
		value: "tasks",
	},
	{
		label: "Settings",
		value: "settings",
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
			<div className="flex gap-4 overflow-x-auto py-4">
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
			<div className="flex-1">{selectedTabContent}</div>
		</div>
	)
}

export default Examples
