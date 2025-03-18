"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckIcon, CopyIcon, RotateCcwIcon, Settings2Icon } from "lucide-react"
import { useOnClickOutside } from "usehooks-ts"

import { ThemeCode } from "@/components/theme-code"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"

import { colors, PrimaryColor, Shade } from "@/config/colors"
import {
	primaryColorOptions,
	radiusOptions,
	shadeOptions,
	ThemeSettings,
} from "@/config/theme"

import { generateTheme } from "@/lib/generate-theme"
import { cn } from "@/lib/utils"

type CustomizeToolbarProps = {
	theme: ThemeSettings
	setTheme: (theme: ThemeSettings) => void
}

export const CustomizeToolbar = ({
	theme,
	setTheme,
}: CustomizeToolbarProps) => {
	const ref = useRef(null)
	const [open, setOpen] = useState(false)
	const [copyDialogOpen, setCopyDialogOpen] = useState(false)

	useOnClickOutside(ref, () => setOpen(false))

	const handleValueChange = (
		key: keyof ThemeSettings,
		newValue: Shade | PrimaryColor | number
	) => {
		setTheme({
			...theme,
			[key]: newValue,
		})
	}

	const handleReset = () => {
		setTheme({
			shade: "neutral",
			primaryColor: "default",
			radius: 0.5,
		})
	}

	const handleCopy = () => {
		setOpen(false)
		setCopyDialogOpen(true)
	}

	return (
		<>
			<div className="fixed bottom-6 left-1/2 z-10 flex w-full -translate-x-1/2 items-end justify-center">
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
							className="absolute h-auto w-[90%] overflow-hidden rounded-md border bg-background p-4 shadow-sm outline-none lg:w-1/2 xl:w-1/3"
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
								<div className="flex gap-2">
									<Button variant="outline" size="icon-sm" onClick={handleCopy}>
										<CopyIcon className="size-4" />
									</Button>
									<Button
										variant="outline"
										size="icon-sm"
										onClick={handleReset}
									>
										<RotateCcwIcon className="size-4" />
									</Button>
								</div>
							</div>
							<div className="mt-4 flex flex-col gap-2">
								<div className="flex flex-col gap-2">
									<h4 className="text-sm font-medium">Shade</h4>
									<div className="flex gap-2 overflow-x-auto sm:grid sm:grid-cols-3">
										{shadeOptions.map((option) => (
											<Button
												key={option.value}
												variant="outline"
												className={cn(
													"group justify-start gap-x-2",
													option.value === theme.shade && "border-foreground"
												)}
												data-active={option.value === theme.shade}
												onClick={() => handleValueChange("shade", option.value)}
											>
												<div
													className="flex size-5 items-center justify-center rounded border border-foreground/20"
													style={{
														color:
															colors.shades[
																option.value as keyof typeof colors.shades
															].cssVars.dark["foreground"],
														backgroundColor:
															colors.shades[
																option.value as keyof typeof colors.shades
															].cssVars.dark.secondary,
													}}
												>
													<CheckIcon className="hidden size-3 group-data-[active=true]:block" />
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
									<div className="flex gap-2 overflow-x-auto sm:grid sm:grid-cols-3">
										{primaryColorOptions.map((option) => (
											<Button
												key={option.value}
												variant="outline"
												className={cn(
													"group justify-start gap-x-2",
													option.value === theme.primaryColor &&
														"border-foreground"
												)}
												data-active={option.value === theme.primaryColor}
												onClick={() =>
													handleValueChange("primaryColor", option.value)
												}
											>
												<div
													className="flex size-5 items-center justify-center rounded border border-foreground/20"
													style={{
														color:
															colors.primary[
																option.value as keyof typeof colors.primary
															].cssVars.dark["primary-foreground"],
														backgroundColor:
															colors.primary[
																option.value as keyof typeof colors.primary
															].cssVars.dark.primary,
													}}
												>
													<CheckIcon className="hidden size-3 group-data-[active=true]:block" />
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
									<div className="flex gap-2 overflow-x-auto sm:grid sm:grid-cols-3">
										{radiusOptions.map((option) => (
											<Button
												key={option.value}
												variant="outline"
												className={cn(
													"group justify-start gap-x-2",
													option.value === theme.radius && "border-foreground"
												)}
												data-active={option.value === theme.radius}
												onClick={() =>
													handleValueChange("radius", option.value)
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
			<Dialog open={copyDialogOpen} onOpenChange={setCopyDialogOpen}>
				<DialogContent className="w-[90%] !max-w-screen-md">
					<DialogHeader>
						<DialogTitle>Your Theme</DialogTitle>
						<DialogDescription>
							Copy the following code to your project.
						</DialogDescription>
					</DialogHeader>
					<ThemeCode
						css={generateTheme(
							theme.shade,
							theme.primaryColor,
							theme.radius,
							false
						)}
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}
