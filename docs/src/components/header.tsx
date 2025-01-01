"use client"

import React from "react"
import Link from "next/link"
import { Monicon } from "@monicon/react"

import Logo from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-secondary bg-bg backdrop-blur supports-[backdrop-filter]:bg-bg/60">
			<div className="container mx-auto flex h-14 items-center px-4">
				<Link
					href="/"
					className="flex items-center font-semibold italic transition-colors hover:text-accent"
				>
					<Logo className="h-8 text-fg" />
				</Link>
				<div className="flex-1" />
				<div className="flex items-center gap-2">
					<Link
						href="https://github.com/borabaloglu/9ui"
						target="_blank"
						rel="noreferrer"
						className="flex size-8 items-center justify-center rounded text-secondary-fg hover:text-fg"
					>
						<Monicon name="ri:github-fill" size={20} />
						<span className="sr-only">GitHub</span>
					</Link>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
