"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface TocItem {
	value: string
	url: string
	depth: number
}

interface TableOfContentsProps {
	items: TocItem[]
}

const getIdFromUrl = (url: string) => decodeURIComponent(url.slice(1))

export const TableOfContents = ({ items }: TableOfContentsProps) => {
	const [activeId, setActiveId] = React.useState<string>("")

	React.useEffect(() => {
		const observers = new Map()

		items.forEach((item) => {
			const id = getIdFromUrl(item.url)
			const element = document.getElementById(id)

			if (element) {
				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								setActiveId(id)
							}
						})
					},
					{ rootMargin: "-80px 0px -80% 0px" }
				)

				observer.observe(element)
				observers.set(id, observer)
			}
		})

		return () => {
			observers.forEach((observer) => observer.disconnect())
		}
	}, [items])

	return (
		<div className="sticky top-14 -mt-8 hidden h-fit max-h-[calc(100vh-3.5rem)] overflow-auto py-8 xl:block">
			<div className="flex flex-col gap-2">
				<h2 className="text-sm font-semibold">On this page</h2>
				<nav>
					{items.map((item) => (
						<a
							key={item.url}
							href={item.url}
							className={cn(
								"flex py-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
								item.depth === 3 && "pl-2",
								item.depth === 4 && "pl-4",
								item.depth === 5 && "pl-6",
								item.depth === 6 && "pl-8",
								activeId === getIdFromUrl(item.url) &&
									"font-medium text-foreground"
							)}
						>
							<span>{item.value}</span>
						</a>
					))}
				</nav>
			</div>
		</div>
	)
}
