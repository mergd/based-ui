export function Footer() {
	return (
		<footer className="border-primary border-t">
			<div className="container mx-auto p-4">
				<div className="text-secondary-fg text-balance text-center text-sm md:text-left">
					Built by{" "}
					<a
						href="https://twitter.com/borabalogluu"
						target="_blank"
						rel="noreferrer"
						className="text-fg font-medium underline underline-offset-4"
					>
						borabalogluu
					</a>
					{" • "}
					<a
						href="https://github.com/borabaloglu/9ui"
						target="_blank"
						rel="noreferrer"
						className="text-fg font-medium underline underline-offset-4"
					>
						source code
					</a>
					.
				</div>
			</div>
		</footer>
	)
}
