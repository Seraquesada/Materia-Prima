import Image from 'next/image'
import Slider from './Slider'

const SobreNosotros = () => {
	return (
		<section className="" id="sobrenosotros">
			<div className="flex flex-col items-center justify-center gap-24 pt-24 text-center">
				<h2 className="text-7xl font-semibold">Sobre Nosotros</h2>
				<ul className="grid w-full justify-center gap-20 text-2xl font-semibold sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					<li className="flex flex-col">
						<span>+80</span>Empleados
					</li>
					<li className="flex flex-col">
						<span>+40</span>
						Años de experiencia
					</li>
					<li className="flex flex-col">
						<span>+30</span>
						Clientes
					</li>
					<li className="flex flex-col">
						<span>+80</span>
						Trabajos
					</li>
					<li className="flex flex-col">
						<span>+15</span>
						Tecnicas
					</li>
				</ul>
				<div className="flex w-full flex-col justify-evenly border text-start md:flex-row">
					<Slider />
					<p className="  self-center text-3xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatem voluptatibus aperiam iste a autem reiciendis
						nemo quos facere, voluptate, nobis at omnis libero
						beatae officiis adipisci quaerat nihil? Nihil, corporis?
					</p>
				</div>
			</div>
		</section>
	)
}

export default SobreNosotros
