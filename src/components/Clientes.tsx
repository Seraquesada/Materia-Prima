import Image from 'next/image'
import adidas from '../../public/clientes/adidas.png'
import nike from '../../public/clientes/nike.png'
import puma from '../../public/clientes/puma.png'
import herencia from '../../public/clientes/herencia.png'
import vans from '../../public/clientes/vans.png'
import kosiuko from '../../public/clientes/kosiuko.png'
import cheeky from '../../public/clientes/cheeky.png'
import mimo from '../../public/clientes/mimo.png'
import grisino from '../../public/clientes/grisino.png'

interface Data {
	name: string
	position: string
	description: string
}

const data: Data[] = [
	{
		name: 'Sebastina Peréz',
		position: 'Marketing Nike',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate, error dolore sequi ducimus facere nostrum amet molestias, distinctio minus laboriosam ipsa. In minus molestiae quidem a assumenda culpa error!',
	},
	{
		name: 'Francisco Martinéz',
		position: 'CEO Mimo',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate, error dolore sequi ducimus facere nostrum amet molestias, distinctio minus laboriosam ipsa. In minus molestiae quidem a assumenda culpa error!',
	},
	{
		name: 'Lucas Garcia',
		position: 'Community Manager Puma',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate, error dolore sequi ducimus facere nostrum amet molestias, distinctio minus laboriosam ipsa. In minus molestiae quidem a assumenda culpa error!',
	},
]

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
						className="w-24 object-contain sm:w-32 md:w-40"
					/>
					<Image
						src={nike}
						alt="nike"
						className="w-24 object-contain sm:w-32 md:w-40"
					/>
					<Image
						src={puma}
						alt="puma"
						className="w-24 object-contain sm:w-32 md:w-40"
					/>
					<Image
						src={cheeky}
						alt="cheeky"
						className="w-32 object-contain sm:w-40 md:w-48"
					/>
					<Image
						src={herencia}
						alt="herencia"
						className="w-24 object-contain sm:w-32 md:w-40"
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
				</div>
			</div>
		</section>
	)
}

export default Clientes
