import CustomLink from './CustomLink'

const links = [
	{
		href: '/',
		text: 'Inicio',
	},
	{
		href: '/#estampados',
		text: 'Estampados',
	},
	{
		href: '/#contacto',
		text: 'Contacto',
	},
]

const Navbar = () => {
	return (
		<nav>
			<ul className='flex gap-20 border-b-2 max-w-min px-12'>
				{links.map((l) => (
					<li key={l.text}>
						<CustomLink href={l.href} text={l.text} />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
