import {ReactNode} from 'react'
import {cn} from '@/lib/utils'

const GridContainer = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<div className={cn('grid grid-cols-4 md:grid-cols-12 gap-5', className)}>
			{children}
		</div>
	)
}

export default GridContainer
