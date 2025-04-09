import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonSuccess() {
	return (
		<Button variant="success">
			<Check className="mr-2 size-4" />
			Success
		</Button>
	)
}
