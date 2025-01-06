import { Checkbox, Label } from "9ui"

export default function CheckboxWithLabel() {
	return (
		<div className="flex items-center gap-2">
			<Checkbox id="terms" />
			<Label htmlFor="terms">Accept</Label>
		</div>
	)
}
