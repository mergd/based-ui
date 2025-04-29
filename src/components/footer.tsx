export const Footer = () => (
	<footer className="border-t">
		<div className="container mx-auto p-4">
			<div className="text-balance text-center text-sm text-muted-foreground md:text-left">
				Built by{" "}
				<a
					href="https://twitter.com/borabalogluu"
					target="_blank"
					rel="noreferrer"
					className="font-medium text-foreground underline underline-offset-4"
				>
					borabalogluu
				</a>
				&thinsp; and customized by{" "}
				<a
					href="https://twitter.com/w_y_x"
					target="_blank"
					rel="noreferrer"
					className="font-medium text-foreground underline underline-offset-4"
				>
					mergd
				</a>
				{" • "}
				<a
					href="https://github.com/mergd/based-ui"
					target="_blank"
					rel="noreferrer"
					className="font-medium text-foreground underline underline-offset-4"
				>
					source code
				</a>
				.
			</div>
		</div>
	</footer>
)
