"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckIcon, RotateCcwIcon, Settings2Icon } from "lucide-react"
import { useOnClickOutside } from "usehooks-ts"

import { Button } from "@/components/ui/button"

import {
	primaryColorOptions,
	radiusOptions,
	shadeOptions,
} from "@/configs/theme"

import { cn } from "@/lib/utils"

export const CustomizeToolbar = () => {
	const ref = useRef(null)
	const [open, setOpen] = useState(false)
	const [shade, setShade] = useState<string>()
	const [primaryColor, setPrimaryColor] = useState<string>()
	const [radius, setRadius] = useState<string>()

	useOnClickOutside(ref, () => setOpen(false))

	const handleValueChange = (
		currentValue: string | undefined,
		newValue: string,
		setValue: (value: string) => void
	) => {
		const root = document.documentElement
		if (currentValue) root.classList.remove(currentValue)
		root.classList.add(newValue)
		setValue(newValue)
	}

	const handleReset = () => {
		const root = document.documentElement
		if (shade) root.classList.remove(shade)
		if (primaryColor) root.classList.remove(primaryColor)
		if (radius) root.classList.remove(radius)
		setShade(undefined)
		setPrimaryColor(undefined)
		setRadius(undefined)
	}

	return (
		<div className="fixed bottom-6 left-1/2 flex w-full -translate-x-1/2 items-end justify-center">
			<motion.button
				layoutId="wrapper"
				onClick={() => {
					setOpen(true)
				}}
				key="button"
				className="h-9 rounded-md border bg-popover px-4 text-sm font-medium shadow-sm"
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 30,
					duration: 0.2,
				}}
			>
				<motion.span layoutId="title" className="flex items-center">
					<Settings2Icon className="mr-2 size-4" />
					Customize
				</motion.span>
			</motion.button>
			<AnimatePresence>
				{open ? (
					<motion.div
						ref={ref}
						layoutId="wrapper"
						className="absolute h-auto w-1/3 overflow-hidden rounded-md border bg-background p-4 shadow-sm outline-none"
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 25,
							duration: 0.2,
						}}
					>
						<div className="flex justify-between gap-2">
							<div>
								<motion.span
									aria-hidden
									className="font-semibold"
									layoutId="title"
								>
									Customize
								</motion.span>
								<p className="text-sm text-muted-foreground">
									Make it the way you like it.
								</p>
							</div>
							<Button variant="outline" size="icon-sm" onClick={handleReset}>
								<RotateCcwIcon className="size-4" />
							</Button>
						</div>
						<div className="mt-4 flex flex-col gap-2">
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-medium">Shade</h4>
								<div className="grid grid-cols-3 gap-2">
									{shadeOptions.map((option) => (
										<Button
											key={option.value}
											variant="outline"
											className={cn(
												"group justify-start gap-x-2",
												option.value === shade && "border-foreground"
											)}
											data-active={option.value === shade}
											onClick={() =>
												handleValueChange(shade, option.value, setShade)
											}
										>
											<div
												className={cn(
													"flex size-5 items-center justify-center rounded border border-foreground/20",
													option.color
												)}
											>
												<CheckIcon className="hidden size-3 text-current group-data-[active=true]:block" />
											</div>
											{option.name}
										</Button>
									))}
								</div>
							</div>
						</div>
						<div className="mt-4 flex flex-col gap-2">
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-medium">Primary Color</h4>
								<div className="grid grid-cols-3 gap-2">
									{primaryColorOptions.map((option) => (
										<Button
											key={option.value}
											variant="outline"
											className={cn(
												"group justify-start gap-x-2",
												option.value === primaryColor && "border-foreground"
											)}
											data-active={option.value === primaryColor}
											onClick={() =>
												handleValueChange(
													primaryColor,
													option.value,
													setPrimaryColor
												)
											}
										>
											<div
												className={cn(
													"flex size-5 items-center justify-center rounded border border-foreground/20",
													option.color
												)}
											>
												<CheckIcon className="hidden size-3 text-current group-data-[active=true]:block" />
											</div>
											{option.name}
										</Button>
									))}
								</div>
							</div>
						</div>
						<div className="mt-4 flex flex-col gap-2">
							<div className="flex flex-col gap-2">
								<h4 className="text-sm font-medium">Radius</h4>
								<div className="grid grid-cols-3 gap-2">
									{radiusOptions.map((option) => (
										<Button
											key={option.value}
											variant="outline"
											className={cn(
												"group justify-start gap-x-2",
												option.value === radius && "border-foreground"
											)}
											data-active={option.value === radius}
											onClick={() =>
												handleValueChange(radius, option.value, setRadius)
											}
										>
											<CheckIcon className="hidden size-3 text-current group-data-[active=true]:block" />
											{option.name}
										</Button>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	)
}
