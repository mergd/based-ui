import * as React from "react"

import { cn } from "@/lib/utils"

/********
Card
********/
const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"rounded-lg border border-border bg-background shadow-elevation-low",
			className
		)}
		{...props}
	/>
))
Card.displayName = "Card"

/********
Card Header
********/
const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("relative flex flex-col gap-y-1 p-6", className)}
		{...props}
	/>
))
CardHeader.displayName = "CardHeader"

/********
Card Title
********/
const CardTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn("text-base font-semibold", className)}
		{...props}
	/>
))
CardTitle.displayName = "CardTitle"

/********
Card Description
********/
const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm text-muted-fg", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

/********
Card Content
********/
const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("px-6 pb-6 text-sm text-foreground", className)}
		{...props}
	/>
))
CardContent.displayName = "CardContent"

/********
Card Footer
********/
const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center gap-1 px-6 pb-6", className)}
		{...props}
	/>
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
