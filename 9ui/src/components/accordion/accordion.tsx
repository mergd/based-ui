import * as React from "react"
import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion"
import { ChevronDownIcon } from "lucide-react"

import { merge } from "../../utils"

const Accordion = BaseAccordion.Root

/********
Accordion Item
********/
const AccordionItem = React.forwardRef<
	HTMLDivElement,
	BaseAccordion.Item.Props
>(({ children, className, ...props }, ref) => {
	return (
		<BaseAccordion.Item
			ref={ref}
			className={merge("border-b border-primary", className)}
			{...props}
		>
			{children}
		</BaseAccordion.Item>
	)
})
AccordionItem.displayName = "AccordionItem"

/********
Accordion Trigger
********/
const AccordionTrigger = React.forwardRef<
	HTMLButtonElement,
	BaseAccordion.Trigger.Props
>(({ children, className, ...props }, ref) => {
	return (
		<BaseAccordion.Header>
			<BaseAccordion.Trigger
				ref={ref}
				className={merge(
					"flex w-full items-center justify-between py-2.5 font-semibold hover:underline [&>svg]:transition-transform [&>svg]:duration-200 [&[data-panel-open]>svg]:rotate-180",
					className
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon className="size-4" />
			</BaseAccordion.Trigger>
		</BaseAccordion.Header>
	)
})
AccordionTrigger.displayName = "AccordionTrigger"

/********
Accordion Content
********/
function AccordionContent({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<BaseAccordion.Panel
			className={merge(
				"h-[var(--accordion-panel-height)] overflow-hidden text-sm text-fg transition-[height] data-[ending-style]:h-0	data-[starting-style]:h-0",
				className
			)}
			{...props}
		>
			<div className="pb-2.5" data-accordion-content-wrapper="">
				{children}
			</div>
		</BaseAccordion.Panel>
	)
}
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
