import * as React from "react"
import { Input as BaseInput } from "@base-ui-components/react/input"

import { merge } from "@/src/utils"

/********
Input
********/
interface InputProps extends React.ComponentProps<typeof BaseInput> {
	children?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ children, className, ...props }, ref) => {
		const hasLeadingIcon = React.Children.toArray(children).some(
			(child) =>
				React.isValidElement(child) &&
				child.type === InputIcon &&
				child.props.side === "leading"
		)
		const hasTrailingIcon = React.Children.toArray(children).some(
			(child) =>
				React.isValidElement(child) &&
				child.type === InputIcon &&
				child.props.side === "trailing"
		)

		return (
			<div className="relative">
				{children}
				<BaseInput
					{...props}
					ref={ref}
					className={merge(
						"h-10 rounded-md border border-primary bg-bg p-4 text-sm text-fg placeholder:text-primary-fg focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent",
						props["aria-invalid"] &&
							"border-danger-fg bg-danger text-danger-fg focus:outline-danger",
						hasLeadingIcon && "pl-10",
						hasTrailingIcon && "pr-10",
						className
					)}
				/>
			</div>
		)
	}
)

/********
Input Icons
********/
interface InputIconProps extends React.ComponentPropsWithoutRef<"div"> {
	side: "leading" | "trailing"
	children?: React.ReactNode
}

const InputIcon = React.forwardRef<HTMLDivElement, InputIconProps>(
	({ children, className, side, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={merge(
					"absolute top-1/2 -translate-y-1/2 text-primary-fg [&_svg]:size-4",
					side === "leading" && "left-3",
					side === "trailing" && "right-3",
					className
				)}
				{...props}
			>
				{children}
			</div>
		)
	}
)

export { Input, InputIcon }
