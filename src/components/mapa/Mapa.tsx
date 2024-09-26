


import Image from 'next/image'


const containerStyle = {
	width: '500px ',
	height: '500px ',
	borderRadius: '20px ',
}
const center = {
	lat: -34.52167,
	lng: -58.52893,

}

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API!
const Mapa = () => {

	return <Image
		src={`https://maps.googleapis.com/maps/api/staticmap?center=-34.52167,-58.52893&format=png32&zoom=15&scale=4&size=300x300&markers=color:red|size:small|-34.52167,-58.52893&key=${key}`}
		alt='mapa'
		width={300}
		height={300}
		className='py-5 md:py-0'
		priority={true}
	/>

}

export default Mapa