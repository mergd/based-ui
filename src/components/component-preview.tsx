"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, Loader2Icon, RefreshCwIcon } from "lucide-react"

import { CodeBar } from "@/components/code-bar"
import { CopyButton } from "@/components/copy-button"
import { Button } from "@/components/ui/button"

import { Catalog } from "@/configs/catalog"

import { highlighter } from "@/lib/rehype/syntax-highlighting"
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

	const [key, setKey] = React.useState(0)

	const prettyCode = React.useMemo(() => {
		return highlighter.codeToHtml(content, {
			lang: "tsx",
			themes: {
				dark: "github-dark-default",
				light: "github-light-default",
			},
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
	}, [content])

	return (
		<div className={cn("mt-8 overflow-hidden rounded-lg border", className)}>
			<div className="relative flex min-h-[200px] items-center justify-center p-10">
				{showReload && (
					<Button
						variant="ghost"
						size="icon-sm"
						className="absolute right-2 top-2 size-6"
						onClick={() => setKey((prev) => prev + 1)}
					>
						<RefreshCwIcon size={16} />
					</Button>
				)}
				<React.Suspense
					fallback={
						<div className="flex animate-spin items-center justify-center">
							<Loader2Icon size={16} />
						</div>
					}
				>
					<Component key={key} />
				</React.Suspense>
			</div>

			<CodeBar label={`${name}.tsx`} content={content} />

			<div
				className="code-wrapper"
				dangerouslySetInnerHTML={{ __html: prettyCode }}
			/>
		</div>
	)
}
