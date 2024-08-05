'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const imgs = [
	{
		src: '/img/blanca.webp',
		name: 'PLANA',
	},
	{
		src: '/img/blanca.webp',
		name: 'RELIEVE',
	},
	{
		src: '/img/blanca.webp',
		name: 'SHIMMER',
	},
	{
		src: '/img/blanca.webp',
		name: 'SPANDEX',
	},
	{
		src: '/img/blanca.webp',
		name: 'CORROSION',
	},
	{
		src: '/img/blanca.webp',
		name: 'PLASTISOL',
	},
	{
		src: '/img/blanca.webp',
		name: 'AL AGUA',
	},
	{
		src: '/img/blanca.webp',
		name: 'MONOCROMIA',
	},
	{
		src: '/img/blanca.webp',
		name: 'CUATRICROMIA',
	},
	{
		src: '/img/blanca.webp',
		name: 'FOTOCROMIA',
	},
	{
		src: '/img/blanca.webp',
		name: 'GLITTER',
	},
	{
		src: '/img/blanca.webp',
		name: 'FLOCK',
	},
	{
		src: '/img/blanca.webp',
		name: 'FOIL',
	},
	{
		src: '/img/blanca.webp',
		name: 'CAVIAR',
	},
	{
		src: '/img/blanca.webp',
		name: 'TRANSFER',
	},
	{
		src: '/img/blanca.webp',
		name: 'SILICONA',
	},
	{
		src: '/img/blanca.webp',
		name: 'PERLADO ',
	},
]

const Tecnicas = () => {
	gsap.registerPlugin(ScrollTrigger)

	ScrollTrigger.batch('.imgs', {
		// interval: 0.1, // time window (in seconds) for batching to occur.
		// batchMax: 3,   // maximum batch size (targets)
		onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, stagger: 0.1 }),
		// also onLeave, onEnterBack, and onLeaveBack
		// also most normal ScrollTrigger values like start, end, etc.
	})
	const container = useRef(null)

	useGSAP(
		() => {
			gsap.from('.imgs', {
				opacity: 0,
				y: 50,
				stagger: 0.15,
				scrollTrigger: {
					trigger: '.imgs',
					start:"top center"
				},
			})
		},
		{ scope: container },
	)

	return (
		<section ref={container} id="tecnicas" className="tecnicas">
			<div className="flex flex-col justify-center gap-16 pt-24 text-center">
				<h2 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
					Tecnicas
				</h2>
				<section className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					{' '}
					{imgs.map((img) => (
						<Image
							key={img.name}
							className="imgs curson-pointer w-64 rounded-md object-contain sm:w-full"
							width={350}
							height={350}
							src={img.src}
							alt={img.name}
						/>
					))}
				</section>
			</div>
		</section>
	)
}

export default Tecnicas
