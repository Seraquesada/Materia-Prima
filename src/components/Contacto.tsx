import Link from 'next/link'
import Image from 'next/image'
import Form from './Form'
import Mapa from './mapa'

const Contacto = () => {
	return (
		<section className="md:pb-[20rem]" id="contacto">
			<div className="flex flex-col justify-center gap-16 pt-24 text-center">
				<h2 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
					Contacto
				</h2>
				<Form />
			</div>
			<Link href={`https://wa.me/+5491140453849`} target="_blank">
				<Image
					src={'whats.svg'}
					alt="whatsapp"
					height={150}
					width={150}
					className="pt-10 hover:scale-105"
				/>
			</Link>
			<div className="flex justify-center pt-10 md:justify-end">
				{/* <Mapa /> */}
			</div>
		</section>
	)
}

export default Contacto
