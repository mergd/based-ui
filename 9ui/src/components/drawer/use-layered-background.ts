import React, { useMemo } from "react"

import {
	TRANSITIONS,
	WINDOW_WIDTH_OFFSET,
	WRAPPER_BORDER_RADIUS,
} from "./drawer.constants"
import { useDrawerContext } from "./drawer.context"
import { assignStyle, compose } from "./drawer.utils"

export function useLayeredBackground() {
	const { isOpen, enableLayeredBackground, layeredBackgroundColor } =
		useDrawerContext()
	const cleanupRef = React.useRef<number | null>(null)
	const initialBodyBackgroundColor = useMemo(() => {
		return document.body.style.backgroundColor
	}, [])
	const initialWrapperOverflow = useMemo(() => {
		const wrapper = document.querySelector("[drawer-wrapper]") as HTMLElement
		return wrapper?.style.overflow
	}, [])

	const calculateScale = () => {
		return (window.innerWidth - WINDOW_WIDTH_OFFSET) / window.innerWidth
	}

	React.useEffect(() => {
		if (!enableLayeredBackground || !isOpen) return

		if (cleanupRef.current) {
			clearTimeout(cleanupRef.current)
		}

		const wrapper = document.querySelector("[drawer-wrapper]") as HTMLElement

		if (!wrapper) return

		compose(
			assignStyle(document.body, { backgroundColor: layeredBackgroundColor }),
			assignStyle(wrapper, {
				overflow: "hidden",
				borderRadius: `${WRAPPER_BORDER_RADIUS}px`,
				transformOrigin: "center top",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${TRANSITIONS.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
				transform: `scale(${calculateScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
			})
		)

		const wrapperCleanup = () => {
			assignStyle(wrapper, {
				transform: "none",
				borderRadius: "0px",
				overflow: initialWrapperOverflow,
			})
		}

		const bodyCleanup = () => {
			if (!initialBodyBackgroundColor) {
				document.body.style.removeProperty("background-color")
				return
			}
			assignStyle(document.body, {
				backgroundColor: initialBodyBackgroundColor,
			})
		}

		return () => {
			wrapperCleanup()
			cleanupRef.current = window.setTimeout(() => {
				bodyCleanup()
			}, TRANSITIONS.DURATION * 1000)
		}
	}, [isOpen, enableLayeredBackground, layeredBackgroundColor])
}
