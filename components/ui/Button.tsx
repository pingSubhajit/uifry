import {ReactNode} from 'react'
import {cn} from '@/lib/utils'

const Button = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<button className={cn(
			'bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 px-3 py-2 lg:py-4 lg:px-6 lg:min-w-44 font-medium rounded-md',
			'hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-zinc-50 whitespace-nowrap',
			'transition',
			className
		)}>
			{children}
		</button>
	)
}

export default Button
