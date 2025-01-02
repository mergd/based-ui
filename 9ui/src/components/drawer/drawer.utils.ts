import { CSSProperties } from "react"

export const assignStyle = (element: HTMLElement, style: CSSProperties) => {
	if (!element) return
	Object.assign(element.style, style)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const compose = (...fns: any[]) => {
	fns.forEach((fn) => {
		if (typeof fn === "function") {
			fn()
		}
	})
}
