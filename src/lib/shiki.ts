import { createHighlighter, Highlighter } from "shiki"

declare global {
	// eslint-disable-next-line no-var
	var __shikiHighlighter: Highlighter | undefined
}

let isInitializing = false

export async function getHighlighter() {
	if (global.__shikiHighlighter) {
		return global.__shikiHighlighter
	}

	if (isInitializing) {
		// Wait for the existing initialization to complete
		while (isInitializing) {
			await new Promise((resolve) => setTimeout(resolve, 10))
		}
		if (global.__shikiHighlighter) {
			return global.__shikiHighlighter
		}
	}

	isInitializing = true
	console.log("Creating new Shiki instance...")

	try {
		const highlighter = await createHighlighter({
			themes: ["github-dark-default", "github-light-default"],
			langs: ["tsx"],
		})

		global.__shikiHighlighter = highlighter
		return highlighter
	} finally {
		isInitializing = false
	}
}

// Clean up function if needed
export function disposeHighlighter() {
	if (global.__shikiHighlighter) {
		global.__shikiHighlighter.dispose()
		global.__shikiHighlighter = undefined
	}
}
