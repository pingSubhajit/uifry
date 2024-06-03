'use client'

import GridContainer from '@/components/utilities/GridContainer'
import Image from 'next/image'
import logoImgDark from '@/public/logo_dark.svg'
import logoImg from '@/public/logo.svg'
import Link from 'next/link'
import useMounted from '@/hooks/useMounted'
import {useTheme} from 'next-themes'
import {Mail, Phone} from 'lucide-react'
import Button from '@/components/ui/Button'

const footerLinks = [
	{
		title: 'links',
		links: [
			{ name: 'Home', href: '/' },
			{ name: 'About us', href: '/about' },
			{ name: 'Bookings', href: '/bookings' },
			{ name: 'Blog', href: '/blog' }
		],
	},
	{
		title: 'Legal',
		links: [
			{ name: 'Terms of use', href: '/terms-of-use' },
			{ name: 'Privacy policy', href: '/privacy-policy' },
			{ name: 'Cookie policy', href: '/cookie-policy' }
		],
	},
	{
		title: 'Product',
		links: [
			{ name: 'Take tour', href: '/tour' },
			{ name: 'Live chat', href: '/chat' },
			{ name: 'Reviews', href: '/reviews' }
		],
	}
]

const Footer = ({ className }: { className?: string }) => {
	const { theme } = useTheme()
	const mounted = useMounted()

	return (
		<GridContainer className={className}>
			<footer className="col-span-full">
				<div className="flex flex-col lg:flex-row gap-16">
					<div className="w-64 xl:w-80 2xl:w-96 space-y-4">
						<Link href="/">
							{mounted && theme === 'dark' ? <Image src={logoImgDark} alt="UIFry logo"/> :
								<Image src={logoImg} alt="UIFry logo"/>}
						</Link>

						<button className="flex gap-2.5 items-center">
							<Mail
								className="w-7 h-7 fill-red-500 dark:fill-red-600 stroke-zinc-50 dark:stroke-zinc-950"/>
							<p className="font-medium hover:underline underline-offset-4">help@frybix.com</p>
						</button>

						<button className="flex gap-2.5 items-center">
							<Phone
								className="w-7 h-7 fill-red-500 dark:fill-red-600 stroke-zinc-50 dark:stroke-zinc-950"/>
							<p className="font-medium hover:underline underline-offset-4">+1 234 456 678 89</p>
						</button>
					</div>
					<div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16">
						{footerLinks.map((section, index) => (
							<div key={index}>
								<h2 className="font-medium text-3xl mb-4 capitalize">{section.title}</h2>
								<ul className="space-y-4 capitalize font-medium">
									{section.links.map((link, index) => (
										<li key={index} className="hover:underline underline-offset-4">
											<a href={link.href}>{link.name}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="w-64 xl:w-80 2xl:w-96 space-y-4">
						<h2 className="font-medium text-3xl mb-4 capitalize">Newsletter</h2>
						<p className="font-medium hover:underline underline-offset-4 capitalize">Stay up to date</p>

						<div className="flex w-full items-center">
							<input placeholder="Your email" className="p-4" />
							<Button>Subscribe</Button>
						</div>
					</div>
				</div>
				<div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-950
				to-transparent dark:via-zinc-50" />
				<p className="mt-12 text-center capitalize font-medium">
					Copyright 2022 uifry.com all rights reserved
				</p>
			</footer>
		</GridContainer>
	)
}

export default Footer
