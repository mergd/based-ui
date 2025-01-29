"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, Loader2Icon, RefreshCwIcon } from "lucide-react"
import { useTheme } from "next-themes"

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
	const { theme } = useTheme()

	const [code, setCode] = React.useState<string | null>(null)
	const [key, setKey] = React.useState(0)
	const [copied, setCopied] = React.useState(false)

	React.useEffect(() => {
		const prettyCode = highlighter.codeToHtml(content, {
			lang: "tsx",
			theme: theme === "dark" ? "github-dark-default" : "github-light-default",
		})

		setCode(prettyCode)
	}, [content, theme])

	const onCopy = async () => {
		await navigator.clipboard.writeText(content!)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

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

			<div className="flex items-center justify-between border-y bg-secondary px-3">
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
						"flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
					)}
				>
					{copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
				</button>
			</div>

			<div
				className="scrollbar-custom text-xs [&>pre>code]:!bg-transparent [&>pre]:!m-0 [&>pre]:max-h-[300px] [&>pre]:overflow-auto [&>pre]:!bg-background [&>pre]:p-4"
				dangerouslySetInnerHTML={{ __html: code! }}
			/>
		</div>
	)
}
