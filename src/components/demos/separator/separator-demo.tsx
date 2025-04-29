import Link from "next/link"

import { Separator } from "@/components/ui/separator"

export default function SeparatorDemo() {
	return (
		<div>
			<p>
				Based-ui is a component library for building modern web applications –
				forked from{" "}
				<Link href="https://9ui.dev" className="underline underline-offset-2">
					9ui
				</Link>{" "}
				and built off of <Link href="https://base-ui.com">Base UI</Link>.
			</p>
			<Separator className="my-2.5" />
			<div className="flex gap-2.5">
				<p>Website</p>
				<Separator orientation="vertical" />
				<p>Documentation</p>
				<Separator orientation="vertical" />
				<p>Community</p>
			</div>
		</div>
	)
}
