"use client"

import * as React from "react"
import { Dialog } from "@base-ui-components/react/dialog"

import "./drawer.css"

import { useControlledState } from "../../hooks/use-controlled-state"
import { merge } from "../../utils"
import { THRESHOLDS, TRANSITIONS } from "./drawer.constants"
import { DrawerContext, useDrawerContext } from "./drawer.context"
import { useLayeredBackground } from "./use-layered-background"

/********
Drawer Mappings
********/
const DrawerTrigger = Dialog.Trigger

const DrawerPopup = Dialog.Popup

const DrawerPortal = Dialog.Portal

/********
Drawer Root
********/
type DrawerProps = Dialog.Root.Props & {
	enableLayeredBackground?: boolean
	layeredBackgroundColor?: string
}

const Drawer = ({ children, ...props }: DrawerProps) => {
	const [open, setOpen] = useControlledState({
		state: props.open,
		defaultState: false,
		onStateChange: (state) => props.onOpenChange?.(state, undefined, undefined),
	})

	const [translateY, setTranslateY] = React.useState(0)
	const [isDragging, setIsDragging] = React.useState(false)
	const dragStartY = React.useRef(0)
	const currentY = React.useRef(0)
	const scrollRef = React.useRef<HTMLDivElement>(null)
	const lastTouchY = React.useRef(0)
	const lastTouchTime = React.useRef(Date.now())
	const velocityY = React.useRef(0)

	React.useEffect(() => {
		if (!open) return

		setTranslateY(0)
	}, [open])

	React.useEffect(() => {
		const handleGlobalMouseMove = (e: MouseEvent) => {
			if (isDragging) {
				const deltaY = Math.round(e.clientY - dragStartY.current)
				const currentTime = Date.now()
				const deltaTime = currentTime - lastTouchTime.current

				if (deltaTime > 0) {
					velocityY.current = Math.round(
						(e.clientY - lastTouchY.current) / deltaTime
					)
				}

				lastTouchY.current = e.clientY
				lastTouchTime.current = currentTime

				if (deltaY < 0 && scrollRef.current?.scrollTop === 0) {
					const rubberBandY = Math.round(deltaY * 0.15)
					currentY.current = rubberBandY
					setTranslateY(currentY.current)
					return
				}

				if (deltaY > 0) {
					currentY.current = deltaY
					setTranslateY(Math.round(currentY.current))
				}
			}
		}

		const handleGlobalMouseUp = () => {
			if (isDragging) {
				handleTouchEnd()
			}
		}

		if (isDragging) {
			window.addEventListener("mousemove", handleGlobalMouseMove)
			window.addEventListener("mouseup", handleGlobalMouseUp)
		}

		return () => {
			window.removeEventListener("mousemove", handleGlobalMouseMove)
			window.removeEventListener("mouseup", handleGlobalMouseUp)
		}
	}, [isDragging])

	const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
		e.stopPropagation()

		if ("touches" in e) {
			handleTouchStart(e)
		} else {
			if (scrollRef.current && scrollRef.current.scrollTop > 0) {
				return
			}

			dragStartY.current = e.clientY
			currentY.current = 0
			setIsDragging(true)
		}
	}

	const handleTouchStart = (e: React.TouchEvent) => {
		if (scrollRef.current && scrollRef.current.scrollTop > 0) {
			return
		}

		const touch = e.touches[0]
		dragStartY.current = touch.clientY
		lastTouchY.current = touch.clientY
		lastTouchTime.current = Date.now()
		currentY.current = 0
		velocityY.current = 0
		setIsDragging(true)
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging) return

		const touch = e.touches[0]
		const deltaY = Math.round(touch.clientY - dragStartY.current)
		const currentTime = Date.now()
		const deltaTime = currentTime - lastTouchTime.current

		if (deltaTime > 0) {
			velocityY.current = Math.round(
				(touch.clientY - lastTouchY.current) / deltaTime
			)
		}

		lastTouchY.current = touch.clientY
		lastTouchTime.current = currentTime

		if (deltaY < 0 && scrollRef.current?.scrollTop === 0) {
			if (e.type === "click") return

			const rubberBandY = Math.round(deltaY * 0.15)
			currentY.current = rubberBandY
			setTranslateY(currentY.current)
			return
		}

		if (deltaY > 0) {
			if (e.type === "click") return

			currentY.current = deltaY
			setTranslateY(Math.round(currentY.current))
		}
	}

	const handleTouchEnd = () => {
		if (!isDragging) return

		const drawerHeight = scrollRef.current?.clientHeight || 0
		const dragProgress = currentY.current / drawerHeight

		setIsDragging(false)

		requestAnimationFrame(() => {
			if (
				dragProgress > THRESHOLDS.CLOSE ||
				velocityY.current > THRESHOLDS.VELOCITY
			) {
				setTranslateY(drawerHeight)
				setOpen(false)
			} else {
				setTranslateY(0)
			}
		})
	}

	const handleBackdropClick = () => {
		if (!scrollRef.current) return
		setTranslateY(scrollRef.current.clientHeight)
	}

	return (
		<Dialog.Root
			open={open}
			onOpenChange={(isOpen) => {
				if (!isOpen) {
					handleBackdropClick()
					setOpen(false)
					return
				}
				setOpen(true)
			}}
			{...props}
		>
			<DrawerContext.Provider
				value={{
					isOpen: open,
					setIsOpen: setOpen,
					enableLayeredBackground: props.enableLayeredBackground,
					layeredBackgroundColor: props.layeredBackgroundColor,
					isDragging,
					setIsDragging,
					handleTouchStart,
					handleTouchMove,
					handleTouchEnd,
					handleDragStart,
					scrollRef,
					translateY,
					handleBackdropClick,
				}}
			>
				{children}
			</DrawerContext.Provider>
		</Dialog.Root>
	)
}

/********
Drawer Backdrop
********/
type DrawerBackdropProps = Dialog.Backdrop.Props & {
	className?: string
}

const DrawerBackdrop = ({ className, ...props }: DrawerBackdropProps) => {
	return (
		<Dialog.Backdrop
			className={merge(
				"fixed inset-0 h-dvh bg-black/70 transition-all [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0",
				className
			)}
			{...props}
		/>
	)
}

/********
Drawer Drag Handle
********/
type DrawerDragHandleProps = React.PropsWithChildren & {
	className?: string
}

const DrawerDragHandle = ({ children, className }: DrawerDragHandleProps) => {
	const { handleTouchMove, handleTouchEnd, handleDragStart } =
		useDrawerContext()

	return (
		<div
			className={merge(
				"group fixed left-0 top-0 z-50 flex h-8 w-full touch-none select-none items-center justify-center before:absolute before:inset-0 before:-top-2",
				className
			)}
			onMouseDown={handleDragStart}
			onTouchStart={handleDragStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			onTouchCancel={handleTouchEnd}
		>
			{children || (
				<div className="h-1 w-20 rounded-full bg-muted/50 transition-colors group-active:bg-muted/70" />
			)}
		</div>
	)
}

/********
Drawer Content
********/
type DrawerContentProps = React.PropsWithChildren & {
	className?: string
	hideDragHandle?: boolean
}

const TRANSITION_STRING = `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
const ANIMATION_STRING = `slideIn ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`

const DrawerContent = ({
	children,
	className,
	hideDragHandle,
}: DrawerContentProps) => {
	useLayeredBackground()

	const {
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,
		isDragging,
		translateY,
		scrollRef,
	} = useDrawerContext()

	const rem = React.useRef(16)

	const isContentScrollable = () => {
		if (!scrollRef.current) return false
		return scrollRef.current.scrollHeight > scrollRef.current.clientHeight
	}

	const handleInteractionStart = (e: React.TouchEvent) => {
		if (!isContentScrollable()) {
			handleTouchStart(e)
		}
	}

	return (
		<DrawerPopup
			ref={scrollRef}
			className={merge(
				"fixed inset-x-0 bottom-0 mx-auto h-full origin-bottom rounded-t-md border border-b-0 border-muted bg-bg pt-8 text-fg outline-none",
				className
			)}
			style={{
				transform: `translateY(${translateY}px)`,
				touchAction: isDragging ? "none" : "auto",
				transition: isDragging ? "none" : TRANSITION_STRING,
				animation: ANIMATION_STRING,
			}}
			onTouchStart={handleInteractionStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			onTouchCancel={handleTouchEnd}
			onScroll={(event) => {
				const viewport = event.currentTarget
				if (viewport.scrollTop > (56 * rem.current) / 16) {
					viewport.setAttribute("data-clipped", "")
				} else {
					viewport.removeAttribute("data-clipped")
				}
			}}
		>
			<div className="absolute inset-0 top-full h-[200dvh] w-full bg-inherit" />
			{!hideDragHandle && <DrawerDragHandle />}
			{children}
		</DrawerPopup>
	)
}

export {
	Drawer,
	DrawerDragHandle,
	DrawerBackdrop,
	DrawerPortal,
	DrawerContent,
	DrawerTrigger,
}
