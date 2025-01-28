"use client"

import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useTheme } from "@/providers/theme-provider"

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme()

	return (
		<Button
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			variant="ghost"
			size="icon"
		>
			{theme === "light" ? <MoonIcon /> : <SunIcon />}
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
