import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import { merge } from "../../utils"

/********
Breadcrumbs Root
********/
const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"nav">
>(({ ...props }, ref) => {
	return <nav ref={ref} aria-label="breadcrumb" {...props} />
})

Breadcrumb.displayName = "Breadcrumb"

/********
Breadcrumb List
********/
const BreadcrumbList = React.forwardRef<
	HTMLOListElement,
	React.OlHTMLAttributes<HTMLOListElement>
>(({ className, children, ...props }, ref) => {
	return (
		<ol
			ref={ref}
			className={merge(
				"flex flex-wrap items-center gap-2 break-words text-sm",
				className
			)}
			{...props}
		>
			{children}
		</ol>
	)
})
BreadcrumbList.displayName = "BreadcrumbList"

/********
Breadcrumb Item
********/
export interface BreadcrumbItemProps
	extends React.LiHTMLAttributes<HTMLLIElement> {
	active?: boolean
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
	({ className, active, children, ...props }, ref) => {
		return (
			<li
				ref={ref}
				aria-current={active ? "page" : undefined}
				className={merge(
					"inline-flex items-center gap-2 text-muted-fg [&>a]:transition-colors [&>a]:hover:text-fg",
					active && "text-fg",
					className
				)}
				{...props}
			>
				{children}
			</li>
		)
	}
)
BreadcrumbItem.displayName = "BreadcrumbItem"

/********
Breadcrumb Separator
********/
const BreadcrumbSeparator = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
	return (
		<span
			ref={ref}
			aria-hidden="true"
			role="presentation"
			className={merge("text-muted-fg [&>svg]:size-3", className)}
			{...props}
		>
			{children || <ChevronRightIcon />}
		</span>
	)
})
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator }
