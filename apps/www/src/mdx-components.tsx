import React from "react"
import { Separator } from "9ui"
import { merge } from "9ui/src/utils"

import { ComponentPreview } from "@/components/component-preview"
import { ComponentVariants } from "@/components/component-variants"

interface MDXComponents {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: React.FC<any> | MDXComponents
}

const components: MDXComponents = {
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1 className={merge("text-4xl font-bold", className)} {...props} />
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={merge("mt-10 text-2xl font-semibold", className)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3 className={merge("mt-8 text-xl font-semibold", className)} {...props} />
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4 className={merge("mt-4 text-lg font-semibold", className)} {...props} />
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p
			className={merge("text-fg [&:not(:first-child)]:mt-4", className)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul
			className={merge("space-y-2 text-secondary-fg", className)}
			{...props}
		/>
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol
			className={merge("space-y-2 text-secondary-fg", className)}
			{...props}
		/>
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
		<li className={merge("", className)} {...props} />
	),
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={merge(
				"relative px-[0.3rem] py-[0.2rem] font-mono text-sm text-accent",
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
			className={merge(
				"mt-6 border-l-2 border-secondary pl-6 italic text-secondary-fg",
				className
			)}
			{...props}
		/>
	),
	table: ({
		className,
		...props
	}: React.TableHTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-hidden rounded-lg border border-secondary">
			<table className={merge("w-full", className)} {...props} />
		</div>
	),
	thead: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableSectionElement>) => (
		<thead
			className={merge("border-b border-secondary bg-secondary/40", className)}
			{...props}
		/>
	),
	tbody: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableSectionElement>) => (
		<tbody
			className={merge("divide-y divide-secondary", className)}
			{...props}
		/>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr className={merge("", className)} {...props} />
	),
	th: ({
		className,
		...props
	}: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
		<th
			className={merge("p-4 text-left text-sm font-semibold", className)}
			{...props}
		/>
	),
	td: ({
		className,
		...props
	}: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
		<td
			className={merge("p-4 text-sm text-secondary-fg", className)}
			{...props}
		/>
	),
	pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
		<pre
			className={merge("overflow-x-scroll bg-red-500 p-4", className)}
			{...props}
		/>
	),
	hr: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
		<Separator className={merge("my-8", className)} {...props} />
	),
	a: ({
		className,
		...props
	}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a
			className={merge(
				"font-medium text-link-fg underline underline-offset-4",
				className
			)}
			{...props}
		/>
	),
	strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<strong className={merge("font-semibold", className)} {...props} />
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={merge("rounded-lg border border-secondary", className)}
			alt={alt}
			{...props}
		/>
	),
	ComponentPreview,
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
				<h1 className={merge("text-4xl font-bold", className)} {...props}>
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
				<p className={merge("mt-4 text-secondary-fg", className)} {...props}>
					{content}
				</p>
				<meta name="description" content={content} />
			</React.Fragment>
		)
	},
}

export function useMDXComponents(): MDXComponents {
	return {
		...components,
		ComponentPreview,
		ComponentVariants,
	}
}
