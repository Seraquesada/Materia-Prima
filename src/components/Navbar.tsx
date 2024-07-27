'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
	{
		href: '/',
		text: 'Inicio',
	},
	{
		href: '/#tecnicas',
		text: 'Tecnicas',
	},
	{
		href: '/#sobrenosotros',
		text: 'Sobre Nosotros',
	},
	{
		href: '/#contacto',
		text: 'Contacto',
	},
]

const Navbar = () => {
	const pathname = usePathname()
	return (
		<nav className="sticky top-0 flex w-full justify-between bg-neutral-950 px-32 py-4 text-gray-200">
			<h4 className="font-bold"> MATERIA PRIMA</h4>
			<ul className="flex gap-4">
				{links.map((l) => (
					<Link
						key={l.text}
						className={'border-b border-[#D9D9D9] px-5 text-xl'}
						href={l.href}
					>
						{l.text}
					</Link>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
