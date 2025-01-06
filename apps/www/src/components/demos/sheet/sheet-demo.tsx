"use client"

import {
	Button,
	Label,
	Sheet,
	SheetBackdrop,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
	Textarea,
} from "9ui"

export default function SheetDemo() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Open Sheet</Button>
			</SheetTrigger>
			<SheetPortal>
				<SheetBackdrop />
				<SheetContent>
					<SheetClose />
					<SheetHeader>
						<SheetTitle>Submit Feedback</SheetTitle>
						<SheetDescription>
							Please share your feedback with us to help improve our service.
						</SheetDescription>
					</SheetHeader>
					<div className="my-4 space-y-2">
						<Label htmlFor="feedback">Your Feedback</Label>
						<Textarea id="feedback" placeholder="Type your feedback here." />
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button size="sm" variant="destructive">
								Close
							</Button>
						</SheetClose>
						<Button size="sm">Submit</Button>
					</SheetFooter>
				</SheetContent>
			</SheetPortal>
		</Sheet>
	)
}
