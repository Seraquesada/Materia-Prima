import Image from 'next/image'

const SobreNosotros = () => {
	return (
		<section className="h-screen" id="sobrenosotros">
			<div className="flex flex-col items-center justify-center gap-24 pt-24 text-center">
				<h2 className="text-7xl font-semibold">Sobre Nosotros</h2>
				<ul className="grid w-full sm:grid-cols-3 lg:grid-cols-5  justify-center gap-20 text-2xl font-semibold">
					<li className="flex flex-col">
						<span>+50 </span>Empleados
					</li>
					<li className="flex flex-col">
						<span>+5 </span>
						Años de experiencia
					</li>
					<li className="flex flex-col">
						<span>+100 </span>
						Clientes
					</li>
					<li className="flex flex-col">
						<span>+200 </span>
						Trabajos
					</li>
					<li className="flex flex-col">
						<span>+10 </span>
						Tecnicas
					</li>
				</ul>
				<div className="flex w-full justify-evenly border text-start">
					<Image
						width={450}
						height={450}
						src={'/static/img/blanca.webp'}
						alt={'carrousel'}
					/>
					<p className="w-[520px] place-self-start self-center text-3xl">
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
