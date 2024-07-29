import Image from 'next/image'

const Tecnicas = () => {
	return (
		<section className="h-screen" id="tecnicas">
			<div className="flex flex-col justify-center gap-16 pt-24 text-center">
				<h2 className="text-7xl font-semibold">Tecnicas</h2>
				<section className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-3 lg:grid-cols-5">
					{' '}
					<Image
						className="cursor-pointer"
						width={350}
						height={350}
						src={'/static/img/blanca.webp'}
						alt={'aaa'}
					/>{' '}
					<Image
						className=""
						width={350}
						height={350}
						src={'/static/img/blanca.webp'}
						alt={'aaa'}
					/>{' '}
					<Image
						className=""
						width={350}
						height={350}
						src={'/static/img/blanca.webp'}
						alt={'aaa'}
					/>{' '}
					<Image
						className=""
						width={350}
						height={350}
						src={'/static/img/blanca.webp'}
						alt={'aaa'}
					/>{' '}
					<Image
						className=""
						width={350}
						height={350}
						src={'/static/img/blanca.webp'}
						alt={'aaa'}
					/>
				</section>
			</div>
		</section>
	)
}

export default Tecnicas
