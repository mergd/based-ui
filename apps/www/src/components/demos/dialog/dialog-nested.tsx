import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "9ui"

export default function DialogNested() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">View Details</Button>
			</DialogTrigger>
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
						<DialogTrigger asChild>
							<Button variant="outline" size="sm">
								Edit
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogTitle>Edit</DialogTitle>
							<DialogDescription>
								Edit the details of the item
							</DialogDescription>
							<DialogFooter>
								<DialogClose asChild>
									<Button size="sm" variant="ghost">
										Cancel
									</Button>
								</DialogClose>
								<Button size="sm">Save</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
