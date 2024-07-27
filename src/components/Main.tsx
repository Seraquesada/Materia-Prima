'use client'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Main = () => {
	return (
		<section className="flex h-[92.5vh] items-center justify-between ">
			<div>
				<h1 className="text-8xl">MATERIA PRIMA</h1>
				<h3 className="text-2xl ">
					Todo lo que necesitas para estampar tus remeras
				</h3>
			</div>

			<Swiper
				navigation
				slidesPerView={1}
				direction='horizontal'
				pagination={{ type: 'fraction' }}
				modules={[Navigation, Pagination]}
				
			>
				<SwiperSlide>
					{' '}
					<Image
						className=""
						width={575}
						height={400}
						src={'/static/img/blanca.webp'}
						alt={'carrousel'}
					/>
				</SwiperSlide>{' '}
				{/* <SwiperSlide>
					{' '}
					<Image
						className=""
						width={575}
						height={400}
						src={'/static/img/negra.webp'}
						alt={'carrousel'}
					/>
				</SwiperSlide>{' '}
				<SwiperSlide>
					{' '}
					<Image
						className=""
						width={575}
						height={400}
						src={'/static/img/bordo.webp'}
						alt={'carrousel'}
					/>
				</SwiperSlide> */}
			</Swiper>
		</section>
	)
}

export default Main
