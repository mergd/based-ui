import { readFile, writeFile } from "fs/promises"
import { join, relative } from "path"
import { glob } from "glob"

import { getMetadata } from "@/lib/metadata"

interface ContentFile {
	source: string
	path: string
	meta: {
		title: string
		description: string
	}
	urlPath: string
}

const CONTENT_DIR = join(process.cwd(), "src/content")
const OUTPUT_PATH = join(process.cwd(), "src/__registry__/contents.tsx")

async function findContentFiles(): Promise<ContentFile[]> {
	const files = await glob("**/*.mdx", {
		cwd: CONTENT_DIR,
		absolute: true,
	})

	const contentFiles = await Promise.all(
		files.map(async (file) => {
			const source = await readFile(file, "utf-8")
			const relativePath = relative(CONTENT_DIR, file)
			const meta = await getMetadata(source)

			// Convert file path to URL path
			let urlPath = relativePath.replace(/\.mdx$/, "")

			// Handle index files
			if (urlPath.endsWith("/index")) {
				urlPath = urlPath.replace(/\/index$/, "")
			}

			return {
				source,
				path: relativePath,
				meta,
				urlPath,
			}
		})
	)

	return contentFiles
}

function generateRegistryCode(contents: ContentFile[]): string {
	const imports = [
		'import type { ContentRegistry } from "@/types/content"',
	].join("\n")

	const registry = contents
		.map(
			({ path, meta, urlPath }) => `
  "${urlPath}": {
    type: ${JSON.stringify(path.endsWith("/index.mdx") ? "index" : "file")},
    path: ${JSON.stringify(path)},
    meta: ${JSON.stringify(meta)},
    urlPath: ${JSON.stringify(urlPath)}
  }`
		)
		.join(",")

	return `${imports}

export const contentRegistry: ContentRegistry = {${registry}
}
`
}

async function generateContentRegistry() {
	console.log("🔍 Finding content files...")
	const contents = await findContentFiles()

	console.log("📝 Generating registry code...")
	const registryCode = generateRegistryCode(contents)

	console.log("💾 Writing registry file...")
	await writeFile(OUTPUT_PATH, registryCode)

	console.log("✨ Content registry generated successfully!")
	console.log(`📊 Total content files: ${contents.length}`)
}

generateContentRegistry().catch((error) => {
	console.error("Failed to generate content registry:", error)
	process.exit(1)
})
