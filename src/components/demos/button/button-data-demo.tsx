"use client"

import * as React from "react"
import { Mail } from "lucide-react"

import { DataButton } from "@/components/ui/data-button"

export default function ButtonDataDemo() {
	const [isLoading, setIsLoading] = React.useState(false)
	const [isSuccess, setIsSuccess] = React.useState(false)

	const handleClick = async () => {
		setIsLoading(true)
		// Simulate an async operation
		await new Promise((resolve) => setTimeout(resolve, 2000))
		setIsLoading(false)
		setIsSuccess(true)
		// Reset after a delay
		await new Promise((resolve) => setTimeout(resolve, 1500))
		setIsSuccess(false)
	}

	return (
		<div className="flex flex-col items-center min-w-lg gap-4">
			<DataButton
				onClick={handleClick}
				isLoading={isLoading}
				isSuccess={isSuccess}
			>
				<Mail className="mr-2 size-4" />
				{isLoading ? "Sending..." : isSuccess ? "Sent!" : "Send Email"}
			</DataButton>

			<p className="text-sm text-muted-foreground">
				Click the button to see the loading and success states.
			</p>
		</div>
	)
}
