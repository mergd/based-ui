"use client"

import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { GlobeIcon, UserIcon } from "lucide-react"

import {
	PreviewCard,
	PreviewCardContent,
	PreviewCardTrigger,
} from "@/components/ui/preview-card"

export default function PreviewCardDemo() {
	return (
		<PreviewCard>
			<p className="max-w-80 text-balance text-foreground">
				This is a preview card component from{" "}
				<PreviewCardTrigger className="cursor-pointer underline underline-offset-2">
					based-ui
				</PreviewCardTrigger>
				.
			</p>
			<PreviewCardContent className="max-w-80 text-sm">
				<p className="mt-2">
					Beautiful, customizable components built with{" "}
					<a
						href="https://base-ui.com"
						className="underline underline-offset-2"
						target="_blank"
					>
						Base UI
					</a>{" "}
					and{" "}
					<a
						href="https://tailwindcss.com"
						className="underline underline-offset-2"
						target="_blank"
					>
						Tailwind CSS
					</a>
					.
				</p>
				<div className="mt-2 flex flex-col gap-2 text-sm">
					<div className="flex items-center gap-2">
						<span className="flex items-center gap-1 text-muted-foreground">
							<UserIcon size={14} />
							Creator:
						</span>
						<a
							href="https://x.com/w_y_x"
							className="underline underline-offset-2"
							target="_blank"
						>
							mergd
						</a>
					</div>
					<div className="flex items-center gap-2">
						<span className="flex items-center gap-1 text-muted-foreground">
							<GitHubLogoIcon className="size-4" />
							Source code:
						</span>
						<a
							href="https://github.com/mergd/based-ui"
							className="underline underline-offset-2"
							target="_blank"
						>
							Github
						</a>
					</div>
					<div className="flex items-center gap-2">
						<span className="flex items-center gap-1 text-muted-foreground">
							<GlobeIcon size={14} />
							Website
						</span>
						<a
							href="https://ui.fldr.zip"
							className="underline underline-offset-2"
							target="_blank"
						>
							ui.fldr.zip
						</a>
					</div>
				</div>
			</PreviewCardContent>
		</PreviewCard>
	)
}
