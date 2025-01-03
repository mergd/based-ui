import baseConfig from "../../tailwind.config"

const config = {
	...baseConfig,
	content: [...baseConfig.content, "src/**/*.{js,ts,jsx,tsx,mdx}"],
}

export default config
