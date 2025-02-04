"use client"

import React from "react"

import { CodeBar } from "@/components/code-bar"

import { highlighter } from "@/lib/rehype/syntax-highlighting"

interface CodeBlockProps {
	content: string
	topBar?: {
		label: string
	}
}

export const CodeBlock = ({ content, topBar }: CodeBlockProps) => {
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
		<div className="mt-4 overflow-hidden rounded-lg border">
			{topBar && (
				<CodeBar
					label={topBar.label}
					className="border-t-0"
					content={content}
				/>
			)}
			<div
				className="code-wrapper"
				dangerouslySetInnerHTML={{ __html: prettyCode }}
			/>
		</div>
	)
}
