import Slider from './Slider'

const SobreNosotros = () => {
	return (
		<section className="" id="sobrenosotros">
			<div className="flex flex-col items-center justify-center gap-24 pt-24 text-center">
				<h2 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
					Sobre Nosotros
				</h2>
				<ul className="grid w-full justify-center gap-20 text-3xl font-semibold sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
				<div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
					<Slider />
					<p className="text-start text-lg sm:text-2xl md:text-3xl lg:w-[65%]">
						Materia Prima es una empresa con más de 40 años de
						experiencia en el sector de estampados, especializada en
						la serigrafía para grandes volúmenes. Nos destacamos por
						nuestra constante innovación y el uso de tecnología de
						vanguardia, empleando tintas de la más alta calidad.
						Contamos con un equipo de profesionales altamente
						capacitados que nos permite ofrecer estampados
						excepcionales y duraderos. Nuestro compromiso con la
						excelencia nos ha posicionado como líderes en el
						mercado, siempre enfocados en superar las expectativas
						de nuestros clientes.
					</p>
				</div>
			</div>
		</section>
	)
}

export default SobreNosotros
