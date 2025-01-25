import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogNested() {
	return (
		<Dialog>
			<DialogTrigger
				render={(props) => <Button {...props}>View Details</Button>}
			/>
			<DialogContent>
				<DialogTitle>Profile</DialogTitle>
				<DialogDescription>
					View and edit your profile details.
				</DialogDescription>
				<div>
					<div className="flex items-center gap-4">
						<Avatar>
							<AvatarImage src="/user.png" />
							<AvatarFallback>BB</AvatarFallback>
						</Avatar>
						<span className="text-fg">Bora Baloglu</span>
					</div>
				</div>
				<DialogFooter>
					<Dialog>
						<DialogTrigger
							render={(props) => (
								<Button {...props} variant="outline" size="sm">
									Edit
								</Button>
							)}
						/>
						<DialogContent>
							<DialogTitle>Edit</DialogTitle>
							<DialogDescription>
								Edit the details of the item
							</DialogDescription>
							<DialogFooter>
								<DialogClose
									render={(props) => (
										<Button {...props} size="sm" variant="ghost">
											Cancel
										</Button>
									)}
								/>
								<Button size="sm">Save</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
