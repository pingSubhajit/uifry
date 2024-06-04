import './globals.css'
import './clash-display.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import grainUnderlay from '@/public/grain_underlay.png'
import Image from 'next/image'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className="font-ClashDisplay bg-white dark:bg-zinc-950 overflow-x-hidden relative max-w-[1920px] mx-auto">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SmoothScrollProvider>
						<main className="min-h-screen px-8 lg:px-24 xl:px-[175px] py-10">
							<Navbar />
							{children}
						</main>

						<div className="absolute inset-0 mix-blend-soft-light z-[-1] dark:opacity-50 pointer-events-none w-screen max-h-full overflow-y-hidden">
							<Image src={grainUnderlay} alt="Grain underlay" className="w-full h-[8220px]" />
						</div>

					</SmoothScrollProvider>
				</ThemeProvider>
			</body>

		</html>
	)
}
