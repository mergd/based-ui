import * as React from "react"
import { Input as BaseInput } from "@base-ui-components/react/input"

import { merge } from "../../utils"

/********
Input
********/
interface InputProps extends React.ComponentProps<typeof BaseInput> {
	children?: React.ReactNode
	inputWrapperClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ children, className, inputWrapperClassName, ...props }, ref) => {
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
			<div className={merge("relative", inputWrapperClassName)}>
				{children}
				<BaseInput
					ref={ref}
					className={merge(
						"h-9 w-full rounded border border-primary bg-bg p-4 text-sm text-fg placeholder:text-primary-fg focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-50",
						props["aria-invalid"] &&
							"border-danger-fg bg-danger text-danger-fg placeholder:text-danger-fg focus:outline-danger",
						hasLeadingIcon && "pl-10",
						hasTrailingIcon && "pr-10",
						className
					)}
					{...props}
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
