"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type SidebarNavGroup } from "@/types/nav"

import { navConfig } from "@/configs/nav"

import { merge } from "@/lib/utils"

interface DocsSidebarNavItemsProps {
	items: SidebarNavGroup["items"]
	pathname: string | null
}

const Label = ({ children }: { children: React.ReactNode }) => (
	<span className="ml-2 rounded-md bg-accent px-1 py-0.5 text-xs font-semibold leading-none text-accent-fg">
		{children}
	</span>
)

export const DocsSidebarNavItems = ({
	items,
	pathname,
}: DocsSidebarNavItemsProps) => (
	<div className="mt-1 space-y-0.5 text-sm">
		{items.map((item, index) =>
			!item.disabled && item.href ? (
				<Link
					key={index}
					href={item.href}
					className={merge(
						"-mx-2 flex w-full items-center rounded-md border border-transparent px-2 py-1 transition-colors hover:text-fg md:mx-0",
						pathname === item.href
							? "border-muted bg-subtle text-fg"
							: "text-muted-fg"
					)}
					target={item.external ? "_blank" : ""}
					rel={item.external ? "noreferrer" : ""}
				>
					{item.title}
					{item.label && <Label>{item.label}</Label>}
				</Link>
			) : (
				<span
					key={index}
					className={merge(
						"-mx-2 flex w-full cursor-not-allowed items-center px-2 py-1 text-muted-fg opacity-60 md:mx-0"
					)}
				>
					{item.title}
					{item.label && <Label>{item.label}</Label>}
				</span>
			)
		)}
	</div>
)

export const DocsSidebarNav = () => {
	const pathname = usePathname()

	return (
		<>
			{navConfig.sidebarNav.map((group, index) => (
				<div key={index} className="pb-4">
					<h4 className="mb-1 text-sm font-semibold text-fg">{group.title}</h4>
					{group.items.length && (
						<DocsSidebarNavItems items={group.items} pathname={pathname} />
					)}
				</div>
			))}
		</>
	)
}
