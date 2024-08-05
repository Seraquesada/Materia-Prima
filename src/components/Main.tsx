import Slider from './Slider'

const Main = () => {
	return (
		<section
			className="flex h-[92.5vh] flex-col items-center justify-center gap-14 md:gap-0 pt-24 md:flex-row md:justify-between md:pt-0"
			id="inicio"
		>
			<div className="text-center md:text-left">
				<h1 className="text-5xl font-semibold sm:text-6xl lg:text-8xl">
					MATERIA PRIMA
				</h1>
				<h3 className="text-xl md:text-2xl lg:text-3xl">
					Todo lo que necesitas para estampar
				</h3>
			</div>
			<Slider />
		</section>
	)
}

export default Main
