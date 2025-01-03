import Link from "next/link"
import Monicon from "@monicon/react"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "9ui"

export default function BreadcrumbsDemo() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link href="/">Home</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Monicon name="ri:more-fill" />
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Link href="/docs/components">Components</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem active>Breadcrumbs</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
