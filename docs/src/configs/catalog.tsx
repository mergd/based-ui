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
	"aspect-ratio-demo": {
		content:
			'import { AspectRatio } from "9ui"\n\nexport function AspectRatioDemo() {\n\treturn (\n\t\t<AspectRatio ratio={16 / 9} className="rounded-lg bg-primary">\n\t\t\t<div className="flex size-full items-center justify-center">Content</div>\n\t\t</AspectRatio>\n\t)\n}\n',
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
			'import { Badge } from "9ui"\n\nexport function BadgeCustom() {\n\treturn (\n\t\t<div className="flex items-center justify-center gap-2 text-xs text-secondary-fg">\n\t\t\t<Badge variant="danger" className="gap-x-1 p-0.5 pr-2">\n\t\t\t\t<span className="size-4 rounded-full bg-danger-fg" />\n\t\t\t\tOffline\n\t\t\t</Badge>\n\t\t</div>\n\t)\n}\n',
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
			'import { Badge } from "9ui"\n\nexport function BadgeStatus() {\n\treturn (\n\t\t<div className="flex items-center justify-center gap-2">\n\t\t\t<Badge variant="success">Active</Badge>\n\t\t\t<span className="text-xs text-secondary-fg">Ready to use</span>\n\t\t</div>\n\t)\n}\n',
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
			'import Link from "next/link"\nimport Monicon from "@monicon/react"\nimport {\n\tBreadcrumb,\n\tBreadcrumbItem,\n\tBreadcrumbList,\n\tBreadcrumbSeparator,\n} from "9ui"\n\nexport function BreadcrumbsCustomSeparator() {\n\treturn (\n\t\t<Breadcrumb>\n\t\t\t<BreadcrumbList>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Link href="/">Home</Link>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator>\n\t\t\t\t\t<span>/</span>\n\t\t\t\t</BreadcrumbSeparator>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Monicon name="ri:more-fill" />\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator>\n\t\t\t\t\t<span>/</span>\n\t\t\t\t</BreadcrumbSeparator>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Link href="/category">Category</Link>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator>\n\t\t\t\t\t<span>/</span>\n\t\t\t\t</BreadcrumbSeparator>\n\t\t\t\t<BreadcrumbItem active>Current Page</BreadcrumbItem>\n\t\t\t</BreadcrumbList>\n\t\t</Breadcrumb>\n\t)\n}\n',
		component: React.lazy(
			() =>
				import("@/components/demos/breadcrumbs/breadcrumbs-custom-separator")
		),
		title: "breadcrumbs-custom-separator.tsx",
	},
	"breadcrumbs-demo": {
		content:
			'import Link from "next/link"\nimport Monicon from "@monicon/react"\nimport {\n\tBreadcrumb,\n\tBreadcrumbItem,\n\tBreadcrumbList,\n\tBreadcrumbSeparator,\n} from "9ui"\n\nexport function BreadcrumbsDemo() {\n\treturn (\n\t\t<Breadcrumb>\n\t\t\t<BreadcrumbList>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Link href="/">Home</Link>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Monicon name="ri:more-fill" />\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<Link href="/category">Category</Link>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem active>Current Page</BreadcrumbItem>\n\t\t\t</BreadcrumbList>\n\t\t</Breadcrumb>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/breadcrumbs/breadcrumbs-demo")
		),
		title: "breadcrumbs-demo.tsx",
	},
	"button-custom": {
		content:
			'import { Monicon } from "@monicon/react"\nimport { Button } from "9ui"\n\nexport function ButtonCustom() {\n\treturn (\n\t\t<Button\n\t\t\tclassName="rounded-full border border-primary bg-transparent text-primary-fg hover:border-fg hover:bg-transparent hover:text-fg"\n\t\t\tsize="icon-sm"\n\t\t>\n\t\t\t<Monicon name="ri:add-fill" />\n\t\t</Button>\n\t)\n}\n',
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
	"separator-demo": {
		content:
			'import { Separator } from "9ui"\n\nexport function SeparatorDemo() {\n\treturn (\n\t\t<div>\n\t\t\t<p>9ui is a component library for building modern web applications.</p>\n\t\t\t<Separator className="my-2.5" />\n\t\t\t<div className="flex gap-2.5">\n\t\t\t\t<p>Website</p>\n\t\t\t\t<Separator orientation="vertical" />\n\t\t\t\t<p>Documentation</p>\n\t\t\t\t<Separator orientation="vertical" />\n\t\t\t\t<p>Community</p>\n\t\t\t</div>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/separator/separator-demo")
		),
		title: "separator-demo.tsx",
	},
}
