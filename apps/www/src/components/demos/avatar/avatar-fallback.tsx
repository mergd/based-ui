import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarWithFallback() {
	return (
		<Avatar size="md">
			<AvatarImage src="/user.jpg" alt="User" />
			<AvatarFallback>BB</AvatarFallback>
		</Avatar>
	)
}
