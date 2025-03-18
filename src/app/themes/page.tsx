"use client"

import { Suspense, useState } from "react"

import { CardsGrid } from "@/components/cards-grid"
import { CustomizeToolbar } from "@/components/customize-toolbar"

import { ThemeSettings } from "@/config/theme"

import { generateTheme } from "@/lib/generate-theme"

const ThemesPage = () => {
	const [theme, setTheme] = useState<ThemeSettings>({
		shade: "neutral",
		primaryColor: "default",
		radius: 0.5,
	})

	return (
		<main className="container mx-auto py-10">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Themes</h1>
					<p className="text-sm text-muted-foreground">
						Customize your theme and see the changes live.
					</p>
					<CustomizeToolbar theme={theme} setTheme={setTheme} />
				</div>
				<CardsGrid />
				<Suspense fallback={<div>Loading...</div>}>
					<style>
						{generateTheme(theme.shade, theme.primaryColor, theme.radius, true)}
					</style>
				</Suspense>
			</div>
		</main>
	)
}

export default ThemesPage
