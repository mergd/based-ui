"use client"

import * as React from "react"
import { Monicon } from "@monicon/react"
import { createHighlighter } from "shiki"

import { Button } from "@/components/ui/button"

import { Catalog } from "@/configs/catalog"

import { useTheme } from "@/providers/theme-provider"

import { cn } from "@/lib/utils"

type DemoName = keyof typeof Catalog

interface ComponentPreviewProps {
	name: DemoName
	showReload?: boolean
	className?: string
}

export const ComponentPreview = ({
	name,
	showReload = false,
	className,
}: ComponentPreviewProps) => {
	const { component: Component, content } = Catalog[name]
	const { theme } = useTheme()

	const [code, setCode] = React.useState<string | null>(null)
	const [key, setKey] = React.useState(0)
	const [copied, setCopied] = React.useState(false)

	React.useEffect(() => {
		async function highlight() {
			const highlighter = await createHighlighter({
				themes: ["github-dark-default", "github-light-default"],
				langs: ["tsx"],
			})

			const highlighted = highlighter.codeToHtml(content, {
				lang: "tsx",
				theme:
					theme === "dark" ? "github-dark-default" : "github-light-default",
				transformers: [
					{
						pre(node) {
							node.properties.style = "tab-size: 2"
						},
						code(node) {
							node.properties.style = "tab-size: 2"
						},
					},
				],
			})

			setCode(highlighted)
		}

		highlight()
	}, [content, theme])

	const onCopy = async () => {
		await navigator.clipboard.writeText(content!)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div
			className={cn(
				"mt-4 overflow-hidden rounded-lg border border-border",
				className
			)}
		>
			<div className="relative flex min-h-[200px] items-center justify-center p-10">
				{showReload && (
					<Button
						variant="ghost"
						size="icon-sm"
						className="absolute right-2 top-2 size-6"
						onClick={() => setKey((prev) => prev + 1)}
					>
						<Monicon name="ri:restart-line" size={14} />
					</Button>
				)}
				<React.Suspense
					fallback={
						<div className="flex animate-spin items-center justify-center">
							<Monicon name="ri:loader-5-fill" size={20} />
						</div>
					}
				>
					<Component key={key} />
				</React.Suspense>
			</div>

			<div className="flex items-center justify-between border-y border-border bg-subtle px-3">
				<div className="flex h-8 items-center overflow-x-auto">
					<div className="flex min-w-fit gap-2">
						<span className="rounded px-2 py-0.5 text-xs font-semibold">
							{name}.tsx
						</span>
					</div>
				</div>

				<button
					onClick={onCopy}
					className={cn(
						"flex size-6 items-center justify-center rounded-md text-muted-fg transition-colors hover:bg-muted hover:text-foreground"
					)}
				>
					{copied ? (
						<Monicon name="ri:check-fill" size={14} />
					) : (
						<Monicon name="ri:file-copy-fill" size={14} />
					)}
				</button>
			</div>

			<div
				className="scrollbar-custom text-xs [&>pre>code]:!bg-transparent [&>pre]:!m-0 [&>pre]:max-h-[300px] [&>pre]:overflow-auto [&>pre]:!bg-background [&>pre]:p-4"
				dangerouslySetInnerHTML={{ __html: code! }}
			/>
		</div>
	)
}
