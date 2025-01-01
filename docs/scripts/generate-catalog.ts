import fs from "fs"
import path from "path"
import { promisify } from "util"

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const writeFile = promisify(fs.writeFile)

async function getAllFiles(dir: string): Promise<string[]> {
	const entries = await readdir(dir, { withFileTypes: true })

	const files = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = path.join(dir, entry.name)
			return entry.isDirectory() ? getAllFiles(fullPath) : fullPath
		})
	)

	return files.flat()
}

async function generateMappings() {
	console.log("Generating catalog...")
	const demosDir = path.join(process.cwd(), "src/components/demos")
	const outputPath = path.join(process.cwd(), "src/configs/catalog.tsx")

	const files = await getAllFiles(demosDir)
	const demoFiles = files.filter((file) => file.endsWith(".tsx"))

	const mappings: Record<string, { content: string; importPath: string }> = {}

	for (const file of demoFiles) {
		const content = await readFile(file, "utf-8")
		const relativePath = path.relative(process.cwd(), file)
		const keyName = path.basename(file, ".tsx")

		mappings[keyName] = {
			content: content,
			importPath: relativePath.replace(/\\/g, "/"),
		}
	}

	const output = `
import React from 'react';

type Catalog = {
  [key: string]: {
    content: string;
    component: React.LazyExoticComponent<() => React.ReactElement>;
    title: string;
  };
};

export const Catalog: Catalog = {
  ${Object.entries(mappings).map(
		([key, value]) => `
  "${key}": {
    content: ${JSON.stringify(value.content).replace(" default ", " ")},
    component: React.lazy(() => import("@/${value.importPath.replace(/^src\//, "").replace(".tsx", "")}")),
    title: "${key}.tsx",
  }`
	)}
};
`

	await writeFile(outputPath, output)
	console.log("Catalog generated successfully!")
}

generateMappings().catch(console.error)
