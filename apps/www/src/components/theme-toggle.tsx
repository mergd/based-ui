"use client"

import { Monicon } from "@monicon/react"

import { useTheme } from "@/providers/theme-provider"

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<button
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="text-secondary-fg hover:text-fg flex size-8 items-center justify-center rounded"
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
