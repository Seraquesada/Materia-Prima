import type { Metadata } from 'next'
import { Inter, Roboto_Condensed } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto_Condensed({subsets:["latin"]})

export const metadata: Metadata = {
	title: 'Materia Prima',
	description: 'Estampados tus ideas en la vida real',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`${inter.className} ${roboto.className}`}>
				{children}
			</body>
		</html>
	)
}
