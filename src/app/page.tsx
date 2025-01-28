import Link from "next/link"
import {
	ClockIcon,
	PaintbrushIcon,
	ShieldCheckIcon,
	ZapIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Home = () => (
	<div className="flex flex-col items-center justify-center gap-12 py-10">
		<main className="container flex max-w-screen-lg flex-col items-center gap-8 text-center">
			<div className="flex flex-col items-center gap-4">
				<Badge variant="outline" className="gap-1 py-1">
					<ClockIcon size={16} />
					Coming Soon
				</Badge>
				<h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
					Beautiful UI components <br />
					built with Base UI
				</h1>
				<p className="max-w-2xl text-balance text-base text-muted-foreground">
					A collection of modern, accessible, and performant UI components for
					building your next web application. Fully customizable and open
					source.
				</p>
			</div>

			<div className="flex flex-col items-center gap-4 sm:flex-row">
				<Link href="/docs">
					<Button>Get Started</Button>
				</Link>

				<Link href="/docs/components">
					<Button variant="ghost">Browse Components</Button>
				</Link>
			</div>

			<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
				<div className="flex flex-col gap-4 rounded-md border p-6 text-left">
					<div className="flex size-10 items-center justify-center rounded-full bg-muted/50">
						<ZapIcon size={20} />
					</div>
					<div className="flex flex-col gap-1">
						<h3 className="font-semibold">Performance First</h3>
						<p className="text-sm text-muted-foreground">
							Built with performance in mind, ensuring smooth interactions and
							fast load times.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 rounded-md border p-6 text-left">
					<div className="flex size-10 items-center justify-center rounded-full bg-info/50 text-info-foreground">
						<PaintbrushIcon size={20} />
					</div>
					<div className="flex flex-col gap-1">
						<h3 className="font-semibold">Customizable</h3>
						<p className="text-sm text-muted-foreground">
							Fully customizable components that adapt to your brand and design
							needs.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 rounded-md border p-6 text-left">
					<div className="flex size-10 items-center justify-center rounded-full bg-success/50 text-success-foreground">
						<ShieldCheckIcon size={20} />
					</div>
					<div className="flex flex-col gap-1">
						<h3 className="font-semibold">Accessible</h3>
						<p className="text-sm text-muted-foreground">
							Built with accessibility in mind, following WAI-ARIA standards and
							best practices.
						</p>
					</div>
				</div>
			</div>
		</main>
	</div>
)

export default Home
