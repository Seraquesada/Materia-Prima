'use client'

import { MapContainer, TileLayer, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import { Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Mapa() {
	const position: LatLngExpression = [-34.52167, -58.52893] // Example coordinates

	return (
		<MapContainer
			center={position}
			zoom={15}
			scrollWheelZoom={false}
			style={{ height: '400px', width: '400px' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[-34.52167, -58.52893]}>
				<Popup>
					Fabrica de Materia Prima <br /> .
				</Popup>
			</Marker>
		</MapContainer>
	)
}

export default Mapa
