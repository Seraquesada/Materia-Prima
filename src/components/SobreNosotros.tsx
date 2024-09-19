'use client'
import Slider from './Slider'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const data = [
	{ count: '+40', label: 'Años de experiencia' },
	{ count: '+50', label: 'Clientes' },
	{ count: '+80', label: 'Empleados' },
	{ count: '+20', label: 'Tecnicas' },
]

const SobreNosotros = () => {
	useGSAP(() => {
		gsap.from('.count', {
			opacity: 0,
			stagger: 0.5,
			scrollTrigger: {
				trigger: '.count',
				start: '-100px bottom',
			},
		})
	})

	return (
		<section className="" id="sobrenosotros">
			<div className="flex flex-col items-center justify-center gap-24 pt-24 text-center">
				<h2 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
					Sobre Nosotros
				</h2>
				<ul className="counter grid w-full justify-center gap-20 text-3xl font-semibold sm:grid-cols-2 lg:grid-cols-4">
					{data.map((item, index) => (
						<li key={index} className="count flex flex-col">
							<span>{item.count}</span>
							{item.label}
						</li>
					))}
				</ul>
				<div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
					<Slider />
					<p className="text-start font-[inter] text-xl lg:w-[65%]">
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
