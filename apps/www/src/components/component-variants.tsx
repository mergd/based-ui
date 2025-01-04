import { ComponentConfig } from "@/configs/component"

interface ComponentVariantsProps {
	name: keyof typeof ComponentConfig
}

export function ComponentVariants({ name }: ComponentVariantsProps) {
	const variants = ComponentConfig[name].variants

	return (
		<div className="border-secondary mt-4 flex flex-wrap items-center justify-center gap-4 rounded-lg border p-10">
			{variants?.map((variant) => variant)}
		</div>
	)
}
