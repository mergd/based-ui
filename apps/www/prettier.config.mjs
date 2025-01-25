import baseConfig from "../../prettier.config.mjs";

const config = {
	...baseConfig,
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@/components/(.*)$",
		"",
		"^@/configs/(.*)$",
		"",
		"^@/providers/(.*)$",
		"",
		"^@/lib/(.*)$",
		"",
		"^[./]",
	],
};

export default config;
