'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tecnicas = [
	'Plana',
	'Relieve',
	'Shimmer',
	'Spandex',
	'Corrosion',
	'Plastisol',
	'Flou',
	'Monocromia',
	'Cuatricromia',
	'Fotocromia',
	'Glitter',
	'Flock',
	'Foil',
	'Caviar',
	'Transfer',
	'Silicona',
	'Perlado',
	'Reflectivo',
	'Hiper',
]

const imgs = [
	{
		src: '/tecnicas/planoPuma.jpg',
		name: 'Plana',
	},
	{
		src: '/tecnicas/planoGOAT.jpg',
		name: 'Plana ',
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
		gsap.from('.img-container', {
			opacity: 0,
			y: 50,
			stagger: 0.15,
			scrollTrigger: {
				trigger: '.img-container',
				start: '-150px center',
			},
		})
	})

	useEffect(() => {
		if (!img) return

		const dialog = dialogRef.current

		const handleOutsideClick = (event: MouseEvent) => {
			// Check if the clicked target is the dialog itself (not the content inside it)
			if (dialog && event.target === dialog) {
				dialog.close()
				setImg(undefined)
				document.body.style.overflow = ''
			}
		}

		dialog?.showModal()
		document.body.style.overflow = 'hidden'

		// Add event listener to detect clicks outside the image
		dialog?.addEventListener('click', handleOutsideClick)

		return () => {
			// Cleanup: Remove event listener and reset body overflow
			dialog?.removeEventListener('click', handleOutsideClick)
			document.body.style.overflow = ''
		}
	}, [img])

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
				<ul className="flex flex-wrap justify-center gap-7 text-2xl">
					{tecnicas.map((tecnica) => (
						<li key={tecnica}>{tecnica}</li>
					))}
				</ul>
				<dialog ref={dialogRef} className="backdrop:bg-black/45">
					<div className="relative z-0 max-h-[90vh] max-w-[90vw]">
						<p className="text-center text-2xl font-bold">{name}</p>
						{img && name && (
							<Image
								className="w-96 object-cover sm:w-[32rem] lg:w-[44rem]"
								width={450}
								height={450}
								src={img}
								alt={name}
							/>
						)}
					</div>
				</dialog>

				<ul className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
					{imgs.map((img) => (
						<li key={img.src} className="img-container">
							<button
								onClick={() => onClickImg(img.src, img.name)}
							>
								<Image
									className="imgs w-64 rounded-md transition-transform duration-300 ease-in-out hover:scale-105 md:w-80 xl:w-[32rem]"
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
