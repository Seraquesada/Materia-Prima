import Clientes from '@/components/Clientes'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import SobreNosotros from '@/components/SobreNosotros'
import Tecnicas from '@/components/Tecnicas'

export default function Home() {
	return (
		<main className="flex flex-col items-center bg-gradient-to-b from-neutral-950 to-[#751006] text-neutral-100">
			<Navbar />
			<div className="w-10/12">
				<Main />
				<Tecnicas />
				<SobreNosotros />
				<Clientes/>
			</div>
		</main>
	)
}
