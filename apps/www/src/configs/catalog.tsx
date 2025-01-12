import React from "react"

type Catalog = {
	[key: string]: {
		content: string
		component: React.LazyExoticComponent<() => React.ReactElement>
		title: string
	}
}

export const Catalog: Catalog = {
	"accordion-demo": {
		content:
			'import {\n\tAccordion,\n\tAccordionContent,\n\tAccordionItem,\n\tAccordionTrigger,\n} from "9ui"\n\nexport function AccordionDemo() {\n\treturn (\n\t\t<Accordion className="mx-auto w-96" orientation="vertical">\n\t\t\t<AccordionItem>\n\t\t\t\t<AccordionTrigger>Is it an accordion?</AccordionTrigger>\n\t\t\t\t<AccordionContent>\n\t\t\t\t\tYes, it is an accordion. It is a component that allows you to collapse\n\t\t\t\t\tand expand content.\n\t\t\t\t</AccordionContent>\n\t\t\t</AccordionItem>\n\t\t\t<AccordionItem>\n\t\t\t\t<AccordionTrigger>Is it animated?</AccordionTrigger>\n\t\t\t\t<AccordionContent>\n\t\t\t\t\tYes, it is animated. It is a component that allows you to collapse and\n\t\t\t\t\texpand content.\n\t\t\t\t</AccordionContent>\n\t\t\t</AccordionItem>\n\t\t\t<AccordionItem>\n\t\t\t\t<AccordionTrigger>Is it customizable?</AccordionTrigger>\n\t\t\t\t<AccordionContent>\n\t\t\t\t\tYes, it is customizable. It is a component that allows you to collapse\n\t\t\t\t\tand expand content.\n\t\t\t\t</AccordionContent>\n\t\t\t</AccordionItem>\n\t\t</Accordion>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/accordion/accordion-demo")
		),
		title: "accordion-demo.tsx",
	},
	"alert-demo": {
		content:
			'import { Monicon } from "@monicon/react"\nimport {\n\tAlert,\n\tAlertContent,\n\tAlertDescription,\n\tAlertIcon,\n\tAlertTitle,\n} from "9ui"\n\nexport function AlertDemo() {\n\treturn (\n\t\t<Alert>\n\t\t\t<AlertIcon>\n\t\t\t\t<Monicon name="ri:wifi-off-fill" />\n\t\t\t</AlertIcon>\n\t\t\t<AlertContent>\n\t\t\t\t<AlertTitle>No Internet Connection</AlertTitle>\n\t\t\t\t<AlertDescription>\n\t\t\t\t\tPlease check your internet connection and try again.\n\t\t\t\t</AlertDescription>\n\t\t\t</AlertContent>\n\t\t</Alert>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/alert/alert-demo")),
		title: "alert-demo.tsx",
	},
	"alert-with-action": {
		content:
			'import Monicon from "@monicon/react"\nimport {\n\tAlert,\n\tAlertAction,\n\tAlertContent,\n\tAlertDescription,\n\tAlertIcon,\n\tAlertTitle,\n\tButton,\n} from "9ui"\n\nexport function AlertWithAction() {\n\treturn (\n\t\t<Alert>\n\t\t\t<AlertIcon>\n\t\t\t\t<Monicon name="ri:wifi-off-fill" />\n\t\t\t</AlertIcon>\n\t\t\t<AlertContent>\n\t\t\t\t<AlertTitle>No Internet Connection</AlertTitle>\n\t\t\t\t<AlertDescription>\n\t\t\t\t\tPlease check your internet connection and try again.\n\t\t\t\t</AlertDescription>\n\t\t\t</AlertContent>\n\t\t\t<AlertAction>\n\t\t\t\t<Button size="sm" variant="outline">\n\t\t\t\t\tTry Again\n\t\t\t\t</Button>\n\t\t\t</AlertAction>\n\t\t</Alert>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/alert/alert-with-action")
		),
		title: "alert-with-action.tsx",
	},
	"alert-dialog-demo": {
		content:
			'import {\n\tAlertDialog,\n\tAlertDialogClose,\n\tAlertDialogContent,\n\tAlertDialogDescription,\n\tAlertDialogFooter,\n\tAlertDialogHeader,\n\tAlertDialogTitle,\n\tAlertDialogTrigger,\n\tButton,\n} from "9ui"\n\nexport function AlertDialogDemo() {\n\treturn (\n\t\t<AlertDialog>\n\t\t\t<AlertDialogTrigger asChild>\n\t\t\t\t<Button variant="destructive">Delete Post</Button>\n\t\t\t</AlertDialogTrigger>\n\t\t\t<AlertDialogContent className="space-y-4">\n\t\t\t\t<AlertDialogHeader>\n\t\t\t\t\t<AlertDialogTitle>Are you sure?</AlertDialogTitle>\n\t\t\t\t\t<AlertDialogDescription>\n\t\t\t\t\t\tThis action cannot be undone. Your post will be permanently deleted.\n\t\t\t\t\t</AlertDialogDescription>\n\t\t\t\t</AlertDialogHeader>\n\t\t\t\t<AlertDialogFooter>\n\t\t\t\t\t<AlertDialogClose asChild>\n\t\t\t\t\t\t<Button size="sm" variant="ghost">\n\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t</AlertDialogClose>\n\t\t\t\t\t<Button size="sm" variant="destructive">\n\t\t\t\t\t\tDelete\n\t\t\t\t\t</Button>\n\t\t\t\t</AlertDialogFooter>\n\t\t\t</AlertDialogContent>\n\t\t</AlertDialog>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/alert-dialog/alert-dialog-demo")
		),
		title: "alert-dialog-demo.tsx",
	},
	"aspect-ratio-demo": {
		content:
			'import { AspectRatio } from "9ui"\n\nexport function AspectRatioDemo() {\n\treturn (\n\t\t<AspectRatio ratio={16 / 9} className="rounded-lg bg-subtle">\n\t\t\t<div className="flex size-full items-center justify-center font-medium text-fg">\n\t\t\t\tContent\n\t\t\t</div>\n\t\t</AspectRatio>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/aspect-ratio/aspect-ratio-demo")
		),
		title: "aspect-ratio-demo.tsx",
	},
	"avatar-demo": {
		content:
			'import { Avatar, AvatarFallback, AvatarImage } from "9ui"\n\nexport function AvatarDemo() {\n\treturn (\n\t\t<Avatar size="md">\n\t\t\t<AvatarImage src="/user.png" alt="User" />\n\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t</Avatar>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/avatar/avatar-demo")
		),
		title: "avatar-demo.tsx",
	},
	"avatar-fallback": {
		content:
			'import { Avatar, AvatarFallback, AvatarImage } from "9ui"\n\nexport function AvatarWithFallback() {\n\treturn (\n\t\t<Avatar size="md">\n\t\t\t<AvatarImage src="/user.jpg" alt="User" />\n\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t</Avatar>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/avatar/avatar-fallback")
		),
		title: "avatar-fallback.tsx",
	},
	"avatar-sizes": {
		content:
			'import { Avatar, AvatarFallback, AvatarImage } from "9ui"\n\nexport function AvatarSizes() {\n\treturn (\n\t\t<div className="flex flex-row items-center gap-4">\n\t\t\t<Avatar size="sm">\n\t\t\t\t<AvatarImage src="/user.png" alt="User" />\n\t\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t\t</Avatar>\n\t\t\t<Avatar size="md">\n\t\t\t\t<AvatarImage src="/user.png" alt="User" />\n\t\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t\t</Avatar>\n\t\t\t<Avatar size="lg">\n\t\t\t\t<AvatarImage src="/user.png" alt="User" />\n\t\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t\t</Avatar>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/avatar/avatar-sizes")
		),
		title: "avatar-sizes.tsx",
	},
	"badge-custom": {
		content:
			'import { Badge } from "9ui"\n\nexport function BadgeCustom() {\n\treturn (\n\t\t<div className="flex items-center justify-center gap-2 text-xs text-muted-fg">\n\t\t\t<Badge variant="danger" className="gap-x-1 p-0.5 pr-2">\n\t\t\t\t<span className="size-4 rounded-full bg-danger-fg" />\n\t\t\t\tOffline\n\t\t\t</Badge>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/badge/badge-custom")
		),
		title: "badge-custom.tsx",
	},
	"badge-demo": {
		content:
			'import { Monicon } from "@monicon/react"\nimport { Badge } from "9ui"\n\nexport function BadgeDemo() {\n\treturn (\n\t\t<Badge variant="success" className="gap-1">\n\t\t\t<Monicon name="ri:trophy-fill" size={14} />\n\t\t\tTop 10\n\t\t</Badge>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/badge/badge-demo")),
		title: "badge-demo.tsx",
	},
	"badge-status": {
		content:
			'import { Badge } from "9ui"\n\nexport function BadgeStatus() {\n\treturn (\n\t\t<div className="flex items-center justify-center gap-2">\n\t\t\t<Badge variant="success">Active</Badge>\n\t\t\t<span className="text-xs text-muted-fg">Ready to use</span>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/badge/badge-status")
		),
		title: "badge-status.tsx",
	},
	"badge-with-icon": {
		content:
			'import { Monicon } from "@monicon/react"\nimport { Badge } from "9ui"\n\nexport function BadgeWithIcon() {\n\treturn (\n\t\t<div className="flex justify-center">\n\t\t\t<Badge variant="info" className="gap-1">\n\t\t\t\t<Monicon name="ri:star-fill" size={14} />\n\t\t\t\tFeatured\n\t\t\t</Badge>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/badge/badge-with-icon")
		),
		title: "badge-with-icon.tsx",
	},
	"breadcrumbs-custom-separator": {
		content:
			'import Link from "next/link"\nimport {\n\tBreadcrumb,\n\tBreadcrumbItem,\n\tBreadcrumbList,\n\tBreadcrumbSeparator,\n} from "9ui"\n\nexport function BreadcrumbsCustomSeparator() {\n\treturn (\n\t\t<Breadcrumb>\n\t\t\t<BreadcrumbList>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Link href="/">Home</Link>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator>\n\t\t\t\t\t<span>/</span>\n\t\t\t\t</BreadcrumbSeparator>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Link href="/docs/components">Components</Link>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator>\n\t\t\t\t\t<span>/</span>\n\t\t\t\t</BreadcrumbSeparator>\n\t\t\t\t<BreadcrumbItem active>Breadcrumbs</BreadcrumbItem>\n\t\t\t</BreadcrumbList>\n\t\t</Breadcrumb>\n\t)\n}\n',
		component: React.lazy(
			() =>
				import("@/components/demos/breadcrumbs/breadcrumbs-custom-separator")
		),
		title: "breadcrumbs-custom-separator.tsx",
	},
	"breadcrumbs-demo": {
		content:
			'import Link from "next/link"\nimport Monicon from "@monicon/react"\nimport {\n\tBreadcrumb,\n\tBreadcrumbItem,\n\tBreadcrumbList,\n\tBreadcrumbSeparator,\n} from "9ui"\n\nexport function BreadcrumbsDemo() {\n\treturn (\n\t\t<Breadcrumb>\n\t\t\t<BreadcrumbList>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Link href="/">Home</Link>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Monicon name="ri:more-fill" />\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Link href="/docs/components">Components</Link>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem active>Breadcrumbs</BreadcrumbItem>\n\t\t\t</BreadcrumbList>\n\t\t</Breadcrumb>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/breadcrumbs/breadcrumbs-demo")
		),
		title: "breadcrumbs-demo.tsx",
	},
	"button-custom": {
		content:
			'import { Monicon } from "@monicon/react"\nimport { Button } from "9ui"\n\nexport function ButtonCustom() {\n\treturn (\n\t\t<Button\n\t\t\tclassName="rounded-full border border-muted bg-transparent text-subtle-fg hover:border-fg hover:bg-transparent hover:text-fg"\n\t\t\tsize="icon-sm"\n\t\t>\n\t\t\t<Monicon name="ri:add-fill" />\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-custom")
		),
		title: "button-custom.tsx",
	},
	"button-demo": {
		content:
			'import { Button } from "9ui"\n\nexport function ButtonDemo() {\n\treturn <Button>Save</Button>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-demo")
		),
		title: "button-demo.tsx",
	},
	"button-icon": {
		content:
			'import { Monicon } from "@monicon/react"\nimport { Button } from "9ui"\n\nexport function ButtonIcon() {\n\treturn (\n\t\t<Button size="icon-sm" variant="outline">\n\t\t\t<Monicon name="ri:edit-fill" />\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-icon")
		),
		title: "button-icon.tsx",
	},
	"button-loading": {
		content:
			'import { Monicon } from "@monicon/react"\nimport { Button } from "9ui"\n\nexport function ButtonLoading() {\n\treturn (\n\t\t<Button className="gap-2" disabled>\n\t\t\t<div className="animate-spin">\n\t\t\t\t<Monicon name="ri:loader-5-fill" />\n\t\t\t</div>\n\t\t\tLoading\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-loading")
		),
		title: "button-loading.tsx",
	},
	"button-sizes": {
		content:
			'import { Button } from "9ui"\n\nexport function ButtonSizes() {\n\treturn (\n\t\t<div className="flex flex-row items-center gap-2">\n\t\t\t<Button size="sm">Small</Button>\n\t\t\t<Button size="md">Medium</Button>\n\t\t\t<Button size="lg">Large</Button>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-sizes")
		),
		title: "button-sizes.tsx",
	},
	"calendar-demo": {
		content:
			'import { Calendar } from "9ui"\n\nexport function CalendarDemo() {\n\treturn <Calendar showOutsideDays />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-demo")
		),
		title: "calendar-demo.tsx",
	},
	"calendar-disabled": {
		content:
			'"use client"\n\nimport { useState } from "react"\nimport { Calendar } from "9ui"\n\nexport function CalendarDisabled() {\n\tconst [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)\n\n\treturn (\n\t\t<Calendar\n\t\t\tmode="single"\n\t\t\tdisabled={(date) => date < new Date()}\n\t\t\tselected={selectedDate}\n\t\t\tonSelect={setSelectedDate}\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-disabled")
		),
		title: "calendar-disabled.tsx",
	},
	"calendar-multiple": {
		content:
			'"use client"\n\nimport { useState } from "react"\nimport { Calendar } from "9ui"\n\nexport function CalendarMultiple() {\n\tconst [selectedDates, setSelectedDates] = useState<Date[] | undefined>(\n\t\tundefined\n\t)\n\n\treturn (\n\t\t<Calendar\n\t\t\tmode="multiple"\n\t\t\tselected={selectedDates}\n\t\t\tonSelect={setSelectedDates}\n\t\t\tshowOutsideDays\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-multiple")
		),
		title: "calendar-multiple.tsx",
	},
	"calendar-range": {
		content:
			'"use client"\n\nimport { useState } from "react"\nimport { Calendar } from "9ui"\nimport { DateRange } from "react-day-picker"\n\nexport function CalendarRange() {\n\tconst [range, setRange] = useState<DateRange | undefined>(undefined)\n\n\treturn (\n\t\t<Calendar\n\t\t\tmode="range"\n\t\t\tselected={range}\n\t\t\tonSelect={setRange}\n\t\t\tshowOutsideDays\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-range")
		),
		title: "calendar-range.tsx",
	},
	"calendar-single": {
		content:
			'"use client"\n\nimport { useState } from "react"\nimport { Calendar } from "9ui"\n\nexport function CalendarSingle() {\n\tconst [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)\n\n\treturn (\n\t\t<Calendar\n\t\t\tmode="single"\n\t\t\tselected={selectedDate}\n\t\t\tonSelect={setSelectedDate}\n\t\t\tshowOutsideDays\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-single")
		),
		title: "calendar-single.tsx",
	},
	"carousel-demo": {
		content:
			'import {\n\tAspectRatio,\n\tCarousel,\n\tCarouselContent,\n\tCarouselItem,\n\tCarouselNavigation,\n\tCarouselNext,\n\tCarouselPrevious,\n} from "9ui"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport function CarouselDemo() {\n\treturn (\n\t\t<div className="w-60 sm:w-80 lg:w-96">\n\t\t\t<Carousel>\n\t\t\t\t<CarouselContent>\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide}>\n\t\t\t\t\t\t\t<AspectRatio\n\t\t\t\t\t\t\t\tratio={16 / 9}\n\t\t\t\t\t\t\t\tclassName="rounded-lg border border-muted bg-bg"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div className="flex size-full items-center justify-center text-xl font-semibold text-fg">\n\t\t\t\t\t\t\t\t\t{slide}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<CarouselNavigation>\n\t\t\t\t\t<CarouselPrevious />\n\t\t\t\t\t<CarouselNext />\n\t\t\t\t</CarouselNavigation>\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-demo")
		),
		title: "carousel-demo.tsx",
	},
	"carousel-looped": {
		content:
			'import {\n\tAspectRatio,\n\tCarousel,\n\tCarouselContent,\n\tCarouselItem,\n\tCarouselNavigation,\n\tCarouselNext,\n\tCarouselPrevious,\n} from "9ui"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport function CarouselLooped() {\n\treturn (\n\t\t<div className="w-60 sm:w-80 lg:w-96">\n\t\t\t<Carousel options={{ loop: true }}>\n\t\t\t\t<CarouselContent>\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide}>\n\t\t\t\t\t\t\t<AspectRatio\n\t\t\t\t\t\t\t\tratio={16 / 9}\n\t\t\t\t\t\t\t\tclassName="rounded-lg border border-muted bg-bg"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div className="flex size-full items-center justify-center text-xl font-semibold text-fg">\n\t\t\t\t\t\t\t\t\t{slide}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<CarouselNavigation>\n\t\t\t\t\t<CarouselPrevious />\n\t\t\t\t\t<CarouselNext />\n\t\t\t\t</CarouselNavigation>\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-looped")
		),
		title: "carousel-looped.tsx",
	},
	"carousel-multiple": {
		content:
			'import {\n\tAspectRatio,\n\tCarousel,\n\tCarouselContent,\n\tCarouselItem,\n\tCarouselNavigation,\n\tCarouselNext,\n\tCarouselPrevious,\n} from "9ui"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport function CarouselMultiple() {\n\treturn (\n\t\t<div className="w-60 sm:w-80 lg:w-96">\n\t\t\t<Carousel>\n\t\t\t\t<CarouselContent>\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide} className="basis-1/3">\n\t\t\t\t\t\t\t<AspectRatio\n\t\t\t\t\t\t\t\tratio={16 / 9}\n\t\t\t\t\t\t\t\tclassName="rounded-lg border border-muted bg-bg"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div className="flex size-full items-center justify-center text-xl font-semibold text-fg">\n\t\t\t\t\t\t\t\t\t{slide}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<CarouselNavigation>\n\t\t\t\t\t<CarouselPrevious />\n\t\t\t\t\t<CarouselNext />\n\t\t\t\t</CarouselNavigation>\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-multiple")
		),
		title: "carousel-multiple.tsx",
	},
	"carousel-thumbnail": {
		content:
			'import { useState } from "react"\nimport Image from "next/image"\nimport {\n\tAspectRatio,\n\tCarousel,\n\tCarouselApi,\n\tCarouselContent,\n\tCarouselItem,\n} from "9ui"\n\nconst slides = [\n\t"https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n\t"https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n\t"https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n\t"https://images.pexels.com/photos/2011824/pexels-photo-2011824.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n\t"https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n]\n\nexport function CarouselThumbnail() {\n\tconst [api, setApi] = useState<CarouselApi>()\n\n\treturn (\n\t\t<div className="w-60 sm:w-80 lg:w-96">\n\t\t\t<Carousel setApi={setApi}>\n\t\t\t\t<CarouselContent>\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide}>\n\t\t\t\t\t\t\t<AspectRatio\n\t\t\t\t\t\t\t\tratio={16 / 9}\n\t\t\t\t\t\t\t\tclassName="rounded-lg border border-muted bg-bg"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<Image\n\t\t\t\t\t\t\t\t\tsrc={slide}\n\t\t\t\t\t\t\t\t\talt="Carousel slide"\n\t\t\t\t\t\t\t\t\tfill\n\t\t\t\t\t\t\t\t\tclassName="rounded-lg object-cover"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<div className="mt-2 flex items-center justify-center gap-2">\n\t\t\t\t\t{slides.map((slide, index) => (\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tkey={slide}\n\t\t\t\t\t\t\tclassName="relative size-10"\n\t\t\t\t\t\t\tonClick={() => api?.scrollTo(index)}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<Image\n\t\t\t\t\t\t\t\tsrc={slide}\n\t\t\t\t\t\t\t\talt="Carousel slide"\n\t\t\t\t\t\t\t\tfill\n\t\t\t\t\t\t\t\tclassName="rounded-md object-cover opacity-80 transition-opacity duration-200 hover:opacity-100"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t))}\n\t\t\t\t</div>\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-thumbnail")
		),
		title: "carousel-thumbnail.tsx",
	},
	"carousel-vertical": {
		content:
			'import {\n\tAspectRatio,\n\tCarousel,\n\tCarouselContent,\n\tCarouselItem,\n\tCarouselNavigation,\n\tCarouselNext,\n\tCarouselPrevious,\n} from "9ui"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport function CarouselVertical() {\n\treturn (\n\t\t<div className="w-60 sm:w-80 lg:w-96">\n\t\t\t<Carousel orientation="vertical" options={{ loop: true }}>\n\t\t\t\t<CarouselContent className="aspect-video h-[-webkit-fill-available] w-full p-1">\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide} className="basis-full">\n\t\t\t\t\t\t\t<AspectRatio\n\t\t\t\t\t\t\t\tratio={16 / 9}\n\t\t\t\t\t\t\t\tclassName="rounded-lg border border-muted bg-bg"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div className="flex size-full items-center justify-center font-medium text-fg">\n\t\t\t\t\t\t\t\t\t{slide}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<CarouselNavigation className="bottom-0.5">\n\t\t\t\t\t<CarouselPrevious />\n\t\t\t\t\t<CarouselNext />\n\t\t\t\t</CarouselNavigation>\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-vertical")
		),
		title: "carousel-vertical.tsx",
	},
	"checkbox-demo": {
		content:
			'import { Checkbox } from "9ui"\n\nexport function CheckboxDemo() {\n\treturn <Checkbox />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox/checkbox-demo")
		),
		title: "checkbox-demo.tsx",
	},
	"checkbox-disabled": {
		content:
			'import { Checkbox } from "9ui"\n\nexport function CheckboxDisabled() {\n\treturn <Checkbox disabled />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox/checkbox-disabled")
		),
		title: "checkbox-disabled.tsx",
	},
	"checkbox-error": {
		content:
			'import { Checkbox } from "9ui"\n\nexport function CheckboxError() {\n\treturn <Checkbox aria-invalid />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox/checkbox-error")
		),
		title: "checkbox-error.tsx",
	},
	"checkbox-with-label": {
		content:
			'import { Checkbox, Label } from "9ui"\n\nexport function CheckboxWithLabel() {\n\treturn (\n\t\t<div className="flex items-center gap-2">\n\t\t\t<Checkbox id="terms" />\n\t\t\t<Label htmlFor="terms">Accept</Label>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox/checkbox-with-label")
		),
		title: "checkbox-with-label.tsx",
	},
	"collapsible-demo": {
		content:
			'import { useState } from "react"\nimport Monicon from "@monicon/react"\nimport { Collapsible, CollapsibleContent, CollapsibleTrigger, merge } from "9ui"\n\nexport function CollapsibleDemo() {\n\tconst [open, setOpen] = useState(false)\n\n\treturn (\n\t\t<Collapsible className="mx-auto w-40" open={open} onOpenChange={setOpen}>\n\t\t\t<CollapsibleTrigger className="flex w-full items-center justify-between px-1.5 py-1">\n\t\t\t\t<span className="text-sm font-medium">Components</span>\n\t\t\t\t<div\n\t\t\t\t\tclassName={merge("transition-all duration-200", open && "rotate-90")}\n\t\t\t\t>\n\t\t\t\t\t<Monicon name="ri:arrow-right-s-line" size={16} />\n\t\t\t\t</div>\n\t\t\t</CollapsibleTrigger>\n\t\t\t<CollapsibleContent>\n\t\t\t\t<ol className="mt-2 space-y-1">\n\t\t\t\t\t<li className="rounded border border-muted bg-subtle px-2 py-1">\n\t\t\t\t\t\tButton\n\t\t\t\t\t</li>\n\t\t\t\t\t<li className="rounded border border-muted bg-subtle px-2 py-1">\n\t\t\t\t\t\tBadge\n\t\t\t\t\t</li>\n\t\t\t\t\t<li className="rounded border border-muted bg-subtle px-2 py-1">\n\t\t\t\t\t\tBreadcrumbs\n\t\t\t\t\t</li>\n\t\t\t\t</ol>\n\t\t\t</CollapsibleContent>\n\t\t</Collapsible>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/collapsible/collapsible-demo")
		),
		title: "collapsible-demo.tsx",
	},
	"dialog-demo": {
		content:
			'import {\n\tButton,\n\tDialog,\n\tDialogContent,\n\tDialogDescription,\n\tDialogFooter,\n\tDialogTitle,\n\tDialogTrigger,\n} from "9ui"\n\nexport function DialogDemo() {\n\treturn (\n\t\t<Dialog>\n\t\t\t<DialogTrigger asChild>\n\t\t\t\t<Button variant="outline">Privacy Policy</Button>\n\t\t\t</DialogTrigger>\n\t\t\t<DialogContent>\n\t\t\t\t<DialogTitle>Privacy Policy</DialogTitle>\n\t\t\t\t<DialogDescription>\n\t\t\t\t\tPlease read our privacy policy carefully.\n\t\t\t\t</DialogDescription>\n\t\t\t\t<div className="max-h-80 overflow-y-auto text-sm text-fg">\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n\t\t\t\t\tultricies, odio quis blandit vestibulum, orci elit suscipit urna, at\n\t\t\t\t\tlobortis arcu enim vel purus. Maecenas luctus sem dui, lobortis\n\t\t\t\t\tdignissim enim consequat in. Nullam a volutpat purus. Aenean\n\t\t\t\t\tpellentesque eros nec rutrum suscipit. Fusce ac lectus volutpat,\n\t\t\t\t\tfeugiat nulla et, suscipit dui. Pellentesque habitant morbi tristique\n\t\t\t\t\tsenectus et netus et malesuada fames ac turpis egestas. Ut maximus,\n\t\t\t\t\trisus et convallis placerat, risus urna feugiat neque, in vestibulum\n\t\t\t\t\tleo arcu vitae justo. Duis magna mi, maximus at neque sed, tempor\n\t\t\t\t\tcongue ligula. In iaculis metus nec euismod egestas. Donec id\n\t\t\t\t\tporttitor nulla. Donec feugiat iaculis lacus, ut elementum dui\n\t\t\t\t\tfaucibus sed. Sed ut ipsum non tellus dignissim accumsan. Vivamus\n\t\t\t\t\tluctus malesuada lacus sed dictum.\n\t\t\t\t\t<br />\n\t\t\t\t\t<br />\n\t\t\t\t\tSed consectetur nibh mollis, ornare magna et, dictum tellus. Nam\n\t\t\t\t\tviverra dui a enim iaculis, sed blandit orci consectetur. Maecenas et\n\t\t\t\t\tnisi eleifend velit pretium eleifend sit amet eget nisl. Vestibulum\n\t\t\t\t\teget ipsum semper purus pulvinar iaculis. Sed ut odio eu felis\n\t\t\t\t\tporttitor ultrices eu sed odio. Nullam lorem sapien, pellentesque\n\t\t\t\t\tconvallis libero vel, tempus accumsan nisi. Morbi efficitur ex vitae\n\t\t\t\t\tfelis luctus cursus. Suspendisse nibh neque, gravida sed elementum\n\t\t\t\t\tullamcorper, gravida in nisi. Donec et luctus metus. Fusce sed est\n\t\t\t\t\tdictum, imperdiet nisi eu, suscipit odio. In id enim at tortor\n\t\t\t\t\tmalesuada vulputate eu eu sem. Mauris blandit faucibus euismod.\n\t\t\t\t\t<br />\n\t\t\t\t\t<br />\n\t\t\t\t\tCurabitur quam tortor, tristique euismod finibus viverra, bibendum sit\n\t\t\t\t\tamet nisl. Nulla lobortis pharetra mauris, ac semper urna tempor et.\n\t\t\t\t\tMaecenas enim magna, suscipit nec metus id, ornare pulvinar dolor.\n\t\t\t\t\tCras rhoncus ante sit amet tempus luctus. Donec in nisl a dolor auctor\n\t\t\t\t\ttincidunt. Cras at arcu tortor. Pellentesque ante felis, convallis sit\n\t\t\t\t\tamet erat id, consectetur consequat sapien. Aliquam volutpat velit in\n\t\t\t\t\test bibendum, vestibulum commodo leo interdum. Integer sodales ex eu\n\t\t\t\t\ttempus faucibus. Vestibulum ultricies erat vel leo accumsan posuere.\n\t\t\t\t\tCras commodo felis vitae lacus suscipit, in tristique lectus\n\t\t\t\t\tvenenatis. Sed et nibh urna. Praesent vitae eleifend turpis. Fusce sit\n\t\t\t\t\tamet pretium lorem, in tempus elit. Etiam at ornare est. Aenean felis\n\t\t\t\t\tarcu, fermentum scelerisque nibh at, lacinia sagittis neque.\n\t\t\t\t</div>\n\t\t\t\t<DialogFooter>\n\t\t\t\t\t<Button className="w-full" size="sm">\n\t\t\t\t\t\tAccept\n\t\t\t\t\t</Button>\n\t\t\t\t</DialogFooter>\n\t\t\t</DialogContent>\n\t\t</Dialog>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/dialog/dialog-demo")
		),
		title: "dialog-demo.tsx",
	},
	"dialog-nested": {
		content:
			'import {\n\tAvatar,\n\tAvatarFallback,\n\tAvatarImage,\n\tButton,\n\tDialog,\n\tDialogClose,\n\tDialogContent,\n\tDialogDescription,\n\tDialogFooter,\n\tDialogTitle,\n\tDialogTrigger,\n} from "9ui"\n\nexport function DialogNested() {\n\treturn (\n\t\t<Dialog>\n\t\t\t<DialogTrigger asChild>\n\t\t\t\t<Button variant="outline">View Details</Button>\n\t\t\t</DialogTrigger>\n\t\t\t<DialogContent>\n\t\t\t\t<DialogTitle>Profile</DialogTitle>\n\t\t\t\t<DialogDescription>\n\t\t\t\t\tView and edit your profile details.\n\t\t\t\t</DialogDescription>\n\t\t\t\t<div>\n\t\t\t\t\t<div className="flex items-center gap-4">\n\t\t\t\t\t\t<Avatar>\n\t\t\t\t\t\t\t<AvatarImage src="/user.png" />\n\t\t\t\t\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t\t\t\t\t</Avatar>\n\t\t\t\t\t\t<span className="text-fg">Bora Baloglu</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<DialogFooter>\n\t\t\t\t\t<Dialog>\n\t\t\t\t\t\t<DialogTrigger asChild>\n\t\t\t\t\t\t\t<Button variant="outline" size="sm">\n\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t</DialogTrigger>\n\t\t\t\t\t\t<DialogContent>\n\t\t\t\t\t\t\t<DialogTitle>Edit</DialogTitle>\n\t\t\t\t\t\t\t<DialogDescription>\n\t\t\t\t\t\t\t\tEdit the details of the item\n\t\t\t\t\t\t\t</DialogDescription>\n\t\t\t\t\t\t\t<DialogFooter>\n\t\t\t\t\t\t\t\t<DialogClose asChild>\n\t\t\t\t\t\t\t\t\t<Button size="sm" variant="ghost">\n\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t\t</DialogClose>\n\t\t\t\t\t\t\t\t<Button size="sm">Save</Button>\n\t\t\t\t\t\t\t</DialogFooter>\n\t\t\t\t\t\t</DialogContent>\n\t\t\t\t\t</Dialog>\n\t\t\t\t</DialogFooter>\n\t\t\t</DialogContent>\n\t\t</Dialog>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/dialog/dialog-nested")
		),
		title: "dialog-nested.tsx",
	},
	"dropdown-demo": {
		content:
			'"use client"\n\nimport { useState } from "react"\nimport Monicon from "@monicon/react"\nimport {\n\tButton,\n\tDropdown,\n\tDropdownCheckboxItem,\n\tDropdownContent,\n\tDropdownGroup,\n\tDropdownGroupLabel,\n\tDropdownItem,\n\tDropdownRadioGroup,\n\tDropdownRadioItem,\n\tDropdownSeparator,\n\tDropdownSubTrigger,\n\tDropdownTrigger,\n} from "9ui"\n\nexport function DropdownDemo() {\n\tconst [shuffle, setShuffle] = useState(false)\n\tconst [repeat, setRepeat] = useState(false)\n\tconst [sortBy, setSortBy] = useState("artist")\n\n\treturn (\n\t\t<Dropdown>\n\t\t\t<DropdownTrigger asChild>\n\t\t\t\t<Button>Controls</Button>\n\t\t\t</DropdownTrigger>\n\t\t\t<DropdownContent className="w-80">\n\t\t\t\t<DropdownGroup>\n\t\t\t\t\t<DropdownGroupLabel>Playback</DropdownGroupLabel>\n\t\t\t\t\t<DropdownItem>\n\t\t\t\t\t\t<Monicon name="ri:play-fill" />\n\t\t\t\t\t\tPlay\n\t\t\t\t\t</DropdownItem>\n\t\t\t\t\t<DropdownItem>\n\t\t\t\t\t\t<Monicon name="ri:pause-fill" />\n\t\t\t\t\t\tPause\n\t\t\t\t\t</DropdownItem>\n\t\t\t\t\t<DropdownItem>\n\t\t\t\t\t\t<Monicon name="ri:skip-back-fill" />\n\t\t\t\t\t\tPlay Previous\n\t\t\t\t\t</DropdownItem>\n\t\t\t\t\t<DropdownItem>\n\t\t\t\t\t\t<Monicon name="ri:skip-forward-fill" />\n\t\t\t\t\t\tPlay Next\n\t\t\t\t\t</DropdownItem>\n\t\t\t\t</DropdownGroup>\n\t\t\t\t<DropdownSeparator />\n\t\t\t\t<DropdownCheckboxItem checked={shuffle} onCheckedChange={setShuffle}>\n\t\t\t\t\tShuffle\n\t\t\t\t</DropdownCheckboxItem>\n\t\t\t\t<DropdownCheckboxItem checked={repeat} onCheckedChange={setRepeat}>\n\t\t\t\t\tRepeat\n\t\t\t\t</DropdownCheckboxItem>\n\t\t\t\t<DropdownCheckboxItem disabled>Enhanced Audio</DropdownCheckboxItem>\n\t\t\t\t<DropdownSeparator />\n\t\t\t\t<DropdownGroup>\n\t\t\t\t\t<DropdownGroupLabel>Sort by</DropdownGroupLabel>\n\t\t\t\t\t<DropdownRadioGroup value={sortBy} onValueChange={setSortBy}>\n\t\t\t\t\t\t<DropdownRadioItem value="artist">Artist</DropdownRadioItem>\n\t\t\t\t\t\t<DropdownRadioItem value="album">Repeat</DropdownRadioItem>\n\t\t\t\t\t\t<DropdownRadioItem value="title">Title</DropdownRadioItem>\n\t\t\t\t\t</DropdownRadioGroup>\n\t\t\t\t</DropdownGroup>\n\t\t\t\t<DropdownSeparator />\n\t\t\t\t<Dropdown>\n\t\t\t\t\t<DropdownSubTrigger>\n\t\t\t\t\t\t<Monicon name="ri:add-fill" />\n\t\t\t\t\t\tAdd to Playlist\n\t\t\t\t\t</DropdownSubTrigger>\n\t\t\t\t\t<DropdownContent>\n\t\t\t\t\t\t<DropdownItem>Jazz</DropdownItem>\n\t\t\t\t\t\t<DropdownItem>Rock</DropdownItem>\n\t\t\t\t\t\t<DropdownItem>Pop</DropdownItem>\n\t\t\t\t\t</DropdownContent>\n\t\t\t\t</Dropdown>\n\t\t\t</DropdownContent>\n\t\t</Dropdown>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/dropdown/dropdown-demo")
		),
		title: "dropdown-demo.tsx",
	},
	"form-demo": {
		content:
			'"use client"\n\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport {\n\tButton,\n\tField,\n\tFieldContent,\n\tFieldControl,\n\tFieldDescription,\n\tFieldError,\n\tFieldLabel,\n\tForm,\n\tInput,\n} from "9ui"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\n\nconst schema = z.object({\n\tdisplayName: z\n\t\t.string()\n\t\t.min(3, { message: "Please enter at least 3 characters." }),\n\temail: z.string().email({ message: "Please enter a valid email address." }),\n})\n\ntype FormValues = z.infer<typeof schema>\n\nexport function FormDemo() {\n\tconst form = useForm<FormValues>({\n\t\tresolver: zodResolver(schema),\n\t\tdefaultValues: {\n\t\t\tdisplayName: "",\n\t\t\temail: "",\n\t\t},\n\t})\n\n\tconst onSubmit = (data: FormValues) => {\n\t\tconsole.log(data)\n\t}\n\n\treturn (\n\t\t<Form\n\t\t\tclassName="flex w-96 flex-col gap-4"\n\t\t\tform={form}\n\t\t\tonSubmit={form.handleSubmit(onSubmit)}\n\t\t>\n\t\t\t<Field\n\t\t\t\tname="displayName"\n\t\t\t\tcontrol={form.control}\n\t\t\t\trender={({ field }) => (\n\t\t\t\t\t<FieldContent>\n\t\t\t\t\t\t<FieldLabel>Display Name</FieldLabel>\n\t\t\t\t\t\t<FieldControl>\n\t\t\t\t\t\t\t<Input className="w-full" placeholder="borabalogluu" {...field} />\n\t\t\t\t\t\t</FieldControl>\n\t\t\t\t\t\t<FieldDescription>\n\t\t\t\t\t\t\tThis is the name that will be displayed to other users.\n\t\t\t\t\t\t</FieldDescription>\n\t\t\t\t\t\t<FieldError />\n\t\t\t\t\t</FieldContent>\n\t\t\t\t)}\n\t\t\t/>\n\t\t\t<Field\n\t\t\t\tname="email"\n\t\t\t\tcontrol={form.control}\n\t\t\t\trender={({ field }) => (\n\t\t\t\t\t<FieldContent>\n\t\t\t\t\t\t<FieldLabel>Email</FieldLabel>\n\t\t\t\t\t\t<FieldControl>\n\t\t\t\t\t\t\t<Input\n\t\t\t\t\t\t\t\tclassName="w-full"\n\t\t\t\t\t\t\t\tplaceholder="your@email.com"\n\t\t\t\t\t\t\t\t{...field}\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</FieldControl>\n\t\t\t\t\t\t<FieldDescription>Enter your email address</FieldDescription>\n\t\t\t\t\t\t<FieldError />\n\t\t\t\t\t</FieldContent>\n\t\t\t\t)}\n\t\t\t/>\n\t\t\t<Button type="submit">Submit</Button>\n\t\t</Form>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/form/form-demo")),
		title: "form-demo.tsx",
	},
	"input-demo": {
		content:
			'import { Input } from "9ui"\n\nexport function InputDemo() {\n\treturn <Input placeholder="Name" className="w-80" />\n}\n',
		component: React.lazy(() => import("@/components/demos/input/input-demo")),
		title: "input-demo.tsx",
	},
	"input-disabled": {
		content:
			'import { Input } from "9ui"\n\nexport function InputDisabled() {\n\treturn <Input className="w-80" placeholder="Name" disabled />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/input/input-disabled")
		),
		title: "input-disabled.tsx",
	},
	"input-error": {
		content:
			'import { Input } from "9ui"\n\nexport function InputError() {\n\treturn <Input className="w-80" placeholder="Name" aria-invalid />\n}\n',
		component: React.lazy(() => import("@/components/demos/input/input-error")),
		title: "input-error.tsx",
	},
	"input-with-icons": {
		content:
			'import { useState } from "react"\nimport Monicon from "@monicon/react"\nimport { Input, InputIcon } from "9ui"\n\nexport function InputWithIcons() {\n\tconst [isPasswordVisible, setIsPasswordVisible] = useState(false)\n\n\tconst togglePasswordVisibility = () => {\n\t\tsetIsPasswordVisible(!isPasswordVisible)\n\t}\n\n\tconst passwordType = isPasswordVisible ? "text" : "password"\n\tconst eyeIcon = isPasswordVisible ? "ri:eye-fill" : "ri:eye-close-fill"\n\n\treturn (\n\t\t<Input placeholder="Password" className="w-80" type={passwordType}>\n\t\t\t<InputIcon side="leading">\n\t\t\t\t<Monicon name="ri:lock-password-fill" />\n\t\t\t</InputIcon>\n\t\t\t<InputIcon\n\t\t\t\tside="trailing"\n\t\t\t\tclassName="cursor-pointer transition-colors duration-200 hover:[&>svg]:text-fg"\n\t\t\t\tonClick={togglePasswordVisibility}\n\t\t\t>\n\t\t\t\t<Monicon name={eyeIcon} />\n\t\t\t</InputIcon>\n\t\t</Input>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/input/input-with-icons")
		),
		title: "input-with-icons.tsx",
	},
	"input-otp-custom": {
		content:
			'import { InputOTP, InputOTPGroup, InputOTPSlot } from "9ui"\n\nexport function InputOTPDemo() {\n\treturn (\n\t\t<InputOTP maxLength={4}>\n\t\t\t<InputOTPGroup className="gap-0">\n\t\t\t\t<InputOTPSlot className="rounded-r-none" index={0} />\n\t\t\t\t<InputOTPSlot className="rounded-none border-x-0" index={1} />\n\t\t\t\t<InputOTPSlot className="rounded-none border-r-0" index={2} />\n\t\t\t\t<InputOTPSlot className="rounded-l-none" index={3} />\n\t\t\t</InputOTPGroup>\n\t\t</InputOTP>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/input-otp/input-otp-custom")
		),
		title: "input-otp-custom.tsx",
	},
	"input-otp-demo": {
		content:
			'import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "9ui"\n\nexport function InputOTPDemo() {\n\treturn (\n\t\t<InputOTP maxLength={6}>\n\t\t\t<InputOTPGroup>\n\t\t\t\t<InputOTPSlot index={0} />\n\t\t\t\t<InputOTPSlot index={1} />\n\t\t\t\t<InputOTPSlot index={2} />\n\t\t\t</InputOTPGroup>\n\t\t\t<InputOTPSeparator />\n\t\t\t<InputOTPGroup>\n\t\t\t\t<InputOTPSlot index={3} />\n\t\t\t\t<InputOTPSlot index={4} />\n\t\t\t\t<InputOTPSlot index={5} />\n\t\t\t</InputOTPGroup>\n\t\t</InputOTP>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/input-otp/input-otp-demo")
		),
		title: "input-otp-demo.tsx",
	},
	"popover-demo": {
		content:
			'import Monicon from "@monicon/react"\nimport {\n\tButton,\n\tInput,\n\tPopover,\n\tPopoverContent,\n\tPopoverDescription,\n\tPopoverTitle,\n\tPopoverTrigger,\n} from "9ui"\n\nexport function PopoverDemo() {\n\tconst copyToClipboard = () => {\n\t\tnavigator.clipboard.writeText(window.location.href)\n\t}\n\n\treturn (\n\t\t<Popover>\n\t\t\t<PopoverTrigger className="cursor-pointer rounded-md border border-muted p-2 transition-colors hover:bg-subtle">\n\t\t\t\t<Monicon name="ri:share-box-fill" />\n\t\t\t</PopoverTrigger>\n\t\t\t<PopoverContent className="w-[calc(100vw-4rem)] sm:w-[500px]">\n\t\t\t\t<div className="flex flex-col space-y-3.5">\n\t\t\t\t\t<div className="flex flex-col space-y-1">\n\t\t\t\t\t\t<PopoverTitle>Share</PopoverTitle>\n\t\t\t\t\t\t<PopoverDescription>Share this component.</PopoverDescription>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className="flex w-full gap-2">\n\t\t\t\t\t\t<Input\n\t\t\t\t\t\t\tinputWrapperClassName="w-full"\n\t\t\t\t\t\t\tdefaultValue={window.location.href}\n\t\t\t\t\t\t\tautoFocus={false}\n\t\t\t\t\t\t\treadOnly\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Button\n\t\t\t\t\t\t\tclassName="shrink-0"\n\t\t\t\t\t\t\tsize="icon-md"\n\t\t\t\t\t\t\tonClick={copyToClipboard}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<Monicon name="ri:file-copy-fill" />\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</PopoverContent>\n\t\t</Popover>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/popover/popover-demo")
		),
		title: "popover-demo.tsx",
	},
	"preview-card-demo": {
		content:
			'"use client"\n\nimport Monicon from "@monicon/react"\nimport { PreviewCard, PreviewCardContent, PreviewCardTrigger } from "9ui"\n\nimport Logo from "@/components/logo"\n\nexport function PreviewCardDemo() {\n\treturn (\n\t\t<PreviewCard>\n\t\t\t<p className="max-w-80 text-balance text-fg">\n\t\t\t\tThis is a preview card component from{" "}\n\t\t\t\t<PreviewCardTrigger className="cursor-pointer underline underline-offset-2">\n\t\t\t\t\t9ui\n\t\t\t\t</PreviewCardTrigger>\n\t\t\t\t.\n\t\t\t</p>\n\t\t\t<PreviewCardContent className="max-w-80 text-sm">\n\t\t\t\t<Logo className="mx-auto w-10" />\n\t\t\t\t<p className="mt-2">\n\t\t\t\t\tBeautiful, customizable components built with{" "}\n\t\t\t\t\t<a\n\t\t\t\t\t\thref="https://base-ui.com"\n\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\tBase UI\n\t\t\t\t\t</a>{" "}\n\t\t\t\t\tand{" "}\n\t\t\t\t\t<a\n\t\t\t\t\t\thref="https://tailwindcss.com"\n\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\tTailwind CSS\n\t\t\t\t\t</a>\n\t\t\t\t\t.\n\t\t\t\t</p>\n\t\t\t\t<div className="mt-2 flex flex-col gap-2 text-sm">\n\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t<span className="flex items-center gap-1 text-muted-fg">\n\t\t\t\t\t\t\t<Monicon name="ri:user-3-fill" size={14} />\n\t\t\t\t\t\t\tCreator:\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\thref="https://x.com/borabalogluu"\n\t\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tBora Baloglu\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t<span className="flex items-center gap-1 text-muted-fg">\n\t\t\t\t\t\t\t<Monicon name="ri:github-fill" size={14} />\n\t\t\t\t\t\t\tSource code:\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\thref="https://github.com/borabaloglu/9ui"\n\t\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tGithub\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t<span className="flex items-center gap-1 text-muted-fg">\n\t\t\t\t\t\t\t<Monicon name="ri:global-fill" size={14} />\n\t\t\t\t\t\t\tWebsite\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\thref="https://9ui.vercel.app"\n\t\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t9ui.vercel.app\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</PreviewCardContent>\n\t\t</PreviewCard>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/preview-card/preview-card-demo")
		),
		title: "preview-card-demo.tsx",
	},
	"progress-demo": {
		content:
			'import * as React from "react"\nimport { Progress } from "9ui"\n\nexport function ProgressDemo() {\n\tconst [value, setValue] = React.useState(0)\n\n\tReact.useEffect(() => {\n\t\tconst interval = setInterval(() => {\n\t\t\tsetValue((prev) => (prev === 100 ? 100 : prev + 2))\n\t\t}, 100)\n\t\treturn () => clearInterval(interval)\n\t}, [])\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Progress value={value} />\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/progress/progress-demo")
		),
		title: "progress-demo.tsx",
	},
	"progress-with-label": {
		content:
			'import * as React from "react"\nimport { Progress, ProgressLabel } from "9ui"\n\nexport function ProgressDemo() {\n\tconst [value, setValue] = React.useState(0)\n\n\tReact.useEffect(() => {\n\t\tconst interval = setInterval(() => {\n\t\t\tsetValue((prev) => (prev === 100 ? 100 : prev + 2))\n\t\t}, 100)\n\t\treturn () => clearInterval(interval)\n\t}, [])\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Progress value={value}>\n\t\t\t\t<ProgressLabel>{value}%</ProgressLabel>\n\t\t\t</Progress>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/progress/progress-with-label")
		),
		title: "progress-with-label.tsx",
	},
	"scroll-area-demo": {
		content:
			'import { ScrollArea, Separator } from "9ui"\n\nconst versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`)\n\nexport function ScrollAreaDemo() {\n\treturn (\n\t\t<ScrollArea className="h-60 w-full max-w-60 rounded-lg border border-muted p-2">\n\t\t\t<h4 className="text-sm font-medium text-fg">Versions</h4>\n\t\t\t<Separator className="my-2" />\n\t\t\t<div className="mt-2 flex flex-col gap-2 text-sm text-fg">\n\t\t\t\t{versions.map((version) => (\n\t\t\t\t\t<div key={version}>{version}</div>\n\t\t\t\t))}\n\t\t\t</div>\n\t\t</ScrollArea>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/scroll-area/scroll-area-demo")
		),
		title: "scroll-area-demo.tsx",
	},
	"scroll-area-horizontal": {
		content:
			'import { ScrollArea } from "9ui"\n\nconst versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`).join(\n\t", "\n)\n\nexport function ScrollAreaHorizontal() {\n\treturn (\n\t\t<ScrollArea\n\t\t\tclassName="h-fit w-full max-w-60 rounded-lg border border-muted p-2"\n\t\t\torientation="horizontal"\n\t\t>\n\t\t\t<div className="mt-2 flex flex-col gap-2 text-nowrap pb-2 text-sm text-fg">\n\t\t\t\t{versions}\n\t\t\t</div>\n\t\t</ScrollArea>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/scroll-area/scroll-area-horizontal")
		),
		title: "scroll-area-horizontal.tsx",
	},
	"select-demo": {
		content:
			'import {\n\tSelect,\n\tSelectContent,\n\tSelectItem,\n\tSelectTrigger,\n\tSelectValue,\n} from "9ui"\n\nexport function SelectDemo() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Select>\n\t\t\t\t<SelectTrigger>\n\t\t\t\t\t<SelectValue placeholder="Select a fruit" />\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent>\n\t\t\t\t\t<SelectItem value="apple">Apple</SelectItem>\n\t\t\t\t\t<SelectItem value="banana">Banana</SelectItem>\n\t\t\t\t\t<SelectItem value="cherry">Cherry</SelectItem>\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/select/select-demo")
		),
		title: "select-demo.tsx",
	},
	"select-with-custom-value": {
		content:
			'import { useState } from "react"\nimport Image from "next/image"\nimport {\n\tSelect,\n\tSelectContent,\n\tSelectItem,\n\tSelectTrigger,\n\tSelectValue,\n} from "9ui"\n\nconst users = {\n\t"karen-smith": {\n\t\tname: "Karen Smith",\n\t\timage: "/memoji-1.png",\n\t},\n\t"chris-williams": {\n\t\tname: "Chris Williams",\n\t\timage: "/memoji-3.png",\n\t},\n\t"melissa-johnson": {\n\t\tname: "Melissa Johnson",\n\t\timage: "/memoji-2.png",\n\t},\n\t"frank-lee": {\n\t\tname: "Frank Lee",\n\t\timage: "/memoji-4.png",\n\t},\n}\n\nexport function SelectWithCustomValue() {\n\tconst [selected, setSelected] = useState<keyof typeof users | null>(null)\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Select value={selected} onValueChange={setSelected}>\n\t\t\t\t<SelectTrigger>\n\t\t\t\t\t<SelectValue>\n\t\t\t\t\t\t{() =>\n\t\t\t\t\t\t\tselected ? (\n\t\t\t\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t\t\t\t<Image\n\t\t\t\t\t\t\t\t\t\tsrc={users[selected].image}\n\t\t\t\t\t\t\t\t\t\talt={users[selected].name}\n\t\t\t\t\t\t\t\t\t\twidth={16}\n\t\t\t\t\t\t\t\t\t\theight={16}\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t{users[selected].name}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t) : (\n\t\t\t\t\t\t\t\t"Assign to"\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t}\n\t\t\t\t\t</SelectValue>\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent>\n\t\t\t\t\t{Object.entries(users).map(([id, user]) => (\n\t\t\t\t\t\t<SelectItem key={id} value={id}>\n\t\t\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t\t\t<Image\n\t\t\t\t\t\t\t\t\tsrc={user.image}\n\t\t\t\t\t\t\t\t\talt={user.name}\n\t\t\t\t\t\t\t\t\twidth={16}\n\t\t\t\t\t\t\t\t\theight={16}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t{user.name}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</SelectItem>\n\t\t\t\t\t))}\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/select/select-with-custom-value")
		),
		title: "select-with-custom-value.tsx",
	},
	"select-with-groups": {
		content:
			'import {\n\tSelect,\n\tSelectContent,\n\tSelectGroup,\n\tSelectGroupLabel,\n\tSelectItem,\n\tSelectTrigger,\n\tSelectValue,\n} from "9ui"\n\nexport function SelectWithGroups() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Select>\n\t\t\t\t<SelectTrigger>\n\t\t\t\t\t<SelectValue placeholder="Select an option" />\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent>\n\t\t\t\t\t<SelectGroup>\n\t\t\t\t\t\t<SelectGroupLabel>Fruits</SelectGroupLabel>\n\t\t\t\t\t\t<SelectItem value="apple">Apple</SelectItem>\n\t\t\t\t\t\t<SelectItem value="banana">Banana</SelectItem>\n\t\t\t\t\t\t<SelectItem value="cherry">Cherry</SelectItem>\n\t\t\t\t\t</SelectGroup>\n\t\t\t\t\t<SelectGroup>\n\t\t\t\t\t\t<SelectGroupLabel>Vegetables</SelectGroupLabel>\n\t\t\t\t\t\t<SelectItem value="carrot">Carrot</SelectItem>\n\t\t\t\t\t\t<SelectItem value="potato">Potato</SelectItem>\n\t\t\t\t\t\t<SelectItem value="tomato">Tomato</SelectItem>\n\t\t\t\t\t</SelectGroup>\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/select/select-with-groups")
		),
		title: "select-with-groups.tsx",
	},
	"separator-demo": {
		content:
			'import { Separator } from "9ui"\n\nexport function SeparatorDemo() {\n\treturn (\n\t\t<div>\n\t\t\t<p>9ui is a component library for building modern web applications.</p>\n\t\t\t<Separator className="my-2.5" />\n\t\t\t<div className="flex gap-2.5">\n\t\t\t\t<p>Website</p>\n\t\t\t\t<Separator orientation="vertical" />\n\t\t\t\t<p>Documentation</p>\n\t\t\t\t<Separator orientation="vertical" />\n\t\t\t\t<p>Community</p>\n\t\t\t</div>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/separator/separator-demo")
		),
		title: "separator-demo.tsx",
	},
	"sheet-demo": {
		content:
			'"use client"\n\nimport {\n\tButton,\n\tLabel,\n\tSheet,\n\tSheetBackdrop,\n\tSheetClose,\n\tSheetContent,\n\tSheetDescription,\n\tSheetFooter,\n\tSheetHeader,\n\tSheetPortal,\n\tSheetTitle,\n\tSheetTrigger,\n\tTextarea,\n} from "9ui"\n\nexport function SheetDemo() {\n\treturn (\n\t\t<Sheet>\n\t\t\t<SheetTrigger asChild>\n\t\t\t\t<Button>Open Sheet</Button>\n\t\t\t</SheetTrigger>\n\t\t\t<SheetPortal>\n\t\t\t\t<SheetBackdrop />\n\t\t\t\t<SheetContent>\n\t\t\t\t\t<SheetClose />\n\t\t\t\t\t<SheetHeader>\n\t\t\t\t\t\t<SheetTitle>Submit Feedback</SheetTitle>\n\t\t\t\t\t\t<SheetDescription>\n\t\t\t\t\t\t\tPlease share your feedback with us to help improve our service.\n\t\t\t\t\t\t</SheetDescription>\n\t\t\t\t\t</SheetHeader>\n\t\t\t\t\t<div className="my-4 space-y-2">\n\t\t\t\t\t\t<Label htmlFor="feedback">Your Feedback</Label>\n\t\t\t\t\t\t<Textarea id="feedback" placeholder="Type your feedback here." />\n\t\t\t\t\t</div>\n\t\t\t\t\t<SheetFooter>\n\t\t\t\t\t\t<SheetClose asChild>\n\t\t\t\t\t\t\t<Button size="sm" variant="destructive">\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t</SheetClose>\n\t\t\t\t\t\t<Button size="sm">Submit</Button>\n\t\t\t\t\t</SheetFooter>\n\t\t\t\t</SheetContent>\n\t\t\t</SheetPortal>\n\t\t</Sheet>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/sheet/sheet-demo")),
		title: "sheet-demo.tsx",
	},
	"sheet-sides": {
		content:
			'"use client"\n\nimport {\n\tButton,\n\tLabel,\n\tSheet,\n\tSheetBackdrop,\n\tSheetClose,\n\tSheetContent,\n\tSheetDescription,\n\tSheetFooter,\n\tSheetHeader,\n\tSheetPortal,\n\tSheetTitle,\n\tSheetTrigger,\n\tTextarea,\n} from "9ui"\n\nconst SHEET_SIDES = ["top", "right", "bottom", "left"] as const\n\nexport function SheetSides() {\n\treturn (\n\t\t<div className="mx-auto mt-10 grid max-w-sm grid-cols-2 gap-2">\n\t\t\t{SHEET_SIDES.map((side) => (\n\t\t\t\t<Sheet key={side}>\n\t\t\t\t\t<SheetTrigger asChild>\n\t\t\t\t\t\t<Button className="w-full">{side}</Button>\n\t\t\t\t\t</SheetTrigger>\n\t\t\t\t\t<SheetPortal>\n\t\t\t\t\t\t<SheetBackdrop />\n\t\t\t\t\t\t<SheetContent side={side}>\n\t\t\t\t\t\t\t<SheetClose />\n\t\t\t\t\t\t\t<SheetHeader>\n\t\t\t\t\t\t\t\t<SheetTitle>Submit Feedback</SheetTitle>\n\t\t\t\t\t\t\t\t<SheetDescription>\n\t\t\t\t\t\t\t\t\tPlease share your feedback with us to help improve our\n\t\t\t\t\t\t\t\t\tservice.\n\t\t\t\t\t\t\t\t</SheetDescription>\n\t\t\t\t\t\t\t</SheetHeader>\n\t\t\t\t\t\t\t<div className="my-4 space-y-2">\n\t\t\t\t\t\t\t\t<Label htmlFor="feedback">Your Feedback</Label>\n\t\t\t\t\t\t\t\t<Textarea\n\t\t\t\t\t\t\t\t\tid="feedback"\n\t\t\t\t\t\t\t\t\tplaceholder="Type your feedback here."\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<SheetFooter>\n\t\t\t\t\t\t\t\t<SheetClose asChild>\n\t\t\t\t\t\t\t\t\t<Button size="sm" variant="destructive">\n\t\t\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t\t</SheetClose>\n\t\t\t\t\t\t\t\t<Button size="sm">Submit</Button>\n\t\t\t\t\t\t\t</SheetFooter>\n\t\t\t\t\t\t</SheetContent>\n\t\t\t\t\t</SheetPortal>\n\t\t\t\t</Sheet>\n\t\t\t))}\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/sheet/sheet-sides")),
		title: "sheet-sides.tsx",
	},
	"slider-demo": {
		content:
			'import { Slider } from "9ui"\n\nexport function SliderDemo() {\n\treturn <Slider defaultValue={50} />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/slider/slider-demo")
		),
		title: "slider-demo.tsx",
	},
	"slider-disabled": {
		content:
			'import { Slider } from "9ui"\n\nexport function SliderDisabled() {\n\treturn <Slider defaultValue={50} disabled />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/slider/slider-disabled")
		),
		title: "slider-disabled.tsx",
	},
	"slider-range": {
		content:
			'import { Slider } from "9ui"\n\nexport function SliderRange() {\n\treturn <Slider defaultValue={[20, 80]} />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/slider/slider-range")
		),
		title: "slider-range.tsx",
	},
	"slider-with-label": {
		content:
			'import { Slider, SliderLabel } from "9ui"\n\nexport function SliderWithLabel() {\n\treturn (\n\t\t<Slider defaultValue={50}>\n\t\t\t<div className="flex justify-between">\n\t\t\t\t<span className="text-xs font-medium text-muted-fg">Opacity</span>\n\t\t\t\t<SliderLabel />\n\t\t\t</div>\n\t\t</Slider>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/slider/slider-with-label")
		),
		title: "slider-with-label.tsx",
	},
	"switch-demo": {
		content:
			'import { Switch } from "9ui"\n\nexport function SwitchDemo() {\n\treturn <Switch />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/switch/switch-demo")
		),
		title: "switch-demo.tsx",
	},
	"switch-disabled": {
		content:
			'import { Switch } from "9ui"\n\nexport function SwitchDisabled() {\n\treturn <Switch disabled />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/switch/switch-disabled")
		),
		title: "switch-disabled.tsx",
	},
	"switch-with-label": {
		content:
			'import { Label, Switch } from "9ui"\n\nexport function SwitchWithLabel() {\n\treturn (\n\t\t<div className="flex items-center gap-2">\n\t\t\t<Switch id="enable-notifications" />\n\t\t\t<Label htmlFor="enable-notifications">Enable notifications</Label>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/switch/switch-with-label")
		),
		title: "switch-with-label.tsx",
	},
	"tabs-demo": {
		content:
			'import {\n\tButton,\n\tInput,\n\tLabel,\n\tTab,\n\tTabContent,\n\tTabIndicator,\n\tTabs,\n\tTabsList,\n} from "9ui"\n\nexport function TabsDemo() {\n\treturn (\n\t\t<Tabs className="w-full max-w-96" defaultValue="login">\n\t\t\t<TabsList>\n\t\t\t\t<Tab value="login">Login</Tab>\n\t\t\t\t<Tab value="signup">Sign up</Tab>\n\t\t\t\t<TabIndicator />\n\t\t\t</TabsList>\n\t\t\t<TabContent value="login" className="space-y-4">\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<h4 className="text-2xl font-bold">Login</h4>\n\t\t\t\t\t<p className="text-sm text-muted-fg">\n\t\t\t\t\t\tLogin to your account to continue\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t</div>\n\t\t\t\t<Button className="w-full">Login</Button>\n\t\t\t</TabContent>\n\t\t\t<TabContent value="signup" className="space-y-4">\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<h4 className="text-2xl font-bold">Sign up</h4>\n\t\t\t\t\t<p className="text-sm text-muted-fg">Sign up to create an account</p>\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t</div>\n\t\t\t\t<Button className="w-full">Sign up</Button>\n\t\t\t</TabContent>\n\t\t</Tabs>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/tabs/tabs-demo")),
		title: "tabs-demo.tsx",
	},
	"tabs-disabled": {
		content:
			'import {\n\tButton,\n\tInput,\n\tLabel,\n\tTab,\n\tTabContent,\n\tTabIndicator,\n\tTabs,\n\tTabsList,\n\tTooltip,\n\tTooltipContent,\n\tTooltipTrigger,\n} from "9ui"\n\nexport function TabsUnderline() {\n\treturn (\n\t\t<Tabs className="w-full max-w-96" defaultValue="login">\n\t\t\t<TabsList>\n\t\t\t\t<Tab value="login">Login</Tab>\n\t\t\t\t<Tooltip>\n\t\t\t\t\t<TooltipTrigger className="w-full">\n\t\t\t\t\t\t<Tab disabled>Sign up</Tab>\n\t\t\t\t\t</TooltipTrigger>\n\t\t\t\t\t<TooltipContent className="w-64">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\tSign ups are temporarily disabled. Please check back later.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</TooltipContent>\n\t\t\t\t</Tooltip>\n\t\t\t\t<TabIndicator />\n\t\t\t</TabsList>\n\t\t\t<TabContent value="login" className="space-y-4">\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<h4 className="text-2xl font-bold">Login</h4>\n\t\t\t\t\t<p className="text-sm text-muted-fg">\n\t\t\t\t\t\tLogin to your account to continue\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t</div>\n\t\t\t\t<Button className="w-full">Login</Button>\n\t\t\t</TabContent>\n\t\t</Tabs>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/tabs/tabs-disabled")
		),
		title: "tabs-disabled.tsx",
	},
	"tabs-underline": {
		content:
			'import {\n\tButton,\n\tInput,\n\tLabel,\n\tTab,\n\tTabContent,\n\tTabIndicator,\n\tTabs,\n\tTabsList,\n} from "9ui"\n\nexport function TabsUnderline() {\n\treturn (\n\t\t<Tabs className="w-full max-w-96" defaultValue="login" variant="underline">\n\t\t\t<TabsList>\n\t\t\t\t<Tab value="login">Login</Tab>\n\t\t\t\t<Tab value="signup">Sign up</Tab>\n\t\t\t\t<TabIndicator />\n\t\t\t</TabsList>\n\t\t\t<TabContent value="login" className="space-y-4">\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<h4 className="text-2xl font-bold">Login</h4>\n\t\t\t\t\t<p className="text-sm text-muted-fg">\n\t\t\t\t\t\tLogin to your account to continue\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t</div>\n\t\t\t\t<Button className="w-full">Login</Button>\n\t\t\t</TabContent>\n\t\t\t<TabContent value="signup" className="space-y-4">\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<h4 className="text-2xl font-bold">Sign up</h4>\n\t\t\t\t\t<p className="text-sm text-muted-fg">Sign up to create an account</p>\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t</div>\n\t\t\t\t<Button className="w-full">Sign up</Button>\n\t\t\t</TabContent>\n\t\t</Tabs>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/tabs/tabs-underline")
		),
		title: "tabs-underline.tsx",
	},
	"textarea-demo": {
		content:
			'import { Textarea } from "9ui"\n\nexport function TextareaDemo() {\n\treturn <Textarea className="w-80" placeholder="Enter your message..." />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/textarea/textarea-demo")
		),
		title: "textarea-demo.tsx",
	},
	"textarea-disabled": {
		content:
			'import { Textarea } from "9ui"\n\nexport function TextareaDisabled() {\n\treturn (\n\t\t<Textarea className="w-80" placeholder="Enter your message..." disabled />\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/textarea/textarea-disabled")
		),
		title: "textarea-disabled.tsx",
	},
	"textarea-error": {
		content:
			'import { Textarea } from "9ui"\n\nexport function TextareaError() {\n\treturn (\n\t\t<Textarea\n\t\t\tclassName="w-80"\n\t\t\tplaceholder="Enter your message..."\n\t\t\taria-invalid\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/textarea/textarea-error")
		),
		title: "textarea-error.tsx",
	},
	"toggle-custom-control": {
		content:
			'"use client"\n\nimport { useState } from "react"\nimport Monicon from "@monicon/react"\nimport { Toggle } from "9ui"\n\nexport function ToggleCustomControl() {\n\tconst [isPinned, setIsPinned] = useState(false)\n\n\treturn (\n\t\t<Toggle aria-label="Pin" pressed={isPinned} onPressedChange={setIsPinned}>\n\t\t\t<Monicon name={isPinned ? "ri:unpin-line" : "ri:pushpin-line"} />\n\t\t</Toggle>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-custom-control")
		),
		title: "toggle-custom-control.tsx",
	},
	"toggle-demo": {
		content:
			'import Monicon from "@monicon/react"\nimport { Toggle } from "9ui"\n\nexport function ToggleDemo() {\n\treturn (\n\t\t<Toggle aria-label="Pin">\n\t\t\t<Monicon name="ri:pushpin-line" />\n\t\t</Toggle>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-demo")
		),
		title: "toggle-demo.tsx",
	},
	"toggle-disabled": {
		content:
			'import Monicon from "@monicon/react"\nimport { Toggle } from "9ui"\n\nexport function ToggleDisabled() {\n\treturn (\n\t\t<Toggle aria-label="Pin" disabled>\n\t\t\t<Monicon name="ri:pushpin-line" />\n\t\t</Toggle>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-disabled")
		),
		title: "toggle-disabled.tsx",
	},
	"toggle-sizes": {
		content:
			'import Monicon from "@monicon/react"\nimport { Toggle } from "9ui"\n\nexport function ToggleSizes() {\n\treturn (\n\t\t<div className="flex items-center gap-4">\n\t\t\t<Toggle aria-label="Pin" size="sm">\n\t\t\t\t<Monicon name="ri:pushpin-line" />\n\t\t\t</Toggle>\n\t\t\t<Toggle aria-label="Pin" size="md">\n\t\t\t\t<Monicon name="ri:pushpin-line" />\n\t\t\t</Toggle>\n\t\t\t<Toggle aria-label="Pin" size="lg">\n\t\t\t\t<Monicon name="ri:pushpin-line" />\n\t\t\t</Toggle>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-sizes")
		),
		title: "toggle-sizes.tsx",
	},
	"toggle-group-demo": {
		content:
			'import Monicon from "@monicon/react"\nimport { Toggle, ToggleGroup } from "9ui"\n\nexport function ToggleGroupDemo() {\n\treturn (\n\t\t<ToggleGroup>\n\t\t\t<Toggle value="left">\n\t\t\t\t<Monicon name="ri:align-left" />\n\t\t\t</Toggle>\n\t\t\t<Toggle value="center">\n\t\t\t\t<Monicon name="ri:align-center" />\n\t\t\t</Toggle>\n\t\t\t<Toggle value="right">\n\t\t\t\t<Monicon name="ri:align-right" />\n\t\t\t</Toggle>\n\t\t</ToggleGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle-group/toggle-group-demo")
		),
		title: "toggle-group-demo.tsx",
	},
	"toggle-group-multiple": {
		content:
			'import Monicon from "@monicon/react"\nimport { Toggle, ToggleGroup } from "9ui"\n\nexport function ToggleGroupMultiple() {\n\treturn (\n\t\t<ToggleGroup toggleMultiple>\n\t\t\t<Toggle value="bold">\n\t\t\t\t<Monicon name="ri:bold" />\n\t\t\t</Toggle>\n\t\t\t<Toggle value="italic">\n\t\t\t\t<Monicon name="ri:italic" />\n\t\t\t</Toggle>\n\t\t\t<Toggle value="underline">\n\t\t\t\t<Monicon name="ri:underline" />\n\t\t\t</Toggle>\n\t\t</ToggleGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle-group/toggle-group-multiple")
		),
		title: "toggle-group-multiple.tsx",
	},
	"tooltip-custom-position": {
		content:
			'import { Tooltip, TooltipContent, TooltipTrigger } from "9ui"\n\nconst positions = ["top", "right", "bottom", "left"] as const\n\nexport function TooltipCustomPosition() {\n\treturn (\n\t\t<div className="grid grid-cols-2 gap-2">\n\t\t\t{positions.map((position) => (\n\t\t\t\t<Tooltip key={position}>\n\t\t\t\t\t<TooltipTrigger className="rounded-md border border-muted bg-bg px-2 py-1.5 text-sm text-fg">\n\t\t\t\t\t\t{position}\n\t\t\t\t\t</TooltipTrigger>\n\t\t\t\t\t<TooltipContent\n\t\t\t\t\t\tclassName="max-w-56"\n\t\t\t\t\t\tpositionerProps={{ side: position }}\n\t\t\t\t\t>\n\t\t\t\t\t\t<span>This tooltip is positioned at the {position} side.</span>\n\t\t\t\t\t</TooltipContent>\n\t\t\t\t</Tooltip>\n\t\t\t))}\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/tooltip/tooltip-custom-position")
		),
		title: "tooltip-custom-position.tsx",
	},
	"tooltip-demo": {
		content:
			'import Monicon from "@monicon/react"\nimport { Tooltip, TooltipContent, TooltipTrigger } from "9ui"\n\nexport function TooltipDemo() {\n\treturn (\n\t\t<Tooltip>\n\t\t\t<TooltipTrigger className="rounded-md border border-muted p-2">\n\t\t\t\t<Monicon name="ri:twitter-x-fill" />\n\t\t\t</TooltipTrigger>\n\t\t\t<TooltipContent>\n\t\t\t\t<span>\n\t\t\t\t\tFollow me{" "}\n\t\t\t\t\t<a\n\t\t\t\t\t\tclassName="font-medium"\n\t\t\t\t\t\thref="https://x.com/borabalogluu"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\t@borabalogluu\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</TooltipContent>\n\t\t</Tooltip>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/tooltip/tooltip-demo")
		),
		title: "tooltip-demo.tsx",
	},
}
