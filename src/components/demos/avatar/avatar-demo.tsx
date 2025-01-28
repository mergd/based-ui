import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarDemo() {
	return (
		<Avatar size="md">
			<AvatarImage src="/user.png" alt="User" />
			<AvatarFallback>BB</AvatarFallback>
		</Avatar>
	)
}
