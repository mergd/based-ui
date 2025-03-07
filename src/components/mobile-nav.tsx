"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { EqualIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerContent,
	DrawerPortal,
	DrawerTrigger,
} from "@/components/ui/drawer"

import { navConfig } from "@/configs/nav"

import { cn } from "@/lib/utils"

import { type NavItem } from "@/types/nav"

export function MobileNav() {
	const [open, setOpen] = React.useState(false)

	return (
		<div className="flex items-center gap-2">
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger
					render={(props) => (
						<Button
							className="md:hidden"
							variant="ghost"
							size="icon"
							{...props}
						>
							<EqualIcon />
						</Button>
					)}
				/>
				<DrawerPortal>
					<DrawerContent className="mx-auto max-h-[85svh]">
						<div className="overflow-auto p-6 text-sm">
							<div className="space-y-0.5">
								{navConfig.mainNav.map((item) => (
									<MobileNavItem
										key={item.title}
										item={item}
										onNavItemClick={() => setOpen(false)}
									/>
								))}
							</div>
							{navConfig.sidebarNav.map((group) => (
								<div key={group.title} className="mt-4">
									<h4 className="mb-1 text-sm font-semibold text-foreground">
										{group.title}
									</h4>
									<div className="space-y-0.5">
										{group.items.map((item) => (
											<MobileNavItem
												key={item.title}
												item={item}
												onNavItemClick={() => setOpen(false)}
											/>
										))}
									</div>
								</div>
							))}
						</div>
					</DrawerContent>
				</DrawerPortal>
			</Drawer>
			<Link href="/" className="flex items-center md:hidden">
				<Icons.logo className="h-4" />
			</Link>
		</div>
	)
}

function MobileNavItem({
	item,
	onNavItemClick,
}: {
	item: NavItem
	onNavItemClick: () => void
}) {
	const pathname = usePathname()

	return !item.disabled && item.href ? (
		<Link
			href={item.href}
			onClick={onNavItemClick}
			className={cn(
				"-mx-2 flex w-full items-center gap-2 rounded-md border px-2 py-1 transition-colors hover:text-foreground md:mx-0",
				pathname === item.href
					? "bg-secondary/50 text-foreground"
					: "border-transparent text-muted-foreground"
			)}
			target={item.external ? "_blank" : ""}
			rel={item.external ? "noreferrer" : ""}
		>
			{item.title}
			{item.label && (
				<Badge className="rounded-md px-2 py-0.5" variant="info">
					{item.label}
				</Badge>
			)}
		</Link>
	) : (
		<span
			className={cn(
				"-mx-2 flex w-full cursor-not-allowed items-center gap-2 px-2 py-1 text-muted-foreground opacity-60 md:mx-0"
			)}
		>
			{item.title}
			{item.label && (
				<Badge
					className="rounded-md px-2 py-0.5"
					variant={item.disabled ? "secondary" : "info"}
				>
					{item.label}
				</Badge>
			)}
		</span>
	)
}
