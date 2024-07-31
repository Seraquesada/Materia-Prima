'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Slider from './Slider'

const images = [
	{ url: '/img/blanca.webp' },
	{ url: '/img/bordo.webp' },
	{ url: '/img/negra.webp' },
]

const Main = () => {
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
		<section
			className="flex h-[92.5vh] flex-col items-center pt-24 md:flex-row md:justify-between md:pt-0"
			id="inicio"
		>
			<div className="text-center md:text-left">
				<h1 className="text-6xl font-semibold lg:text-8xl">
					MATERIA PRIMA
				</h1>
				<h3 className="text-xl md:text-2xl lg:text-3xl">
					Todo lo que necesitas para estampar
				</h3>
			</div>
			<Slider />
		</section>
	)
}

export default Main
