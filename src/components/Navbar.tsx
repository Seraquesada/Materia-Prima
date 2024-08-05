'use client'
import Link from 'next/link'
import Hamburguer from './Hamburguer'
import { useState } from 'react'

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
	const [open, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen(!open)
	}

	return (
		<nav className="sticky top-0 z-10 flex w-full justify-between bg-neutral-950 px-8 py-4 text-gray-200">
			<h4 className="font-bold">MATERIA PRIMA</h4>
			<div className="flex md:hidden" onClick={toggleOpen}>
				<Hamburguer isOpen={open} />
			</div>
			<ul
				className={`fixed left-0 top-0 z-10 h-screen w-48 transform bg-neutral-950 p-8 transition-transform duration-300 ease-in-out md:relative md:left-auto md:top-auto md:flex md:h-auto md:w-auto md:transform-none md:p-0 md:text-center ${
					open ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				{links.map((l) => (
					<li key={l.text} className="my-6 md:my-0 md:ml-4">
						<Link
							className="scroll-smooth border-b border-[#D9D9D9] pr-5 text-xl hover:border-b-2 hover:border-white md:border-none md:px-5 md:hover:border-none md:hover:font-bold"
							href={l.href}
							onClick={() => setOpen(false)}
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
