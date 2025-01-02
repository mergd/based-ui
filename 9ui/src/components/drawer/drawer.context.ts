import React from "react"

interface DrawerContextValue {
	isOpen: boolean
	setIsOpen: (open: boolean) => void
	isDragging: boolean
	setIsDragging: (dragging: boolean) => void
	enableLayeredBackground?: boolean
	layeredBackgroundColor?: string
	handleTouchStart: (e: React.TouchEvent) => void
	handleTouchMove: (e: React.TouchEvent) => void
	handleTouchEnd: (e: React.TouchEvent) => void
	handleDragStart: (e: React.MouseEvent | React.TouchEvent) => void
	scrollRef: React.RefObject<HTMLDivElement>
	translateY: number
	handleBackdropClick: () => void
}

export const DrawerContext = React.createContext<DrawerContextValue>({
	isOpen: false,
	setIsOpen: () => {},
	enableLayeredBackground: false,
	layeredBackgroundColor: "black",
	isDragging: false,
	setIsDragging: () => {},
	handleTouchStart: () => {},
	handleTouchMove: () => {},
	handleTouchEnd: () => {},
	handleDragStart: () => {},
	scrollRef: React.createRef<HTMLDivElement>(),
	translateY: 0,
	handleBackdropClick: () => {},
})

export const useDrawerContext = () => {
	const context = React.useContext(DrawerContext)

	if (!context) {
		throw new Error("useDrawerContext must be used within a Drawer.Root")
	}

	return context
}
