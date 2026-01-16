import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
	baseDirectory: import.meta.dir,
})

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...compat.config({
		$schema: "https://json.schemastore.org/eslintrc",
		root: true,
		extends: [
			"next/core-web-vitals",
			"next/typescript",
			"prettier",
			// "plugin:tailwindcss/recommended",
		],
		// plugins: ["tailwindcss", "@typescript-eslint"],
		plugins: ["@typescript-eslint"], // Temporarily removed tailwindcss
		ignorePatterns: ["node_modules/", ".next/", "dist/", "build/"],
		rules: {
			"@next/next/no-html-link-for-pages": "off",
			"react/jsx-key": "off",
			// "tailwindcss/no-custom-classname": "off", // Temporarily removed
			"@next/next/no-img-element": "off",
			"react-hooks/exhaustive-deps": "off",
		},
		// settings: {
		// 	tailwindcss: {
		// 		callees: ["cn"],
		// 		config: "./tailwind.config.js", // This file is removed in v4
		// 	},
		// },
	}),
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
	},
]

export default config
