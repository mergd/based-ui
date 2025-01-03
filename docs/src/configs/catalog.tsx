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
	"separator-demo": {
		content:
			'import { Separator } from "9ui"\n\nexport function SeparatorDemo() {\n\treturn (\n\t\t<div>\n\t\t\t<p>9ui is a component library for building modern web applications.</p>\n\t\t\t<Separator className="my-2.5" />\n\t\t\t<div className="flex gap-2.5">\n\t\t\t\t<p>Website</p>\n\t\t\t\t<Separator orientation="vertical" />\n\t\t\t\t<p>Documentation</p>\n\t\t\t\t<Separator orientation="vertical" />\n\t\t\t\t<p>Community</p>\n\t\t\t</div>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/separator/separator-demo")
		),
		title: "separator-demo.tsx",
	},
}
