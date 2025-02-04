"use client"

import * as React from "react"

import { CodeBar } from "@/components/code-bar"
import { Button } from "@/components/ui/button"

import { highlighter } from "@/lib/rehype/syntax-highlighting"
import { cn } from "@/lib/utils"

interface ComponentSourceProps {
	name: string
	content: string
}

export default function ComponentSource(props: ComponentSourceProps) {
	const [expanded, setExpanded] = React.useState(false)

	const prettyCode = React.useMemo(() => {
		return highlighter.codeToHtml(props.content, {
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
	}, [props.content])

	return (
		<div className="mt-4 overflow-hidden rounded-lg border">
			<CodeBar
				label={`${props.name}.tsx`}
				className="border-t-0"
				content={props.content}
			/>

			<div className="relative">
				<div
					className={cn(
						"overflow-hidden transition-none",
						!expanded && "max-h-32"
					)}
				>
					<div
						className={cn(
							"code-wrapper [&_pre]:max-h-[600px] [&_pre]:pb-16",
							expanded ? "[&>pre]:overflow-auto" : "[&>pre]:overflow-hidden"
						)}
						dangerouslySetInnerHTML={{ __html: prettyCode }}
					/>
				</div>
				<div
					className={cn(
						"absolute flex items-center justify-center bg-gradient-to-b from-background/50 to-background/90 p-2",
						expanded ? "inset-x-0 bottom-0 h-12" : "inset-0"
					)}
				>
					<Button
						variant="default"
						size="sm"
						onClick={() => setExpanded(!expanded)}
					>
						{expanded ? "Hide code" : "Show Code"}
					</Button>
				</div>
			</div>
		</div>
	)
}
