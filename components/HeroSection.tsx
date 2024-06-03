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
		<GridContainer className={className}>
			<div className="mt-20 md:col-span-7 flex flex-col gap-6 relative">
				<Star className="absolute -top-28 -left-28 h-12 w-12 rotate-45" />
				<h1 className="text-[4rem] font-bold leading-[4rem] text-balance relative">
					<Image src={redYellowBlurredUnderlay} alt="Red blurred underlay" className="scale-[0.85] -z-10 absolute -bottom-72 pointer-events-none"/>
					<span className="relative z-10">Make The Best Financial Decisions</span>
				</h1>
				<p className="font-medium text-lg opacity-70 text-balance">
					Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing
					sociis arcu lorem porttitor.
				</p>
				<div className="flex items-center gap-10">
					<Button className="flex items-center gap-2 group">
						Get Started
						<LongArrow className="fill-zinc-50 dark:fill-zinc-950 group-hover:translate-x-1 transition"/>
					</Button>

					<button className="flex items-center gap-3 group">
						<div className="rounded-full border-2 border-zinc-950 dark:border-zinc-50 p-2">
							<Play className="w-4 h-4 fill-zinc-950 dark:fill-zinc-50" />
						</div>
						<p className="font-medium text-lg group-hover:underline underline-offset-">Watch Video</p>
					</button>
				</div>

				<Star className="w-12 h-12 rotate-45 absolute bottom-72 left-24" />

				<HeroStrip className="-translate-x-8" />
			</div>

			<div className="col-span-5 flex relative pointer-events-none">
				<Star className="absolute -top-16 -right-24"/>
				<UnderlayCircles className="absolute scale-110 -top-16 -right-28"/>
				<Image src={redBlurredUnderlay} alt="Red blurred underlay" className="absolute scale-125 -z-10 -bottom-16 left-28"/>
				<Image src={mockup1} alt="iPhone mockup showcasing home page of the tracking app"
				       className={cn('max-h-[600px] -rotate-[15deg]')}/>
				<Image src={mockup2} alt="iPhone mockup showcasing tracking page of the tracking app" className={cn(
					'max-h-[600px] -rotate-[15deg]',
					'-translate-x-[120px] translate-y-[74px]'
				)}/>
				<Image src={mockup1} alt="iPhone mockup showcasing home page of the tracking app" className={cn(
					'max-h-[600px] -rotate-[15deg]',
					'-translate-x-[240px] translate-y-[148px]'
				)}/>
				<Star className="absolute bottom-24 left-24 rotate-[150deg] w-12 h-12"/>
			</div>
		</GridContainer>
	)
}

export default HeroSection
