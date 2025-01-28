import { XIcon } from "@/components/icons"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipDemo() {
	return (
		<Tooltip>
			<TooltipTrigger className="rounded-md border p-2">
				<XIcon />
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
