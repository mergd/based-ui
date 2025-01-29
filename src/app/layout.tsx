import type { Metadata } from "next"
import { Geist as Jakarta } from "next/font/google"

import "./globals.css"

import { ThemeProvider } from "next-themes"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/sonner"

const jakarta = Jakarta({
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "9ui - Documentation",
	description: "Documentation for 9ui components",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" suppressHydrationWarning>
		<body className={jakarta.className}>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
				enableColorScheme
			>
				<div className="Root flex flex-1 flex-col" data-vaul-drawer-wrapper="">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
				<Toaster />
			</ThemeProvider>
		</body>
	</html>
)

export default RootLayout
