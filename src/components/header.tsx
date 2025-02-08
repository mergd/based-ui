"use client"

import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-14 items-center px-4">
				<MainNav />
				<MobileNav />
				<div className="flex-1" />
				<div className="flex items-center gap-1">
					<Link
						href="https://github.com/borabaloglu/9ui"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="ghost" size="icon">
							<Icons.gitHub />
							<span className="sr-only">GitHub</span>
						</Button>
					</Link>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
