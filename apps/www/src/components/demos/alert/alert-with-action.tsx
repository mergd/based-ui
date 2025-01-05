import Monicon from "@monicon/react"
import {
	Alert,
	AlertAction,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Button,
} from "9ui"

export default function AlertWithAction() {
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
			<AlertAction>
				<Button size="sm" variant="outline">
					Try Again
				</Button>
			</AlertAction>
		</Alert>
	)
}
