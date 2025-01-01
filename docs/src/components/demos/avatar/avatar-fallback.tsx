import { Avatar, AvatarFallback, AvatarImage } from "9ui"

export default function AvatarWithFallback() {
	return (
		<Avatar size="md">
			<AvatarImage src="/user.jpg" alt="User" />
			<AvatarFallback>BB</AvatarFallback>
		</Avatar>
	)
}
