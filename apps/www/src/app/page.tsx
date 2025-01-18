import Link from "next/link"
import Monicon from "@monicon/react"
import { Badge, Button } from "9ui"

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center gap-12 py-10">
			<main className="container flex max-w-screen-lg flex-col items-center gap-8 text-center">
				<div className="flex flex-col items-center gap-4">
					<Badge variant="outline" className="gap-1 py-1">
						<Monicon name="ri:time-fill" />
						Coming Soon
					</Badge>
					<h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						Beautiful UI components <br />
						built with Base UI
					</h1>
					<p className="max-w-2xl text-balance text-base text-muted-fg">
						A collection of modern, accessible, and performant UI components for
						building your next web application. Fully customizable and open
						source.
					</p>
				</div>

				<div className="flex flex-col items-center gap-4 sm:flex-row">
					<Button>
						<Link href="/docs">Get Started</Link>
					</Button>
					<Button variant="ghost">
						<Link href="/docs/components">Browse Components</Link>
					</Button>
				</div>

				<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
					<div className="flex flex-col gap-4 rounded-md border border-muted p-6 text-left">
						<div className="flex size-10 items-center justify-center rounded-full bg-subtle/50">
							<Monicon name="ri:flashlight-fill" />
						</div>
						<div className="flex flex-col gap-1">
							<h3 className="font-semibold">Performance First</h3>
							<p className="text-sm text-muted-fg">
								Built with performance in mind, ensuring smooth interactions and
								fast load times.
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4 rounded-md border border-muted p-6 text-left">
						<div className="flex size-10 items-center justify-center rounded-full bg-info/50 text-info-fg">
							<Monicon name="ri:brush-fill" />
						</div>
						<div className="flex flex-col gap-1">
							<h3 className="font-semibold">Customizable</h3>
							<p className="text-sm text-muted-fg">
								Fully customizable components that adapt to your brand and
								design needs.
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4 rounded-md border border-muted p-6 text-left">
						<div className="flex size-10 items-center justify-center rounded-full bg-success/50 text-success-fg">
							<Monicon name="ri:shield-check-fill" />
						</div>
						<div className="flex flex-col gap-1">
							<h3 className="font-semibold">Accessible</h3>
							<p className="text-sm text-muted-fg">
								Built with accessibility in mind, following WAI-ARIA standards
								and best practices.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
