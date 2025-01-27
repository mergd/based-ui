import Monicon from "@monicon/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo() {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.href)
	}

	return (
		<Popover>
			<PopoverTrigger className="cursor-pointer rounded-md border border-border p-2 transition-colors hover:bg-subtle">
				<Monicon name="ri:share-box-fill" />
			</PopoverTrigger>
			<PopoverContent className="w-[calc(100vw-4rem)] sm:w-[500px]">
				<div className="flex flex-col space-y-3.5">
					<div className="flex flex-col space-y-1">
						<PopoverTitle>Share</PopoverTitle>
						<PopoverDescription>Share this component.</PopoverDescription>
					</div>
					<div className="flex w-full gap-2">
						<Input
							inputWrapperClassName="w-full"
							defaultValue={window.location.href}
							autoFocus={false}
							readOnly
						/>
						<Button
							className="shrink-0"
							size="icon-md"
							onClick={copyToClipboard}
						>
							<Monicon name="ri:file-copy-fill" />
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
