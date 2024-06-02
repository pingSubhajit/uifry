import {ReactNode} from 'react'

const Button = ({ children }: { children: ReactNode }) => {
	return (
		<button className="bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 py-4 px-6 min-w-44 font-medium rounded-sm">
			{children}
		</button>
	)
}

export default Button
