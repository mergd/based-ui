import Monicon from "@monicon/react"

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipDemo() {
	return (
		<Tooltip>
			<TooltipTrigger className="rounded-md border border-muted p-2">
				<Monicon name="ri:twitter-x-fill" />
			</TooltipTrigger>
			<TooltipContent>
				<span>
					Follow me{" "}
					<a
						className="font-medium"
						href="https://x.com/borabalogluu"
						target="_blank"
					>
						@borabalogluu
					</a>
				</span>
			</TooltipContent>
		</Tooltip>
	)
}
