import Link from "next/link"
import Monicon from "@monicon/react"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "9ui"

export default function BreadcrumbsCustomSeparator() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link href="/">Home</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<span>/</span>
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<Monicon name="ri:more-fill" />
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<span>/</span>
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<Link href="/category">Category</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<span>/</span>
				</BreadcrumbSeparator>
				<BreadcrumbItem active>Current Page</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
