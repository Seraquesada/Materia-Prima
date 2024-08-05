import Slider from './Slider'
import Title from './Title'

const Main = () => {
	return (
		<section
			className="flex h-[92.5vh] flex-col items-center justify-center gap-14 pt-24 md:flex-row md:justify-between md:gap-0 md:pt-0"
			id="inicio"
		>
			<Title />
			<Slider />
		</section>
	)
}

export default Main
