"use client"

import React from "react"
import Link from "next/link"
import { Monicon } from "@monicon/react"
import {
	Button,
	Drawer,
	DrawerBackdrop,
	DrawerContent,
	DrawerPortal,
	DrawerTrigger,
} from "9ui"

import Logo from "@/components/logo"
import { DocsSidebarNav } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-secondary bg-bg backdrop-blur supports-[backdrop-filter]:bg-bg/60">
			<div className="container mx-auto flex h-14 items-center px-4">
				<Drawer enableLayeredBackground>
					<DrawerTrigger className="mr-4 md:hidden">
						<Button asChild>
							<Monicon name="ri:equal-fill" size={20} />
						</Button>
					</DrawerTrigger>
					<DrawerPortal>
						<DrawerBackdrop />
						<DrawerContent className="h-[70vh] w-[95%] px-8 py-12">
							<DocsSidebarNav />
						</DrawerContent>
					</DrawerPortal>
				</Drawer>
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
