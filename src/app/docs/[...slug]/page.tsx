import { readFile } from "fs/promises"
import { join } from "path"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { TableOfContents } from "@/components/toc"

import { siteConfig } from "@/configs/site"

import { getMetadata } from "@/lib/metadata"
import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl } from "@/lib/url"

export async function generateMetadata({
	params,
}: DocPageProps): Promise<Metadata> {
	const doc = await getDocFromParams({ params })

	if (!doc) {
		return {}
	}

	return {
		title: doc.metadata.title,
		description: doc.metadata.description,
		openGraph: {
			title: doc.metadata.title,
			description: doc.metadata.description,
			type: "article",
			url: absoluteUrl("docs", doc.slug),
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: siteConfig.name,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: doc.metadata.title,
			description: doc.metadata.description,
			images: [siteConfig.ogImage],
			creator: "@borabalogluu",
		},
	}
}

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

	if (!doc || !source) {
		return null
	}

	const metadata = await getMetadata(source)

	return { Doc: doc.default, source, slug, metadata }
}

const DocPage = async ({ params }: DocPageProps) => {
	const doc = await getDocFromParams({ params })

	if (!doc) {
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

export default DocPage
