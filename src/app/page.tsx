import Link from "next/link"
import { AlarmClockIcon, ArrowRightIcon, BookOpenIcon } from "lucide-react"

import Examples from "@/components/examples"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const Home = () => (
	<div className="container flex flex-col gap-12 py-10">
		<main className="flex flex-col gap-8">
			<div>
				<Badge variant="outline" className="h-8 gap-2">
					<span>🎉</span>First components are here!
				</Badge>
				<div className="mt-4 space-y-2">
					<h1 className="text-3xl font-semibold">Build your design system</h1>
					<p className="max-w-xl">
						A collection of components that you can copy and paste into your
						project. Built with{" "}
						<a
							href="https://base-ui.com/"
							className="underline underline-offset-4"
						>
							Base UI
						</a>{" "}
						and{" "}
						<a
							href="https://tailwindcss.com/"
							className="underline underline-offset-4"
						>
							Tailwind CSS
						</a>{" "}
						. Easy to customize. Free and open source.
					</p>
				</div>
				<div className="mt-6 flex items-center gap-4">
					<Link href="/docs">
						<Button className="gap-2" size="sm">
							<BookOpenIcon size={16} />
							Get Started
						</Button>
					</Link>

					<Link href="/docs/components">
						<Button variant="outline" size="sm" className="gap-2">
							Browse Components
							<ArrowRightIcon size={16} />
						</Button>
					</Link>
				</div>
			</div>

			<Separator />

			<Examples />
		</main>
	</div>
)

export default Home
