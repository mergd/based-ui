"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
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
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

export default function SheetSides() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{SHEET_SIDES.map((side) => (
				<Sheet key={side}>
					<SheetTrigger
						render={(props) => (
							<Button {...props} className="w-full">
								{side}
							</Button>
						)}
					/>
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
								<SheetClose
									render={(props) => (
										<Button {...props} size="sm" variant="ghost">
											Close
										</Button>
									)}
								/>
								<Button size="sm">Submit</Button>
							</SheetFooter>
						</SheetContent>
					</SheetPortal>
				</Sheet>
			))}
		</div>
	)
}
