"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

import { cn } from "@/lib/utils"

export function MainNav() {
	const pathname = usePathname()

	return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="mr-6 flex items-center">
				<Icons.logo className="h-4" />
			</Link>
			<nav className="flex items-center gap-6 text-sm">
				<Link
					href="/docs"
					className={cn(
						"transition-opacity hover:opacity-100",
						pathname.startsWith("/docs/getting-started")
							? "text-foreground opacity-100"
							: "opacity-80"
					)}
				>
					Docs
				</Link>
				<Link
					href="/docs/components"
					className={cn(
						"transition-opacity hover:opacity-100",
						pathname?.startsWith("/docs/components")
							? "text-foreground opacity-100"
							: "opacity-80"
					)}
				>
					Components
				</Link>
				<span
					className={cn(
						"flex items-center gap-2 text-foreground/80 opacity-50"
					)}
				>
					Blocks
					<Badge variant="outline">Coming Soon</Badge>
				</span>
			</nav>
		</div>
	)
}
