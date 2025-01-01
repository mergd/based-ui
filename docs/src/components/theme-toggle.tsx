"use client"

import { Monicon } from "@monicon/react"

import { useTheme } from "@/providers/theme-provider"

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<button
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="flex size-8 items-center justify-center rounded text-secondary-fg hover:text-fg"
		>
			{theme === "light" ? (
				<Monicon name="ri:moon-fill" size={20} />
			) : (
				<Monicon name="ri:sun-fill" size={20} />
			)}
			<span className="sr-only">Toggle theme</span>
		</button>
	)
}
