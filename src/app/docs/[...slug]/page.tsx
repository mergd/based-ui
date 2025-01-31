import { readFile } from "fs/promises"
import { join } from "path"
import { notFound } from "next/navigation"

import { TableOfContents } from "@/components/toc"

import { getTableOfContents } from "@/lib/toc"

interface DocPageProps {
	params: Promise<{
		slug: string[]
	}>
}

async function getDocFromParams({ params }: DocPageProps) {
	const { slug: slugs } = await params

	const slug = slugs.join("/")

	const doc = await import(`@/content/${slug}.mdx`)
	const source = await readFile(
		join(process.cwd(), "src/content", `/${slug}.mdx`),
		"utf-8"
	)

	return { Doc: doc.default, source }
}

const DocPage = async ({ params }: DocPageProps) => {
	const doc = await getDocFromParams({ params })

	if (!doc.Doc) {
		notFound()
	}

	const toc = await getTableOfContents(doc.source)

	return (
		<main className="relative xl:grid xl:grid-cols-[1fr_240px] xl:gap-10">
			<div className="w-full">
				<doc.Doc />
			</div>
			{toc.length > 0 && <TableOfContents items={toc} />}
		</main>
	)
}

export const dynamicParams = false

export default DocPage
