import { Avatar, AvatarFallback, AvatarImage } from "9ui"

export default function AvatarSizes() {
	return (
		<div className="flex flex-row items-center gap-4">
			<Avatar size="sm">
				<AvatarImage src="/user.png" alt="User" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar size="md">
				<AvatarImage src="/user.png" alt="User" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage src="/user.png" alt="User" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
		</div>
	)
}
