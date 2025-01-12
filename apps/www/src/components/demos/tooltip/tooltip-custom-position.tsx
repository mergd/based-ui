import { Tooltip, TooltipContent, TooltipTrigger } from "9ui"

const positions = ["top", "right", "bottom", "left"] as const

export default function TooltipCustomPosition() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{positions.map((position) => (
				<Tooltip key={position}>
					<TooltipTrigger className="rounded-md border border-muted bg-bg px-2 py-1.5 text-sm text-fg">
						{position}
					</TooltipTrigger>
					<TooltipContent
						className="max-w-56"
						positionerProps={{ side: position }}
					>
						<span>This tooltip is positioned at the {position} side.</span>
					</TooltipContent>
				</Tooltip>
			))}
		</div>
	)
}
