import * as React from "react"

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
	children?: React.ReactNode
}

const Slot = React.forwardRef<HTMLElement, SlotProps>((props, forwardedRef) => {
	const { children, ...slotProps } = props

	// Ensure only one child is passed
	const childrenArray = React.Children.toArray(children)
	if (childrenArray.length !== 1) {
		throw new Error("Slot component must have exactly one child")
	}

	const child = childrenArray[0]
	if (!React.isValidElement(child)) {
		throw new Error("Slot component child must be a valid React element")
	}

	// Merge props and handle className specially
	const combinedProps = {
		...slotProps,
		...child.props,
		className: [slotProps.className, child.props.className]
			.filter(Boolean)
			.join(" "),
	}

	// Handle event handlers by composing them
	Object.keys(combinedProps).forEach((key) => {
		if (
			key.startsWith("on") &&
			slotProps[key as keyof typeof slotProps] &&
			child.props[key as keyof typeof child.props]
		) {
			combinedProps[key as keyof typeof combinedProps] = (
				...args: unknown[]
			) => {
				child.props[key as keyof typeof child.props]?.(...args)
				slotProps[key as keyof typeof slotProps]?.(...args)
			}
		}
	})

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const childRef = (child as any).ref
	const combinedRef = childRef
		? (node: HTMLElement) => {
				if (typeof forwardedRef === "function") forwardedRef(node)
				if (typeof childRef === "function") childRef(node)
				if (typeof forwardedRef === "object" && forwardedRef)
					forwardedRef.current = node
				if (typeof childRef === "object" && childRef) childRef.current = node
			}
		: forwardedRef

	return React.cloneElement(child, {
		...combinedProps,
		ref: combinedRef,
	})
})

Slot.displayName = "Slot"

export { Slot }
export type { SlotProps }
