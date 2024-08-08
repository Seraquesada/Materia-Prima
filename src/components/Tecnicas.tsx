'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const imgs = [
	{
		src: '/img/blanca.webp',
		name: 'Plana',
	},
	{
		src: '/img/bordo.webp',
		name: 'Relieve',
	},
	{
		src: '/img/negra.webp',
		name: 'Shimmer',
	},
	{
		src: '/img/blanca.webp',
		name: 'Spandex',
	},
	{
		src: '/img/blanca.webp',
		name: 'Corrosion',
	},
	{
		src: '/img/blanca.webp',
		name: 'Plastisol',
	},
	{
		src: '/img/blanca.webp',
		name: 'Al agua',
	},
	{
		src: '/img/blanca.webp',
		name: 'Monocromia',
	},
	{
		src: '/img/blanca.webp',
		name: 'Cuatricromia',
	},
	{
		src: '/img/blanca.webp',
		name: 'Fotocromia',
	},
	{
		src: '/img/blanca.webp',
		name: 'Glitter',
	},
	{
		src: '/img/blanca.webp',
		name: 'Flock',
	},
	{
		src: '/img/blanca.webp',
		name: 'Foil',
	},
	{
		src: '/img/blanca.webp',
		name: 'Caviar',
	},
	{
		src: '/img/blanca.webp',
		name: 'Transfer',
	},
	{
		src: '/img/blanca.webp',
		name: 'Silicona',
	},
	{
		src: '/img/blanca.webp',
		name: 'Perlado',
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
				start: 'top center',
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
					<div className="z-0max-h-[90vh] relative max-w-[90vw]">
						<p className="text-center text-2xl font-bold">
							Tecnica {name}
						</p>
						{img && name && (
							<Image
								className="w-72 sm:w-96 lg:w-[32rem]"
								width={450}
								height={450}
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
						<span className="sr-only"> close</span>
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
