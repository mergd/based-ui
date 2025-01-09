import {
	AspectRatio,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
	CarouselNext,
	CarouselPrevious,
} from "9ui"

const slides = [1, 2, 3, 4, 5]

export default function CarouselVertical() {
	return (
		<div className="w-60 sm:w-80 lg:w-96">
			<Carousel orientation="vertical" options={{ loop: true }}>
				<CarouselContent className="w-full aspect-video h-[-webkit-fill-available] p-1">
					{slides.map((slide) => (
						<CarouselItem key={slide} className="basis-full">
							<AspectRatio
								ratio={16 / 9}
								className="rounded-lg bg-bg border border-muted"
							>
								<div className="flex size-full items-center justify-center text-fg font-medium">
									{slide}
								</div>
							</AspectRatio>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNavigation className="bottom-0.5">
					<CarouselPrevious />
					<CarouselNext />
				</CarouselNavigation>
			</Carousel>
		</div>
	)
}
