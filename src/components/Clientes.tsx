import Image from 'next/image'
import adidas from '../../public/adidas.png'
import nike from '../../public/nike.png'
import puma from '../../public/puma.png'
import herencia from '../../public/herencia.png'
import vans from '../../public/vans.png'
import kosiuko from '../../public/kosiuko.png'
import cheeky from '../../public/cheeky.png'
import mimo from '../../public/mimo.png'
import grisino from '../../public/grisino.png'

const Clientes = () => {
	return (
		<section className="" id="clientes">
			<div className="flex flex-col items-center justify-center gap-10 pt-24 text-center">
				<h2 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
					Clientes
				</h2>
				<h4 className="text-3xl font-semibold">
					Empresas que ya confiaron en nosotros
				</h4>

				<div className="flex flex-wrap justify-center gap-20">
					<Image
						src={adidas}
						alt="adidas"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>
					<Image
						src={nike}
						alt="nike"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>
					<Image
						src={puma}
						alt="puma"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>
					<Image
						src={herencia}
						alt="herencia"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>
					<Image
						src={vans}
						alt="vans"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>{' '}
					<Image
						src={kosiuko}
						alt="kosiuko"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>{' '}
					<Image
						src={mimo}
						alt="mimo"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>{' '}
					<Image
						src={grisino}
						alt="grisino"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>{' '}
					<Image
						src={cheeky}
						alt="cheeky"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>
				</div>

				<div>
					<h4 className="pt-10 text-3xl font-semibold">
						Dejemos que ellos hablen por nosotros
					</h4>
				</div>
			</div>
		</section>
	)
}

export default Clientes
