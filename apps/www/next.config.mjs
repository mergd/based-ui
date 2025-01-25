import { MoniconPlugin } from "@monicon/webpack"
import createMDX from "@next/mdx"
import rehypeExtractToc from "@stefanprobst/rehype-extract-toc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["mdx", "tsx", "ts", "js", "jsx"],
	reactStrictMode: true,
	webpack: (config) => {
		config.plugins.push(
			new MoniconPlugin({
				collections: ["ri"],
				type: "esm",
			})
		)

		return config
	},
	redirects() {
		return [
			{
				source: "/docs",
				destination: "/docs/getting-started/introduction",
				permanent: true,
			},
			{
				source: "/docs/getting-started",
				destination: "/docs/getting-started/introduction",
				permanent: true,
			},
			{
				source: "/docs/components",
				destination: "/docs/components/accordion",
				permanent: true,
			},
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
		],
	},
}

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeExtractToc],
	},
})

export default withMDX(nextConfig)
