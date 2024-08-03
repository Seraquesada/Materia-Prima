'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
	{ url: '/img/blanca.webp' },
	{ url: '/img/bordo.webp' },
	{ url: '/img/negra.webp' },
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
		<div className="group relative px-4 py-16">
			<div className="h-full w-full rounded-2xl bg-cover bg-center duration-500">
				<Image
					src={images[currentIndex].url}
					alt="ImageDescription"
					width={500}
					height={500}
				/>
			</div>
		</div>
	)
}
export default Slider
