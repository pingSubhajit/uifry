import GridContainer from '@/components/utilities/GridContainer'
import Button from '@/components/ui/Button'
import LongArrow from '@/assets/LongArrow'
import mockup1 from '@/public/mockup1.png'
import mockup2 from '@/public/mockup2.png'
import redBlurredUnderlay from '@/public/red_blurred_underlay.png'
import redYellowBlurredUnderlay from '@/public/red_yellow_blurred_underlay.png'
import Image from 'next/image'
import {cn} from '@/lib/utils'
import UnderlayCircles from '@/assets/UnderlayCircles'
import Star from '@/assets/Star'
import HeroStrip from '@/assets/HeroStrip'
import {Play} from 'lucide-react'

const HeroSection = ({ className }: { className?: string }) => {
	return (
		<GridContainer className={cn('flex-col-reverse', className)}>
			<div className="mt-20 col-span-full lg:col-span-7 flex flex-col gap-6 relative justify-center">
				<Star className="absolute -top-28 -left-28 h-12 w-12 rotate-45" />
				<h1 className="text-4xl lg:text-[4rem] font-bold leading-10 lg:leading-[4rem] text-balance relative text-center lg:text-left">
					<Image src={redYellowBlurredUnderlay} alt="Red blurred underlay" className="scale-110 lg:scale-[0.85] -z-10
					absolute -bottom-36 -bottom-48 2xl:-bottom-72 pointer-events-none" />
					<span className="relative z-10">Make The Best Financial Decisions</span>
				</h1>
				<p className="font-medium text-lg opacity-70 text-balance text-center lg:text-left">
					Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing
					sociis arcu lorem porttitor.
				</p>
				<div className="flex items-center gap-4 lg:gap-10 justify-center lg:justify-start">
					<Button className="flex items-center gap-2 group">
						Get Started
						<LongArrow className="fill-zinc-50 dark:fill-zinc-950 group-hover:translate-x-1 transition"/>
					</Button>

					<button className="flex items-center gap-2 lg:gap-3 group whitespace-nowrap">
						<div className="rounded-full border-2 border-zinc-950 dark:border-zinc-50 p-1.5 lg:p-2">
							<Play className="w-3 h-3 lg:w-4 lg:h-4 fill-zinc-950 dark:fill-zinc-50" />
						</div>
						<p className="font-medium text-lg group-hover:underline underline-offset-">Watch Video</p>
					</button>
				</div>

				<Star className="w-12 h-12 rotate-45 absolute bottom-72 left-24" />

				<HeroStrip className="-translate-x-8 w-72 lg:w-96 h-auto mx-auto xl:mx-0 xl:w-auto" />
			</div>

			<div className="col-span-full lg:col-span-5 flex items-center justify-center lg:justify-start lg:items-start relative pointer-events-none">
				<Star className="absolute top-4 lg:-top-16 right-0 lg:-right-24"/>
				<UnderlayCircles className="absolute scale-50 xl:scale-110 -top-64 right-[50%] translate-x-[50%]
				lg:translate-x-0 lg:translate-y-0 lg:-top-24 xl:-top-16 lg:-right-48 xl:-right-28"/>
				<Image src={redBlurredUnderlay} alt="Red blurred underlay" className="absolute lg:scale-125 -z-10
					bottom-56 xl:bottom-44 2xl:-bottom-16 xl:left-28"/>
				<Image src={mockup1} alt="iPhone mockup showcasing home page of the tracking app"
			       className={cn('w-auto max-h-64 lg:max-h-[400px] xl:max-h-[600px] -rotate-[15deg]')}/>
				<Image src={mockup2} alt="iPhone mockup showcasing tracking page of the tracking app" className={cn(
					'w-auto max-h-64 lg:max-h-[400px] xl:max-h-[600px] -rotate-[15deg]',
					'-translate-x-8 lg:-translate-x-[80px] xl:-translate-x-[120px] translate-y-[50px] xl:translate-y-[74px]'
				)}/>
				<Image src={mockup1} alt="iPhone mockup showcasing home page of the tracking app" className={cn(
					'w-auto max-h-64 lg:max-h-[400px] xl:max-h-[600px] -rotate-[15deg]',
					'-translate-x-16 lg:-translate-x-[160px] xl:-translate-x-[240px] translate-y-[100px] xl:translate-y-[148px]'
				)}/>
				<Star className="absolute bottom-24 left-24 rotate-[150deg] w-12 h-12"/>
			</div>
		</GridContainer>
	)
}

export default HeroSection
