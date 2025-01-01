import config from "../tailwind.config"

const tailwindConfig = {
	...config,
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/9ui/**/*.js"],
}

export default tailwindConfig
