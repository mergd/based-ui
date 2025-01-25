"use client"

import * as React from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
	children: React.ReactNode
}

type ThemeProviderState = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
	theme: "dark",
	setTheme: () => null,
}

const ThemeProviderContext =
	React.createContext<ThemeProviderState>(initialState)

function getThemePreference(): Theme {
	const storedTheme = localStorage.getItem("theme") as Theme
	if (storedTheme) return storedTheme

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light"
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = React.useState<Theme>("dark")
	const [mounted, setMounted] = React.useState(false)

	// Only runs once on mount to get initial theme
	React.useEffect(() => {
		setTheme(getThemePreference())
		setMounted(true)
	}, [])

	React.useEffect(() => {
		if (!mounted) return

		const root = window.document.documentElement
		root.classList.remove("light", "dark")
		root.classList.add(theme)
		localStorage.setItem("theme", theme)
	}, [theme, mounted])

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			setTheme(theme)
		},
	}

	// Prevent flash of incorrect theme
	if (!mounted) return null

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	)
}

export const useTheme = () => {
	const context = React.useContext(ThemeProviderContext)

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider")

	return context
}
