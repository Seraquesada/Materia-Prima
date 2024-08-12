'use client'

import {
	GoogleMap,
	InfoWindowF,
	MarkerF,
	useJsApiLoader,
} from '@react-google-maps/api'
import { useState } from 'react'

const containerStyle = {
	width: '500px ',
	height: '500px ',
	borderRadius: '20px ',
}

const center = {
	lat: -34.52167,
	lng: -58.52893,
}

const Mapa = () => {
	const [open, setOpen] = useState(false)
	const { isLoaded } = useJsApiLoader({
		id: 'materia-prima',
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
	})

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
			{/* Child components, such as markers, info windows, etc. */}

			<MarkerF position={center} onClick={() => setOpen(true)} />
			{open && (
				<InfoWindowF
					position={center}
					onCloseClick={() => setOpen(false)}
				>
					<p className="font-semibold text-black">
						Fabrica de Materia Prima
					</p>
				</InfoWindowF>
			)}
		</GoogleMap>
	) : (
		<></>
	)
}

export default Mapa
