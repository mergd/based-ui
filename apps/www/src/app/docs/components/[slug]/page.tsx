import { readFile } from "fs/promises"
import { join } from "path"
import { notFound } from "next/navigation"
import { getTableOfContents } from "@/lib/toc"

import { TableOfContents } from "@/components/toc"

interface DocPageProps {
	params: Promise<{
		slug: string[]
	}>
}

async function getDocFromParams({ params }: DocPageProps) {
	const { slug } = await params

	const doc = await import(`@/content/components/${slug}.mdx`)
	const source = await readFile(
		join(process.cwd(), "src/content", `components/${slug}.mdx`),
		"utf-8"
	)

	return { Doc: doc.default, source }
}

export default async function DocPage({ params }: DocPageProps) {
	const doc = await getDocFromParams({ params })

	if (!doc.Doc) {
		notFound()
	}

	const toc = await getTableOfContents(doc.source)

	return (
		<main className="relative xl:grid xl:grid-cols-[1fr_240px] xl:gap-10">
			<div className="w-full xl:mx-auto xl:max-w-2xl">
				<doc.Doc />
			</div>
			{toc.length > 0 && <TableOfContents items={toc} />}
		</main>
	)
}

export const dynamicParams = false
