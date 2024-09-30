import Link from 'next/link'
import Image from 'next/image'
import Form from './Form'
import Mapa from './mapa/Mapa'


const Contacto = () => {
	return (
		<section className="md:pb-[5rem]" id="contacto">
			<div className="flex flex-col justify-center gap-16 pt-24 text-center">
				<h2 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
					Contacto
				</h2>
				<Form />
			</div>
			<div className='flex flex-col-reverse md:flex-row pt-5 gap-3 items-center md:items-start'>

				<div className="">
					<p className='text-white text-wrap text-center' > ACASSUSO 5170, MUNRO, BUENOS AIRES</p>
					<p className='text-white text-wrap text-center' > 4764-4833 Interno 115</p>

					<Mapa />
				</div>
				<Link href={`https://wa.me/+5491140453849`} target="_blank" className='md:self-end'>
					<Image
						src={'whats.svg'}
						alt="whatsapp"
						height={150}
						width={150}
						className="hover:scale-x-105"
					/>
				</Link>
			</div>
		</section>
	)
}

export default Contacto
