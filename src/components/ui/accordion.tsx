import * as React from "react"
import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = BaseAccordion.Root

const AccordionItem = React.forwardRef<
	HTMLDivElement,
	BaseAccordion.Item.Props
>(({ className, ...props }, ref) => (
	<BaseAccordion.Item
		ref={ref}
		className={cn("border-b", className)}
		{...props}
	/>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
	HTMLButtonElement,
	BaseAccordion.Trigger.Props
>(({ children, className, ...props }, ref) => (
	<BaseAccordion.Header>
		<BaseAccordion.Trigger
			ref={ref}
			className={cn(
				"group flex w-full cursor-pointer items-baseline justify-between gap-4 py-2 text-left font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
				className
			)}
			{...props}
		>
			{children}
			{/* Using PlusIcon from the example */}
			<ChevronDownIcon className="mr-2 size-4 shrink-0 transition-all ease-out group-data-[panel-open]:rotate-90 group-data-[panel-open]:scale-110" />
		</BaseAccordion.Trigger>
	</BaseAccordion.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<BaseAccordion.Panel
		className={cn(
			"h-[var(--accordion-panel-height)] overflow-hidden text-sm text-foreground/80 transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0", // Using text-foreground/80 to approximate text-gray-600, adjusted text size to sm (keeping original), added ease-out
			className
		)}
		{...props}
	>
		<div className="pb-3 pt-1" data-accordion-content-wrapper="">
			{" "}
			{/* Adjusted padding based on example (pb-3), added pt-1 for spacing */}
			{children}
		</div>
	</BaseAccordion.Panel>
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
