'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CustomLink = ({ href, text }: { href: string; text: string }) => {
	const pathname = usePathname()
	
	return (
		<Link
			className={'py-4 text-2xl font-medium text-black hover:font-bold'}
			href={href}
		>
			{text}
		</Link>
	)
}

export default CustomLink
