'use client'

import * as React from 'react'
import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'

const ThemeToggleButton = () => {
	const { setTheme, theme } = useTheme()

	return (
		<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="bg-zinc-950 dark:bg-zinc-50 p-2 rounded-sm">
			<Sun className="text-zinc-50 dark:text-zinc-950 h-[1.2rem] w-[1.2rem] block transition-all dark:hidden" />
			<Moon className="text-zinc-50 dark:text-zinc-950 h-[1.2rem] w-[1.2rem] hidden transition-all dark:block" />
			<span className="sr-only">Toggle theme</span>
		</button>
	)
}

export default ThemeToggleButton
