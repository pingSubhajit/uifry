import GridContainer from '@/components/utilities/GridContainer'
import UnderlayCircles from '@/assets/UnderlayCircles'
import mockup1 from '@/public/mockup1.png'
import mockup2 from '@/public/mockup2.png'
import card from '@/public/card.svg'
import income from '@/public/income.svg'
import redYellowBlurredUnderlay from '@/public/red_yellow_blurred_underlay.png'
import Image from 'next/image'
import {Bell, Sparkle} from 'lucide-react'
import Star from '@/assets/Star'

const Advantages = ({ className }: { className?: string }) => {
	return (
		<>
			<GridContainer className={className}>
				<div className="col-span-5 flex flex-col justify-center relative gap-6">
					<div>
						<h4 className="uppercase text-red-500 dark:text-red-600 font-medium text-lg tracking-widest">
							Advantages
						</h4>
						<h2 className="mt-1 capitalize font-bold text-5xl">Why choose Uifry?</h2>
					</div>

					<h3 className="font-semibold text-3xl capitalize flex items-center gap-4">
						<div className="bg-red-500 rounded-full p-3">
							<Bell className="w-5 h-5 text-zinc-50" strokeWidth={2} />
						</div>
						clever notifications
					</h3>

					<p className="font-medium text-lg opacity-70 text-balance">
						Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
						mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam
						suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
					</p>
				</div>

				<div className="col-span-5 col-start-8 relative">
					<Star className="absolute top-16 -right-24"/>
					<UnderlayCircles
						className="absolute scale-125 top-[50%] left-[50%] -translate-x-[55%] -translate-y-[50%] -z-10"
					/>
					<Image
						src={redYellowBlurredUnderlay}
						alt="Red blurred underlay"
						className="-z-10 absolute -left-24 rotate-180 pointer-events-none"
					/>
					<Image
						src={mockup2}
						alt="iPhone mockup showcasing tracking page of the tracking app"
						className="max-h-[700px] w-auto mx-auto"
					/>
					<Image
						src={income}
						alt="Credit card image"
						className="absolute left-[50%] top-72 scale-125"
					/>
				</div>
			</GridContainer>

			<GridContainer className="mt-20">
				<div className="col-span-5 relative">
					<Star className="w-12 h-12 rotate-45 absolute top-16 -right-24"/>
					<UnderlayCircles
						className="absolute scale-125 top-[50%] left-[50%] -translate-x-[55%] -translate-y-[50%] -z-10"
					/>
					<Image
						src={redYellowBlurredUnderlay}
						alt="Red blurred underlay"
						className="-z-10 absolute -left-24 rotate-180 pointer-events-none"
					/>
					<Image
						src={mockup1}
						alt="iPhone mockup showcasing home page of the tracking app"
						className="max-h-[700px] w-auto mx-auto"
					/>
					<Image
						src={card}
						alt="Credit card image"
						className="absolute left-[50%] -translate-x-[30%] top-44 scale-[1.45]"
					/>
				</div>

				<div className="col-span-5 col-start-8 flex flex-col justify-center relative gap-6">
					<h3 className="font-semibold text-3xl capitalize flex items-center gap-4">
						<div className="bg-red-500 rounded-full p-3">
							<Sparkle className="w-5 h-5 text-zinc-50" strokeWidth={2}/>
						</div>
						fully customizable
					</h3>

					<p className="font-medium text-lg opacity-70 text-balance">
						Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
						mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam
						suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse
						aliquam.
					</p>
				</div>
			</GridContainer>
		</>
	)
}

export default Advantages
