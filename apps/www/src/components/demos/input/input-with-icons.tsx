import { useState } from "react"
import Monicon from "@monicon/react"
import { Input, InputIcon } from "9ui"

export default function InputWithIcons() {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	const passwordType = isPasswordVisible ? "text" : "password"
	const eyeIcon = isPasswordVisible ? "ri:eye-fill" : "ri:eye-close-fill"

	return (
		<Input placeholder="Password" className="w-80" type={passwordType}>
			<InputIcon side="leading">
				<Monicon name="ri:lock-password-fill" />
			</InputIcon>
			<InputIcon
				side="trailing"
				className="cursor-pointer transition-colors duration-200 hover:[&>svg]:text-fg"
				onClick={togglePasswordVisibility}
			>
				<Monicon name={eyeIcon} />
			</InputIcon>
		</Input>
	)
}
