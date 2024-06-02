'use client'

import * as React from 'react'
import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'
import {cn} from '@/lib/utils'

const ThemeToggleButton = ({ className }: { className?: string }) => {
	const { setTheme, theme } = useTheme()

	return (
		<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={cn(
			'bg-zinc-950 dark:bg-zinc-50 p-2 rounded-md text-zinc-50 dark:text-zinc-950 aspect-square',
			'hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-zinc-50',
			'transition',
			className
		)}>
			<Sun className="h-[1.2rem] w-[1.2rem] block transition-all dark:hidden" />
			<Moon className="h-[1.2rem] w-[1.2rem] hidden transition-all dark:block" />
			<span className="sr-only">Toggle theme</span>
		</button>
	)
}

export default ThemeToggleButton
