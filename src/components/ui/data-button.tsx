"use client"

import * as React from "react"
import { useCallback, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button, ButtonProps } from "./button" // Import original Button

export interface DataButtonProps extends ButtonProps {
	isLoading?: boolean
	isSuccess?: boolean
}

const DataButton = React.forwardRef<HTMLButtonElement, DataButtonProps>(
	(
		{
			children,
			isLoading,
			isSuccess,
			disabled,
			className,
			style, // Include style prop
			variant,
			...props
		},
		ref
	) => {
		// const internalDisabled = isLoading || disabled || isSuccess // Keep for internal logic if needed elsewhere -> No longer needed
		const buttonDisabled = isLoading || disabled // Determine actual disabled state for the base Button

		// Explicitly type useRef to ensure it's mutable
		const internalButtonRef = useRef<HTMLButtonElement | null>(null)
		const [dimensions, setDimensions] = useState<{
			width: number | null
			height: number | null
		}>({ width: null, height: null })

		// Combine the forwarded ref and the internal ref
		const setRefs = useCallback(
			(node: HTMLButtonElement | null) => {
				// Set our internal ref
				internalButtonRef.current = node
				// Handle the forwarded ref
				if (typeof ref === "function") {
					ref(node)
				} else if (ref) {
					ref.current = node
				}
			},
			[ref]
		)

		// Measure the button on initial render to set fixed dimensions
		useLayoutEffect(() => {
			if (
				internalButtonRef.current &&
				dimensions.width === null &&
				dimensions.height === null
			) {
				// Use getBoundingClientRect for potentially more accurate dimensions
				const rect = internalButtonRef.current.getBoundingClientRect()
				setDimensions({ width: rect.width, height: rect.height })
			}
			// Only run once after initial render with children
		}, [children, dimensions.width, dimensions.height]) // Re-run if children change before initial measurement

		const motionVariants = {
			initial: { y: "100%", opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: "-100%", opacity: 0 },
		}

		const motionProps = {
			initial: "initial",
			animate: "animate",
			exit: "exit",
			variants: motionVariants,
			transition: { type: "spring", duration: 0.3, bounce: 0 },
			className: "absolute inset-0 flex items-center justify-center", // Keep content centered absolutely
		}

		// Base classes - rely on base button's flex for initial layout, state will fix size later
		const buttonClassName = cn(
			"relative overflow-hidden", // Needed for absolute positioning of motion divs
			className
		)

		// Determine the variant, applying success variant if isSuccess is true
		const currentVariant = isSuccess ? "success" : variant

		// Apply fixed dimensions once measured
		const buttonStyle = {
			...style, // Preserve original styles
			...(dimensions.width !== null && { minWidth: dimensions.width }),
			...(dimensions.height !== null && { minHeight: dimensions.height }),
		}

		return (
			<Button
				ref={setRefs} // Use the combined ref setter
				disabled={buttonDisabled}
				variant={currentVariant}
				className={buttonClassName}
				style={buttonStyle} // Apply dynamic styles for fixed dimensions
				aria-live="polite"
				aria-busy={isLoading}
				{...props}
			>
				{/* Render children normally initially for measurement. Content will be replaced by absolute positioned elements later */}
				{/* Add opacity based on state AFTER dimensions are measured */}
				<span
					className="inline-flex items-center justify-center"
					style={{ opacity: dimensions.width === null ? 1 : 0 }}
				>
					{children}
				</span>

				{/* Animated content - only visible when dimensions are set */}
				{dimensions.width !== null && (
					<AnimatePresence mode="popLayout" initial={false}>
						{isLoading ? (
							<motion.div key="loading" {...motionProps}>
								<Loader2 className="size-4 animate-spin" />
							</motion.div>
						) : isSuccess ? (
							<motion.div key="success" {...motionProps}>
								<Check className="size-4" />
							</motion.div>
						) : (
							<motion.div
								key="children"
								// Animate children in/out like other states
								initial={{ opacity: 0 }} // Start transparent
								animate={{ opacity: 1 }} // Fade in
								exit={{ opacity: 0 }} // Fade out
								transition={{ duration: 0.2 }} // Faster fade
								className="absolute inset-0 flex items-center justify-center" // Use absolute positioning
							>
								{children}
							</motion.div>
						)}
					</AnimatePresence>
				)}
			</Button>
		)
	}
)
DataButton.displayName = "DataButton"

export { DataButton }
