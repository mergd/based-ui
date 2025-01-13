import type { Metadata } from "next"
import { Geist as Jakarta } from "next/font/google"

import "./globals.css"

import { Toaster } from "9ui"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

import { ThemeProvider } from "@/providers/theme-provider"

const jakarta = Jakarta({
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "9ui - Documentation",
	description: "Documentation for 9ui components",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={jakarta.className}>
				<ThemeProvider>
					<div className="Root flex flex-1 flex-col" drawer-wrapper="">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
