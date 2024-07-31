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

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

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
			{/* Left Arrow */}
			<div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
				<svg
					onClick={prevSlide}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
					/>
				</svg>
			</div>
			{/* Right Arrow */}
			<div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
				<svg
					onClick={nextSlide}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
					/>
				</svg>
			</div>
		</div>
	)
}
export default Slider
