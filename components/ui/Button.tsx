import {ReactNode} from 'react'
import {cn} from '@/lib/utils'

const Button = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<button className={cn(
			'bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 py-4 px-6 min-w-44 font-medium rounded-md',
			'hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-zinc-50',
			'transition',
			className
		)}>
			{children}
		</button>
	)
}

export default Button
