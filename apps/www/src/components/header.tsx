"use client"

import * as React from "react"
import Link from "next/link"
import { Monicon } from "@monicon/react"

import Logo from "@/components/logo"
import { DocsSidebarNav } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import {
	Drawer,
	DrawerContent,
	DrawerPortal,
	DrawerTrigger,
} from "@/components/ui/drawer"

export const Header = () => (
	<header className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div className="container mx-auto flex h-14 items-center px-4">
			<Drawer>
				<DrawerTrigger className="mr-2 flex size-8 items-center justify-center md:hidden">
					<Monicon name="ri:equal-fill" size={20} />
				</DrawerTrigger>
				<DrawerPortal>
					<DrawerContent className="mx-auto h-[70vh] w-[95%] pb-4">
						<div className="scrollbar-hidden h-full overflow-y-auto overflow-x-visible px-8">
							<DocsSidebarNav />
						</div>
					</DrawerContent>
				</DrawerPortal>
			</Drawer>
			<Link
				href="/"
				className="flex items-center font-semibold italic transition-colors hover:text-accent"
			>
				<Logo className="h-8 text-foreground" />
			</Link>
			<div className="flex-1" />
			<div className="flex items-center gap-2">
				<Link
					href="https://github.com/borabaloglu/9ui"
					target="_blank"
					rel="noreferrer"
					className="flex size-8 items-center justify-center text-muted-fg hover:text-foreground"
				>
					<Monicon name="ri:github-fill" size={20} />
					<span className="sr-only">GitHub</span>
				</Link>
				<ThemeToggle />
			</div>
		</div>
	</header>
)
