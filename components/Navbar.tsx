'use client'

import ThemeToggleButton from '@/components/utilities/ThemeToggleButton'
import logoImg from '@/public/logo.svg'
import logoImgDark from '@/public/logo_dark.svg'
import Image from 'next/image'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'
import Button from '@/components/ui/Button'

const Navbar = () => {
	const { theme } = useTheme()
	const currentPath = usePathname()

	const paths = [
		{
			path: '/',
			name: 'Home'
		},
		{
			path: '/about',
			name: 'About Us'
		},
		{
			path: '/pricing',
			name: 'Pricing'
		},
		{
			path: '/features',
			name: 'Features'
		}
	]

	return (
		<div className="col-span-full flex items-center justify-between">
			<div className="flex items-center">
				<Link href="/">
					{theme === 'light' ? <Image src={logoImg} alt="UIFry logo" /> : <Image src={logoImgDark} alt="UIFry logo" />}
				</Link>
				<div className="flex items-center space-x-5 ml-11">
					{paths.map((path, index) => (
						<Link key={index} href={path.path} className={cn(
							'text-zinc-950 dark:text-zinc-50 font-semibold',
							'hover:text-red-400 dark:hover:text-red-600',
							'transition',
							currentPath === path.path ? 'text-red-400 dark:text-red-600' : ''
						)}>
							{path.name}
						</Link>
					))}
				</div>
			</div>

			<div className="flex items-center gap-4">
				<ThemeToggleButton />
				<Button>Download</Button>
			</div>
		</div>
	)
}

export default Navbar
