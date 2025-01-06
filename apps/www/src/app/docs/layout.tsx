import { Metadata } from "next"

import { DocsSidebarNav } from "@/components/sidebar"

export const metadata: Metadata = {
	title: null,
	description: null,
}

export default async function DocsLayout(params: {
	children: React.ReactNode
}) {
	return (
		<div className="container mx-auto gap-8 px-4 md:grid md:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_1fr]">
			<aside className="fixed top-14 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-primary md:sticky md:block">
				<div className="scrollbar-hidden h-full overflow-y-auto py-8 pr-8">
					<DocsSidebarNav />
				</div>
			</aside>
			<div className="py-8">{params.children}</div>
		</div>
	)
}
