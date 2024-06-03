import GridContainer from '@/components/utilities/GridContainer'
import UnderlayCircles from '@/assets/UnderlayCircles'
import mockup1 from '@/public/mockup1.png'
import redYellowBlurredUnderlay from '@/public/red_yellow_blurred_underlay.png'
import Image from 'next/image'
import {Box, Hexagon, Sparkle} from 'lucide-react'
import Star from '@/assets/Star'

const FeaturesGrid = ({ className }: { className?: string }) => {
	return (
		<GridContainer className={className}>
			<div className="col-span-5 relative">
				<Star className="w-12 h-12 rotate-45 absolute top-16 -left-24" />
				<UnderlayCircles className="absolute scale-125 top-[50%] left-[50%] -translate-x-[55%] -translate-y-[50%] -z-10"/>
				<Image src={redYellowBlurredUnderlay} alt="Red blurred underlay" className="-z-10 absolute -left-24 rotate-180 pointer-events-none"/>
				<Image src={mockup1} alt="iPhone mockup showcasing home page of the tracking app" className="max-h-[700px] w-auto mx-auto"/>
			</div>

			<div className="col-span-5 col-start-8 flex flex-col justify-center relative">
				<h4 className="uppercase text-red-500 dark:text-red-600 font-medium text-lg tracking-widest">Features</h4>
				<h2 className="mt-1 capitalize font-bold text-5xl">Uifry premium</h2>

				<ul className="mt-8 space-y-8">
					<li>
						<h6 className="font-semibold text-lg capitalize flex items-center gap-2">
							<Sparkle className="text-red-500 dark:text-red-600"/>
							Budgeting intervals
						</h6>
						<p className="mt-3.5 font-medium text-lg opacity-70 text-balance">
							Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu
							adipiscing sociis arcu lorem porttitor.
						</p>
					</li>

					<li>
						<h6 className="font-semibold text-lg capitalize flex items-center gap-2">
							<Hexagon className="text-red-500 dark:text-red-600"/>
							Budgeting intervals
						</h6>
						<p className="mt-3.5 font-medium text-lg opacity-70 text-balance">
							Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu
							adipiscing sociis arcu lorem porttitor.
						</p>
					</li>

					<li>
						<h6 className="font-semibold text-lg capitalize flex items-center gap-2">
							<Box className="text-red-500 dark:text-red-600"/>
							Budgeting intervals
						</h6>
						<p className="mt-3.5 font-medium text-lg opacity-70 text-balance">
							Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu
							adipiscing sociis arcu lorem porttitor.
						</p>
					</li>
				</ul>

				<Image src={redYellowBlurredUnderlay} alt="Red blurred underlay" className="-z-10 scale-[0.65] absolute top-0 -right-[450px] pointer-events-none"/>
			</div>
		</GridContainer>
	)
}

export default FeaturesGrid
