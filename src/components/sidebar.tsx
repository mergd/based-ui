"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navConfig } from "@/configs/nav"

import { cn } from "@/lib/utils"

import { type SidebarNavGroup } from "@/types/nav"

interface DocsSidebarNavItemsProps {
	items: SidebarNavGroup["items"]
	pathname: string | null
	onNavItemClick?: () => void
}

const Label = ({ children }: { children: React.ReactNode }) => (
	<span className="ml-2 rounded-md bg-primary px-1 py-0.5 text-xs font-semibold leading-none text-primary-foreground">
		{children}
	</span>
)

export const DocsSidebarNavItems = ({
	items,
	pathname,
	onNavItemClick,
}: DocsSidebarNavItemsProps) => (
	<div className="mt-1 space-y-0.5 text-sm">
		{items.map((item, index) =>
			!item.disabled && item.href ? (
				<Link
					key={index}
					href={item.href}
					onClick={onNavItemClick}
					className={cn(
						"-mx-2 flex w-full items-center rounded-md border px-2 py-1 transition-colors hover:text-foreground md:mx-0",
						pathname === item.href
							? "bg-secondary/50 text-foreground"
							: "border-transparent text-muted-foreground"
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
					className={cn(
						"-mx-2 flex w-full cursor-not-allowed items-center px-2 py-1 text-muted-foreground opacity-60 md:mx-0"
					)}
				>
					{item.title}
					{item.label && <Label>{item.label}</Label>}
				</span>
			)
		)}
	</div>
)

interface DocsSidebarNavProps {
	onNavItemClick?: () => void
}

export const DocsSidebarNav = ({ onNavItemClick }: DocsSidebarNavProps) => {
	const pathname = usePathname()

	return (
		<>
			{navConfig.sidebarNav.map((group, index) => (
				<div key={index} className="pb-4">
					<h4 className="mb-1 text-sm font-semibold text-foreground">
						{group.title}
					</h4>
					{group.items.length && (
						<DocsSidebarNavItems
							items={group.items}
							pathname={pathname}
							onNavItemClick={onNavItemClick}
						/>
					)}
				</div>
			))}
		</>
	)
}
