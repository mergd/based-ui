import { Avatar, AvatarFallback, AvatarImage } from "9ui"

export default function AvatarDemo() {
	return (
		<Avatar size="md">
			<AvatarImage src="/user.png" alt="User" />
			<AvatarFallback>BB</AvatarFallback>
		</Avatar>
	)
}
