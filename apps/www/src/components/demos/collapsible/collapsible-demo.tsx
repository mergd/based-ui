import { useState } from "react"
import Monicon from "@monicon/react"

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { merge } from "@/lib/utils"

export default function CollapsibleDemo() {
	const [open, setOpen] = useState(false)

	return (
		<Collapsible className="mx-auto w-40" open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger className="flex w-full items-center justify-between px-1.5 py-1">
				<span className="text-sm font-medium">Components</span>
				<div
					className={merge("transition-all duration-200", open && "rotate-90")}
				>
					<Monicon name="ri:arrow-right-s-line" size={16} />
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent>
				<ol className="mt-2 space-y-1">
					<li className="rounded border border-muted bg-subtle px-2 py-1">
						Button
					</li>
					<li className="rounded border border-muted bg-subtle px-2 py-1">
						Badge
					</li>
					<li className="rounded border border-muted bg-subtle px-2 py-1">
						Breadcrumbs
					</li>
				</ol>
			</CollapsibleContent>
		</Collapsible>
	)
}
