"use client"

import React from "react"

import AccordionDemo from "@/components/demos/accordion/accordion-demo"
import AlertDialogDemo from "@/components/demos/alert-dialog/alert-dialog-demo"
import AlertDemo from "@/components/demos/alert/alert-demo"
import AspectRatioDemo from "@/components/demos/aspect-ratio/aspect-ratio-demo"
import AvatarDemo from "@/components/demos/avatar/avatar-demo"
import BadgeDemo from "@/components/demos/badge/badge-demo"
import BreadcrumbsDemo from "@/components/demos/breadcrumbs/breadcrumbs-demo"
import ButtonDataDemo from "@/components/demos/button/button-data-demo"
// Button Demos
import ButtonDemo from "@/components/demos/button/button-demo"
import ButtonDestructive from "@/components/demos/button/button-destructive"
import ButtonGhost from "@/components/demos/button/button-ghost"
import ButtonIcon from "@/components/demos/button/button-icon"
import ButtonLink from "@/components/demos/button/button-link"
import ButtonLoading from "@/components/demos/button/button-loading"
import ButtonOutline from "@/components/demos/button/button-outline"
import ButtonSecondary from "@/components/demos/button/button-secondary"
import ButtonSizes from "@/components/demos/button/button-sizes"
import ButtonSuccess from "@/components/demos/button/button-success"
import CalendarDemo from "@/components/demos/calendar/calendar-demo"
import CardDemo from "@/components/demos/card/card-demo"
import CarouselDemo from "@/components/demos/carousel/carousel-demo"
import CheckboxDemo from "@/components/demos/checkbox/checkbox-demo"
import CollapsibleDemo from "@/components/demos/collapsible/collapsible-demo"
import ComboboxDemo from "@/components/demos/combobox/combobox-demo"
import CommandDemo from "@/components/demos/command/command-demo"
import ContextMenuDemo from "@/components/demos/context-menu/context-menu-demo"
import DatePickerDemo from "@/components/demos/date-picker/date-picker-demo"
import DialogDemo from "@/components/demos/dialog/dialog-demo"
import DrawerDemo from "@/components/demos/drawer/drawer-demo"
import DropdownDemo from "@/components/demos/dropdown/dropdown-demo"
import EmojiPickerDemo from "@/components/demos/emoji-picker/emoji-picker-demo"
import FormDemo from "@/components/demos/form/form-demo"
import InputOTPDemo from "@/components/demos/input-otp/input-otp-demo"
import InputDemo from "@/components/demos/input/input-demo"
import KbdDemo from "@/components/demos/kbd/kbd-demo"
import MenubarDemo from "@/components/demos/menubar/menubar-demo"
import NavigationMenuDemo from "@/components/demos/navigation-menu/navigation-menu-demo"
import PopoverDemo from "@/components/demos/popover/popover-demo"
import ProgressDemo from "@/components/demos/progress/progress-demo"
import RadioGroupDemo from "@/components/demos/radio-group/radio-group-demo"
import ScrollAreaDemo from "@/components/demos/scroll-area/scroll-area-demo"
import SelectDemo from "@/components/demos/select/select-demo"
import SeparatorDemo from "@/components/demos/separator/separator-demo"
import SheetDemo from "@/components/demos/sheet/sheet-demo"
import SkeletonDemo from "@/components/demos/skeleton/skeleton-demo"
import SliderDemo from "@/components/demos/slider/slider-demo"
import SwitchDemo from "@/components/demos/switch/switch-demo"
import TableDemo from "@/components/demos/table/table-demo"
import TabsDemo from "@/components/demos/tabs/tabs-demo"
import TextareaDemo from "@/components/demos/textarea/textarea-demo"
import ThemeToggle from "@/components/demos/theme-toggle/theme-toggle"
import ToastDemo from "@/components/demos/toast/toast-demo"
import ToggleGroupDemo from "@/components/demos/toggle-group/toggle-group-demo"
import ToggleDemo from "@/components/demos/toggle/toggle-demo"
import ToolbarDemo from "@/components/demos/toolbar/toolbar-demo"
import TooltipDemo from "@/components/demos/tooltip/tooltip-demo"

import { cn } from "@/lib/utils"

// Helper component for wrapping demos
const DemoWrapper: React.FC<{
	title: string
	children: React.ReactNode
	className?: string
}> = ({ title, children, className }) => (
	<section className={cn("space-y-4", className)}>
		<h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
		<div className="flex flex-wrap items-start gap-4 rounded-lg p-4">
			{children}
		</div>
	</section>
)

const KitchenSinkPage = () => {
	return (
		<div className="container space-y-12 py-10">
			{/* Increased spacing */}
			<div className="space-y-2">
				<h1 className="text-4xl font-bold tracking-tight">Kitchen Sink</h1>
				<p className="text-lg text-muted-foreground">
					A collection of available components and their variations for testing.
				</p>
			</div>
			{/* Added grid container */}
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<DemoWrapper title="Accordion">
					<AccordionDemo />
				</DemoWrapper>
				<DemoWrapper title="Alert">
					<AlertDemo /> {/* Might need others like AlertDestructiveDemo */}
				</DemoWrapper>
				<DemoWrapper title="Alert Dialog">
					<AlertDialogDemo />
				</DemoWrapper>
				<DemoWrapper title="Aspect Ratio">
					<AspectRatioDemo />
				</DemoWrapper>
				<DemoWrapper title="Avatar">
					<AvatarDemo />
				</DemoWrapper>
				<DemoWrapper title="Badge">
					<BadgeDemo /> {/* Might need others */}
				</DemoWrapper>
				<DemoWrapper title="Breadcrumbs">
					<BreadcrumbsDemo />
				</DemoWrapper>
				{/* --- Buttons --- (Moved into the grid, spans multiple columns) */}
				<section className="space-y-4 lg:col-span-3">
					<h2 className="text-2xl font-semibold tracking-tight">Buttons</h2>
					{/* Added card styling to the button section container */}
					<div className="rounded-lg border bg-card p-4 text-card-foreground">
						<div className="mb-4 flex flex-wrap items-center gap-4">
							<ButtonDemo /> <ButtonSecondary /> <ButtonDestructive />
							<ButtonGhost />
							<ButtonOutline /> <ButtonLink /> <ButtonIcon /> <ButtonLoading />
							<ButtonSuccess />
						</div>
						{/* Added some styling to inner button demo containers */}
						<div className="mb-4 rounded-lg border bg-background p-4">
							<ButtonSizes />
						</div>
						<div className="rounded-lg border bg-background p-4">
							<ButtonDataDemo />
						</div>
					</div>
				</section>
				<DemoWrapper title="Calendar">
					<CalendarDemo />
				</DemoWrapper>
				<DemoWrapper title="Card">
					<CardDemo />
				</DemoWrapper>
				<DemoWrapper title="Carousel">
					<CarouselDemo />
				</DemoWrapper>
				<DemoWrapper title="Checkbox">
					<CheckboxDemo />
				</DemoWrapper>
				<DemoWrapper title="Collapsible">
					<CollapsibleDemo />
				</DemoWrapper>
				<DemoWrapper title="Combobox">
					<ComboboxDemo />
				</DemoWrapper>
				<DemoWrapper title="Command">
					<CommandDemo />
				</DemoWrapper>
				<DemoWrapper title="Context Menu">
					<ContextMenuDemo />
				</DemoWrapper>
				<DemoWrapper title="Date Picker">
					<DatePickerDemo />
				</DemoWrapper>
				<DemoWrapper title="Dialog">
					<DialogDemo />
				</DemoWrapper>
				<DemoWrapper title="Drawer">
					<DrawerDemo />
				</DemoWrapper>
				<DemoWrapper title="Dropdown Menu">
					<DropdownDemo />
				</DemoWrapper>
				<DemoWrapper title="Emoji Picker">
					<EmojiPickerDemo />
				</DemoWrapper>
				<DemoWrapper title="Form">
					<FormDemo />
				</DemoWrapper>
				<DemoWrapper title="Input">
					<InputDemo />
				</DemoWrapper>
				<DemoWrapper title="Input OTP">
					<InputOTPDemo />
				</DemoWrapper>
				<DemoWrapper title="Kbd">
					<KbdDemo />
				</DemoWrapper>
				<DemoWrapper title="Menubar">
					<MenubarDemo />
				</DemoWrapper>
				<DemoWrapper title="Navigation Menu">
					<NavigationMenuDemo />
				</DemoWrapper>
				<DemoWrapper title="Popover">
					<PopoverDemo />
				</DemoWrapper>
				<DemoWrapper title="Progress">
					<ProgressDemo />
				</DemoWrapper>
				<DemoWrapper title="Radio Group">
					<RadioGroupDemo />
				</DemoWrapper>
				<DemoWrapper title="Scroll Area">
					<ScrollAreaDemo />
				</DemoWrapper>
				<DemoWrapper title="Select">
					<SelectDemo />
				</DemoWrapper>
				<DemoWrapper title="Separator">
					<SeparatorDemo />
				</DemoWrapper>
				<DemoWrapper title="Sheet">
					<SheetDemo />
				</DemoWrapper>
				<DemoWrapper title="Skeleton">
					<SkeletonDemo />
				</DemoWrapper>
				<DemoWrapper title="Slider">
					<SliderDemo />
				</DemoWrapper>
				<DemoWrapper title="Switch">
					<SwitchDemo />
				</DemoWrapper>
				<DemoWrapper title="Table" className="lg:col-span-3">
					<TableDemo />
				</DemoWrapper>
				<DemoWrapper title="Tabs">
					<TabsDemo />
				</DemoWrapper>
				<DemoWrapper title="Textarea">
					<TextareaDemo />
				</DemoWrapper>
				<DemoWrapper title="Theme Toggle">
					<ThemeToggle />
				</DemoWrapper>
				<DemoWrapper title="Toast">
					<ToastDemo />
				</DemoWrapper>
				<DemoWrapper title="Toggle">
					<ToggleDemo />
				</DemoWrapper>
				<DemoWrapper title="Toggle Group">
					<ToggleGroupDemo />
				</DemoWrapper>
				<DemoWrapper title="Toolbar">
					<ToolbarDemo />
				</DemoWrapper>
				<DemoWrapper title="Tooltip">
					<TooltipDemo />
				</DemoWrapper>
			</div>{" "}
			{/* Close grid container */}
		</div>
	)
}

export default KitchenSinkPage
