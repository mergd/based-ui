"use client"

import React from "react"
import { Monicon } from "@monicon/react"
import { merge } from "9ui"
import { createHighlighter } from "shiki"

import { Catalog } from "@/configs/catalog"

import { useTheme } from "@/providers/theme-provider"

type DemoName = keyof typeof Catalog

interface ComponentPreviewProps {
	name: DemoName
	className?: string
}

export function ComponentPreview({ name, className }: ComponentPreviewProps) {
	const { component: Component, content } = Catalog[name]
	const { theme } = useTheme()

	const [code, setCode] = React.useState<string | null>(null)
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
			className={merge(
				"mt-4 overflow-hidden rounded-lg border border-secondary",
				className
			)}
		>
			<div className="flex items-center justify-center p-10">
				<React.Suspense
					fallback={
						<div className="flex animate-spin items-center justify-center">
							<Monicon name="ri:loader-5-fill" size={20} />
						</div>
					}
				>
					<Component />
				</React.Suspense>
			</div>

			<div className="flex items-center justify-between border-y border-secondary bg-primary/50 px-3">
				<div className="flex h-8 items-center overflow-x-auto">
					<div className="flex min-w-fit gap-2">
						<span className="rounded px-2 py-0.5 text-xs font-semibold">
							{name}.tsx
						</span>
					</div>
				</div>

				<button
					onClick={onCopy}
					className={merge(
						"flex size-6 items-center justify-center rounded text-secondary-fg transition-colors hover:bg-secondary/60 hover:text-fg"
					)}
				>
					{copied ? (
						<Monicon name="ri:check-line" size={14} />
					) : (
						<Monicon name="ri:file-copy-line" size={14} />
					)}
				</button>
			</div>

			<div
				className="scrollbar-custom text-xs [&>pre>code]:!bg-transparent [&>pre]:!m-0 [&>pre]:max-h-[300px] [&>pre]:overflow-auto [&>pre]:!bg-primary/20 [&>pre]:p-4"
				dangerouslySetInnerHTML={{ __html: code! }}
			/>
		</div>
	)
}
