import { Button, toast } from "9ui"

export default function ToastDemo() {
	return (
		<Button
			onClick={() =>
				toast("Your request has been sent", {
					description: "We'll get back to you as soon as possible",
				})
			}
		>
			Show Toast
		</Button>
	)
}
