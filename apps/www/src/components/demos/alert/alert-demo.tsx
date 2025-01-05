import { Monicon } from "@monicon/react"
import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "9ui"

export default function AlertDemo() {
	return (
		<Alert>
			<AlertIcon>
				<Monicon name="ri:wifi-off-fill" />
			</AlertIcon>
			<AlertContent>
				<AlertTitle>No Internet Connection</AlertTitle>
				<AlertDescription>
					Please check your internet connection and try again.
				</AlertDescription>
			</AlertContent>
		</Alert>
	)
}
