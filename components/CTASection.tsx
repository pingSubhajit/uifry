import GridContainer from '@/components/utilities/GridContainer'
import redYellowBlurredUnderlay from '@/public/red_yellow_blurred_underlay.png'
import mockup3 from '@/public/mockup3.png'
import Image from 'next/image'
import {cn} from '@/lib/utils'
import Button from '@/components/ui/Button'
import AppleLogo from '@/assets/AppleLogo'
import UnderlayCircles from '@/assets/UnderlayCircles'
import Star from '@/assets/Star'

const CTASection = ({ className }: { className?: string }) => {
	return (
		<GridContainer className={cn('relative', className)}>
			<Star className="absolute -left-36 top-28 w-12 h-12 rotate-45"/>
			<Star className="absolute right-16 lg:-right-28 -top-28"/>
			<Image src={redYellowBlurredUnderlay} alt="Red blurred underlay" className="-z-10 absolute scale-50 -top-96 -left-[500px] pointer-events-none"/>
			<div className="col-span-full flex flex-col-reverse lg:block bg-zinc-950 dark:bg-zinc-50 rounded-lg px-12 lg:px-20 py-16 lg:py-40 overflow-hidden relative">
				<UnderlayCircles className="text-zinc-50 dark:text-zinc-950 absolute scale-[0.6] lg:scale-100 xl:scale-125 -bottom-64 -right-64 -translate-y-[50%] pointer-events-none"/>
				<UnderlayCircles className="text-zinc-50 dark:text-zinc-950 absolute scale-[0.6] lg:scale-100 xl:scale-125 top-[600px] -left-[400px] -translate-y-[50%] pointer-events-none"/>
				<Star className="absolute top-12 right-96 text-zinc-50 dark:text-zinc-950"/>
				<Star className="absolute bottom-12 left-96 text-zinc-50 dark:text-zinc-950 w-12 h-12 rotate-45"/>
				<div className="mt-12 lg:mt-0 flex flex-col gap-4 items-center lg:items-start lg:max-w-[45vw]">
					<h2 className="text-zinc-50 dark:text-zinc-950 capitalize font-bold text-5xl
					text-balance text-center lg:text-left">
						Ready to get started?
					</h2>
					<p className="text-zinc-50 dark:text-zinc-950 text-lg text-balance text-center lg:text-left">
						Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
					</p>
					<Button className="bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 hover:text-zinc-50
					flex items-center gap-3">
						Download app
						<AppleLogo />
					</Button>
				</div>
				<Image src={mockup3} alt="Mockup of 3 iPhone displaying the app" className="lg:absolute top-[50%]
				-right-24 lg:-translate-y-[50%] w-auto lg:w-[35vw] 2xl:w-auto" />
			</div>
		</GridContainer>
	)
}

export default CTASection
