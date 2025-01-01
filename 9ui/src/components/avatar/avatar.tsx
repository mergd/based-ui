"use client"

import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import {
	AvatarContext,
	AvatarImageStatus,
	useAvatarContext,
} from "@/src/components/avatar/avatar.context"
import { merge } from "@/src/utils"

const avatarVariants = cva(
	"relative flex shrink-0 overflow-hidden rounded-full",
	{
		variants: {
			size: {
				sm: "size-8 text-sm",
				md: "size-10 text-base",
				lg: "size-12 text-lg",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
)

export interface AvatarProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof avatarVariants> {}

/********
Avatar Root
********/
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	({ className, size, ...props }, ref) => {
		const [imageStatus, setImageStatus] =
			React.useState<AvatarImageStatus>("loading")

		return (
			<AvatarContext.Provider value={{ imageStatus, setImageStatus }}>
				<div
					ref={ref}
					className={merge(avatarVariants({ size }), className)}
					{...props}
				/>
			</AvatarContext.Provider>
		)
	}
)
Avatar.displayName = "Avatar"

/********
Avatar Image
********/
const AvatarImage = React.forwardRef<
	HTMLImageElement,
	React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, alt = "", onError, onLoad, ...props }, ref) => {
	const { imageStatus, setImageStatus } = useAvatarContext()

	if (imageStatus === "error") {
		return null
	}

	return (
		<img
			ref={ref}
			className={merge(
				"aspect-square size-full object-cover",
				imageStatus !== "loaded" && "hidden",
				className
			)}
			alt={alt}
			onLoad={(e) => {
				setImageStatus("loaded")
				onLoad?.(e)
			}}
			onError={(e) => {
				setImageStatus("error")
				onError?.(e)
			}}
			{...props}
		/>
	)
})
AvatarImage.displayName = "AvatarImage"

/********
Avatar Fallback
********/
const AvatarFallback = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
	const { imageStatus } = useAvatarContext()

	if (imageStatus !== "error") {
		return null
	}

	return (
		<span
			ref={ref}
			className={merge(
				"flex size-full items-center justify-center rounded-full bg-primary text-primary-fg",
				className
			)}
			{...props}
		>
			{children}
		</span>
	)
})
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
