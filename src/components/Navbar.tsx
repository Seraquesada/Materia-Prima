'use client'
import Link from 'next/link'

const links = [
	{
		href: '/#inicio',
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
		href: '/#clientes',
		text: 'Clientes',
	},
	{
		href: '/#contacto',
		text: 'Contacto',
	},
]

const Navbar = () => {

	return (
		<nav className="sticky top-0 flex w-full justify-between bg-neutral-950 px-32 py-4 text-gray-200">
			<h4 className="font-bold"> MATERIA PRIMA</h4>
			<ul className="flex gap-4">
				{links.map((l) => (
					<li key={l.text}>
						<Link
							className="scroll-smooth border-b border-[#D9D9D9] px-5 text-xl"
							href={l.href}
						>
							{l.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
