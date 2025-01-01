import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
	baseDirectory: import.meta.dir,
})

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...compat.config({
		$schema: "https://json.schemastore.org/eslintrc",
		extends: [
			"turbo",
			"prettier",
			"plugin:tailwindcss/recommended",
			"plugin:@typescript-eslint/recommended",
		],
		plugins: ["tailwindcss", "@typescript-eslint"],
		ignorePatterns: ["node_modules/", "dist/"],
		rules: {
			"react/jsx-key": "off",
			"tailwindcss/no-custom-classname": "off",
		},
		settings: {
			tailwindcss: {
				callees: ["merge", "cva"],
				config: "../tailwind.config.js",
			},
		},
	}),
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
	},
]

export default config
