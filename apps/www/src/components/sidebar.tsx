"use client"

import { usePathname } from "next/navigation"
import { type SidebarNavGroup } from "@/types/nav"
import { merge } from "9ui"

import { navConfig } from "@/configs/nav"

interface DocsSidebarNavItemsProps {
	items: SidebarNavGroup["items"]
	pathname: string | null
}

function Label({ children }: { children: React.ReactNode }) {
	return (
		<span className="bg-accent text-accent-fg ml-2 rounded px-1 py-0.5 text-xs font-semibold leading-none">
			{children}
		</span>
	)
}

export function DocsSidebarNavItems({
	items,
	pathname,
}: DocsSidebarNavItemsProps) {
	return (
		<div className="mt-1 space-y-0.5 text-sm">
			{items.map((item, index) =>
				!item.disabled && item.href ? (
					<a
						key={index}
						href={item.href}
						className={merge(
							"text-secondary-fg hover:text-fg -mx-2 flex w-full items-center rounded-md border border-transparent px-2 py-1 transition-colors md:mx-0",
							pathname === item.href && "border-secondary bg-primary/50 text-fg"
						)}
						target={item.external ? "_blank" : ""}
						rel={item.external ? "noreferrer" : ""}
					>
						{item.title}
						{item.label && <Label>{item.label}</Label>}
					</a>
				) : (
					<span
						key={index}
						className={merge(
							"text-secondary-fg -mx-2 flex w-full cursor-not-allowed items-center px-2 py-1 opacity-60 md:mx-0"
						)}
					>
						{item.title}
						{item.label && <Label>{item.label}</Label>}
					</span>
				)
			)}
		</div>
	)
}

export function DocsSidebarNav() {
	const pathname = usePathname()

	return (
		<>
			{navConfig.sidebarNav.map((group, index) => (
				<div key={index} className="pb-4">
					<h4 className="text-fg mb-1 text-sm font-semibold">{group.title}</h4>
					{group.items.length && (
						<DocsSidebarNavItems items={group.items} pathname={pathname} />
					)}
				</div>
			))}
		</>
	)
}
