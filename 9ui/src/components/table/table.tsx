import * as React from "react"

import { merge } from "../../utils"

/********
Table
********/
const Table = React.forwardRef<
	HTMLTableElement,
	React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
	<div className="relative w-full overflow-auto">
		<table
			ref={ref}
			className={merge("w-full caption-bottom text-sm", className)}
			{...props}
		/>
	</div>
))
Table.displayName = "Table"

/********
Table Header
********/
const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead
		ref={ref}
		className={merge("bg-subtle/50 [&_tr]:border-b", className)}
		{...props}
	/>
))
TableHeader.displayName = "TableHeader"

/********
Table Body
********/
const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody
		ref={ref}
		className={merge("[&_tr:last-child]:border-0", className)}
		{...props}
	/>
))
TableBody.displayName = "TableBody"

/********
Table Footer
********/
const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={merge(
			"border-t border-muted text-sm [&>tr]:last:border-b-0",
			className
		)}
		{...props}
	/>
))
TableFooter.displayName = "TableFooter"

/********
Table Row
********/
const TableRow = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={merge("border-b border-muted transition-colors", className)}
		{...props}
	/>
))
TableRow.displayName = "TableRow"

/********
Table Head
********/
const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={merge(
			"h-12 px-4 text-left align-middle text-sm font-medium text-fg",
			className
		)}
		{...props}
	/>
))
TableHead.displayName = "TableHead"

/********
Table Cell
********/
const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={merge("h-12 px-4 align-middle text-fg", className)}
		{...props}
	/>
))
TableCell.displayName = "TableCell"

/********
Table Caption
********/
const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={merge("mt-4 text-xs text-muted-fg", className)}
		{...props}
	/>
))
TableCaption.displayName = "TableCaption"

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
}
