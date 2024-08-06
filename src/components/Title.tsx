'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const Title = () => {
	const title = useRef(null)

	useGSAP(
		
		() => {

			gsap.from('.title', {
				opacity: 0,
				stagger: 0.8,
			})
			
		
			
		},
		{ scope: title },

		
	)
	return (
		<div ref={title} className="text-center md:text-left">
			<h1 className="title text-5xl font-semibold sm:text-6xl lg:text-8xl">
				MATERIA PRIMA
			</h1>
			<h3 className="title text-xl md:text-2xl lg:text-3xl">
				Todo lo que necesitas para estampar
			</h3>
		</div>
	)
}

export default Title
