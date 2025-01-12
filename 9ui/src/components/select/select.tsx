import * as React from "react"
import { Select as BaseSelect } from "@base-ui-components/react/select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { merge } from "../../utils"

/********
Select Mappings
********/
const Select = <T,>(props: BaseSelect.Root.Props<T>) => {
	return <BaseSelect.Root alignItemToTrigger={false} modal={false} {...props} />
}
Select.displayName = "Select"

/********
Select Trigger
********/
const SelectTrigger = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>
>(({ children, className, ...props }, ref) => {
	return (
		<BaseSelect.Trigger
			ref={ref}
			className={merge(
				"flex h-9 cursor-pointer items-center justify-between rounded-md border border-muted px-4 py-2 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4",
				className
			)}
			{...props}
		>
			{children}
			<BaseSelect.Icon>
				<ChevronDownIcon />
			</BaseSelect.Icon>
		</BaseSelect.Trigger>
	)
})
SelectTrigger.displayName = "SelectTrigger"

/********
Select Value
********/
const SelectValue = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Value>
>(({ className, ...props }, ref) => {
	return (
		<BaseSelect.Value
			ref={ref}
			className={merge("text-sm text-fg", className)}
			{...props}
		/>
	)
})
SelectValue.displayName = "SelectValue"

/********
Select Content
********/
interface SelectContentProps
	extends React.ComponentPropsWithoutRef<typeof BaseSelect.Popup> {
	positionerProps?: BaseSelect.Positioner.Props
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
	({ children, className, positionerProps, ...props }, ref) => {
		return (
			<BaseSelect.Positioner sideOffset={4} {...positionerProps}>
				<BaseSelect.Popup
					ref={ref}
					className={merge(
						"w-[--anchor-width] origin-[var(--transform-origin)] overflow-y-auto overscroll-contain rounded-md bg-bg p-2 text-sm text-fg shadow-elevation-low outline outline-1 -outline-offset-1 outline-muted transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:shadow-none",
						className
					)}
					{...props}
				>
					{children}
				</BaseSelect.Popup>
			</BaseSelect.Positioner>
		)
	}
)

/********
Select Item
********/
const SelectItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Item>
>(({ children, className, ...props }, ref) => {
	return (
		<BaseSelect.Item
			ref={ref}
			className={merge(
				"grid select-none grid-cols-[0.75rem_auto] items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-muted data-[highlighted]:text-fg data-[disabled]:opacity-50",
				className
			)}
			{...props}
		>
			<BaseSelect.ItemIndicator className="col-start-1">
				<CheckIcon className="size-3" />
			</BaseSelect.ItemIndicator>
			<BaseSelect.ItemText className="col-start-2">
				{children}
			</BaseSelect.ItemText>
		</BaseSelect.Item>
	)
})
SelectItem.displayName = "SelectItem"

/********
Select Group
********/
const SelectGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Group>
>(({ className, ...props }, ref) => {
	return <BaseSelect.Group ref={ref} className={className} {...props} />
})
SelectGroup.displayName = "SelectGroup"

/********
Select Group Label
********/
const SelectGroupLabel = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.GroupLabel>
>(({ className, ...props }, ref) => {
	return (
		<BaseSelect.GroupLabel
			ref={ref}
			className={merge("px-2 py-1.5 font-medium text-muted-fg", className)}
			{...props}
		/>
	)
})
SelectGroupLabel.displayName = "SelectGroupLabel"

/********
Select Separator
********/
const SelectSeparator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Separator>
>(({ className, ...props }, ref) => {
	return (
		<BaseSelect.Separator
			ref={ref}
			className={merge("-mx-1 my-1 h-px bg-muted", className)}
			{...props}
		/>
	)
})
SelectSeparator.displayName = "SelectSeparator"

export {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectGroup,
	SelectGroupLabel,
	SelectSeparator,
}
