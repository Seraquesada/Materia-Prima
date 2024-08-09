'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const imgs = [
	{
		src: '/tecnicas/planoPuma.jpg',
		name: 'Plana',
	},
	{
		src: '/tecnicas/planoGOAT.jpg',
		name: 'Plana',
	},
	{
		src: '/tecnicas/planoPuffTexturaPielGlitter.jpg',
		name: 'Relieve',
	},
	{
		src: '/tecnicas/planoAlturaShimmer.jpg',
		name: 'Shimmer',
	},
	{
		src: '/tecnicas/planoElàstico.jpg',
		name: 'Spandex',
	},
	{
		src: '/tecnicas/planoCorrosion.jpg',
		name: 'Corrosion',
	},
	{
		src: '/tecnicas/planoVans.jpg',
		name: 'Plastisol',
	},
	{
		src: '/tecnicas/planoFluo.jpg',
		name: 'Flou',
	},
	{
		src: '/tecnicas/planoTramaSemitonos.jpg',
		name: 'Monocromia',
	},
	{
		src: '/tecnicas/planoTramaSemitonos2.jpg',
		name: 'Cuatricromia',
	},
	{
		src: '/tecnicas/planoFotoNike.jpg',
		name: 'Fotocromia',
	},
	{
		src: '/tecnicas/planoGlitter2.jpg',
		name: 'Glitter',
	},
	{
		src: '/tecnicas/planoFlock.jpg',
		name: 'Flock',
	},
	{
		src: '/tecnicas/planoFoil2.jpg',
		name: 'Foil',
	},
	{
		src: '/tecnicas/planoMicroAltura2.jpg',
		name: 'Caviar',
	},
	{
		src: '/tecnicas/tramsfer.jpg',
		name: 'Transfer',
	},
	{
		src: '/tecnicas/planoPapelSiliconado.jpg',
		name: 'Silicona',
	},
	{
		src: '/tecnicas/planoMetalMessi5c.jpg',
		name: 'Perlado',
	},
	{
		src: '/tecnicas/planoReflectivo.jpg',
		name: 'Reflectivo',
	},
	{
		src: '/tecnicas/planoHiperNike.jpg',
		name: 'Hiper',
	},
]

const Tecnicas = () => {
	const [img, setImg] = useState<string | undefined>()
	const [name, setName] = useState<string | undefined>()
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	useGSAP(() => {
		gsap.from('.imgs', {
			opacity: 0,
			y: 50,
			stagger: 0.15,
			scrollTrigger: {
				trigger: '.imgs',
				start: '-150px center',
			},
		})
	})

	useEffect(() => {
		if (!img) return
		dialogRef.current?.showModal()
		document.body.style.overflow = 'hidden'
		dialogRef.current?.addEventListener('close', closeModal)
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			dialogRef.current?.removeEventListener('close', closeModal)
		}
	}, [img])

	const closeModal = () => {
		dialogRef.current?.close()
		setImg(undefined)
		document.body.style.overflow = ''
	}

	const onClickImg = (src: string, name: string) => {
		setImg(src)
		setName(name)
	}

	return (
		<section id="tecnicas" className="tecnicas">
			<div className="flex flex-col justify-center gap-16 pt-24 text-center">
				<h2 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
					Tecnicas
				</h2>

				<dialog ref={dialogRef} className="backdrop:bg-black/45">
					<div className="relative z-0 max-h-[90vh] max-w-[90vw]">
						<p className="text-center text-2xl font-bold">
							Tecnica {name}
						</p>
						{img && name && (
							<Image
								className="w-72 object-cover sm:w-96 lg:w-[32rem]"
								width={350}
								height={350}
								src={img}
								alt={name}
							/>
						)}
					</div>
					<button
						onClick={closeModal}
						className="absolute right-2 top-2 z-10 flex h-5 w-5 items-center rounded-md bg-zinc-400 shadow"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="black"
							className="size-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
						<span className="sr-only">close</span>
					</button>
				</dialog>

				<ul className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
					{' '}
					{imgs.map((img) => (
						<li key={img.name}>
							<button
								onClick={() => onClickImg(img.src, img.name)}
							>
								<Image
									className="imgs w-64 rounded-md md:w-80 xl:w-[32rem]"
									width={350}
									height={350}
									src={img.src}
									alt={img.name}
								/>
							</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Tecnicas
