"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { merge } from "../../utils"

/********
OTP Input
********/
const InputOTP = React.forwardRef<
	React.ElementRef<typeof OTPInput>,
	React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ containerClassName, ...props }, ref) => (
	<OTPInput
		ref={ref}
		containerClassName={merge("flex items-center gap-x-2", containerClassName)}
		{...props}
	/>
))
InputOTP.displayName = "InputOTP"

/********
OTP Group
********/
const InputOTPGroup = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={merge("flex items-center gap-x-2", className)}
		{...props}
	/>
))
InputOTPGroup.displayName = "InputOTPGroup"

/********
OTP Slot
********/
const InputOTPSlot = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ className, index, ...props }, ref) => {
	const context = React.useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = context.slots[index]

	return (
		<div
			ref={ref}
			className={merge(
				"bordertext-sm border-secondary shadow-elevation-low relative flex h-10 w-8 items-center justify-center rounded-md border transition-all",
				isActive && "outline-accent z-50 outline outline-2 outline-offset-1",
				className
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="animate-blink bg-fg h-4 w-px duration-1000" />
				</div>
			)}
		</div>
	)
})
InputOTPSlot.displayName = "InputOTPSlot"

/********
OTP Separator
********/
const InputOTPSeparator = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
	<div
		ref={ref}
		className={merge("text-fg [&_svg]:size-3", className)}
		role="separator"
		{...props}
	>
		{children || <MinusIcon />}
	</div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
