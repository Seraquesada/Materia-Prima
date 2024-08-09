'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
	{ url: '/img/portaPrenda.jpg' },
	{ url: '/img/pulpo.jpg' },
	{ url: '/img/pulpos2.jpg' },
	{ url: '/img/pulposProductos.jpg' },
	{ url: '/img/pulposProductos2.jpg' },
	{ url: '/img/shablon.jpg' },
]

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		const isLastSlide = currentIndex === images.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlide()
		}, 3500) // Change slide every 5 seconds

		// Clean up the interval on component unmount
		return () => clearInterval(intervalId)
	}, [currentIndex])
	return (
		<div className="group relative">
			<div className="rounded-2xl bg-cover bg-center duration-500">
				<Image
					src={images[currentIndex].url}
					alt="ImageDescription"
					width={600}
					height={600}
					className='rounded-md'
				/>
			</div>
		</div>
	)
}
export default Slider
