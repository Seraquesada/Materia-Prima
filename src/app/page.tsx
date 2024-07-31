import Clientes from '@/components/Clientes'
import Contacto from '@/components/Contacto'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import SobreNosotros from '@/components/SobreNosotros'
import Tecnicas from '@/components/Tecnicas'

export default function Home() {
	return (
		<main className="flex flex-col items-center bg-gradient-to-b from-neutral-950 to-[#751006] text-neutral-100">
			<Navbar />
			<div className="flex w-10/12 flex-col">
				<Main />
				<Tecnicas />
				<SobreNosotros />
				<Clientes />
				<Contacto />
			</div>
		</main>
	)
}
