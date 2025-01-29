import * as React from "react"

import ComponentLinks from "@/components/component-links"
import { ComponentPreview } from "@/components/component-preview"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

import { cn } from "@/lib/utils"

interface MDXComponents {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: React.FC<any> | MDXComponents
}

const components: MDXComponents = {
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			className={cn("scroll-m-20 text-4xl font-bold", className)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn("mt-10 scroll-m-20 text-2xl font-semibold", className)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn("mt-8 scroll-m-20 text-xl font-semibold", className)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn("mt-4 scroll-m-20 text-lg font-semibold", className)}
			{...props}
		/>
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p
			className={cn(
				"scroll-m-20 text-foreground [&:not(:first-child)]:mt-4",
				className
			)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul
			className={cn("space-y-2 text-muted-foreground", className)}
			{...props}
		/>
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol
			className={cn("space-y-2 text-muted-foreground", className)}
			{...props}
		/>
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
		<li className={cn("", className)} {...props} />
	),
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={cn(
				"relative bg-background px-[0.3rem] py-[0.2rem] font-mono text-sm text-accent",
				className
			)}
			{...props}
		/>
	),
	blockquote: ({
		className,
		...props
	}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
		<blockquote
			className={cn(
				"mt-6 border-l-2 pl-6 italic text-muted-foreground",
				className
			)}
			{...props}
		/>
	),
	table: ({
		className,
		...props
	}: React.TableHTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-hidden rounded-lg border">
			<table className={cn("w-full", className)} {...props} />
		</div>
	),
	thead: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableSectionElement>) => (
		<thead className={cn("border-b bg-muted/40", className)} {...props} />
	),
	tbody: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableSectionElement>) => (
		<tbody className={cn("divide-y divide-muted", className)} {...props} />
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr className={cn("", className)} {...props} />
	),
	th: ({
		className,
		...props
	}: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
		<th
			className={cn("p-4 text-left text-sm font-semibold", className)}
			{...props}
		/>
	),
	td: ({
		className,
		...props
	}: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
		<td
			className={cn("p-4 text-sm text-muted-foreground", className)}
			{...props}
		/>
	),
	pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
		<pre
			className={cn("overflow-x-scroll bg-background p-4", className)}
			{...props}
		/>
	),
	hr: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
		<Separator className={cn("my-8", className)} {...props} />
	),
	a: ({
		className,
		...props
	}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a
			className={cn(
				"font-medium text-foreground underline underline-offset-4",
				className
			)}
			{...props}
		/>
	),
	strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<strong className={cn("font-semibold", className)} {...props} />
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		<img className={cn("rounded-lg border", className)} alt={alt} {...props} />
	),
	Accordion,
	AccordionTrigger,
	AccordionItem,
	AccordionContent,
	ComponentPreview,
	ComponentLinks,
	Title: ({
		className,
		content,
		...props
	}: React.HTMLAttributes<HTMLHeadingElement>) => {
		if (!content) {
			throw new Error("Title must be provided")
		}

		return (
			<React.Fragment>
				<h1 className={cn("text-3xl font-bold", className)} {...props}>
					{content}
				</h1>
				<title>{`${content} | 9ui`}</title>
			</React.Fragment>
		)
	},
	Description: ({
		className,
		content,
		...props
	}: React.HTMLAttributes<HTMLParagraphElement>) => {
		if (!content || content.length > 160) {
			throw new Error(
				"Meta description must be provided and less than 160 characters"
			)
		}

		return (
			<React.Fragment>
				<p className={cn("mt-2 text-muted-foreground", className)} {...props}>
					{content}
				</p>
				<meta name="description" content={content} />
			</React.Fragment>
		)
	},
}

export function useMDXComponents(): MDXComponents {
	return components
}
