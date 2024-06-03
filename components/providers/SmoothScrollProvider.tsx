'use client'

import Lenis from '@studio-freight/lenis'
import {ReactNode, useEffect} from 'react'
import useMounted from '@/hooks/useMounted'

const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
	const mounted = useMounted()

	useEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true, // @ts-ignore
			smoothTouch: false,
		})

		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [mounted])

	return (
		<>
			{children}
		</>
	)
}

export default SmoothScrollProvider
