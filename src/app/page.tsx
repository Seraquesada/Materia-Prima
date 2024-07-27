import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Tecnicas from '@/components/Tecnicas'

export default function Home() {
	return (
		<main className="flex flex-col items-center bg-gradient-to-b from-neutral-950 from-30% to-[#751006] text-gray-200">
			<Navbar />
			<div className="w-10/12">
				<Main />
				<Tecnicas />
			</div>
		</main>
	)
}
