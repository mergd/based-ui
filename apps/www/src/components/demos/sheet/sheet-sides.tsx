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

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

export default function SheetSides() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{SHEET_SIDES.map((side) => (
				<Sheet key={side}>
					<SheetTrigger asChild>
						<Button className="w-full">{side}</Button>
					</SheetTrigger>
					<SheetPortal>
						<SheetBackdrop />
						<SheetContent side={side}>
							<SheetClose />
							<SheetHeader>
								<SheetTitle>Submit Feedback</SheetTitle>
								<SheetDescription>
									Please share your feedback with us to help improve our
									service.
								</SheetDescription>
							</SheetHeader>
							<div className="my-4 space-y-2">
								<Label htmlFor="feedback">Your Feedback</Label>
								<Textarea
									id="feedback"
									placeholder="Type your feedback here."
								/>
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
			))}
		</div>
	)
}
