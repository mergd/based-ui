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
				<CarouselContent className="aspect-video h-[-webkit-fill-available] w-full p-1">
					{slides.map((slide) => (
						<CarouselItem key={slide} className="basis-full">
							<AspectRatio
								ratio={16 / 9}
								className="rounded-lg border border-muted bg-bg"
							>
								<div className="flex size-full items-center justify-center font-medium text-fg">
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
