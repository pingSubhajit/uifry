'use client'

import GridContainer from '@/components/utilities/GridContainer'
import UnderlayCircles from '@/assets/UnderlayCircles'
import face1 from '@/public/faces/face1.png'
import face2 from '@/public/faces/face2.png'
import face3 from '@/public/faces/face3.png'
import face4 from '@/public/faces/face4.png'
import face5 from '@/public/faces/face5.png'
import redYellowBlurredUnderlay from '@/public/red_yellow_blurred_underlay.png'
import Image from 'next/image'
import Star from '@/assets/Star'

const Testimonials = ({ className }: { className?: string }) => {
	return (
		<GridContainer className={className}>
			<div className="col-span-full mb-32 relative">
				<Star className="absolute -top-16 right-24" />
				<h4 className="uppercase mx-auto font-medium text-lg tracking-widest text-center">Testimonial</h4>
				<h2 className="mt-1 mx-auto capitalize font-bold text-5xl text-center text-balance max-w-[400px]">
					What our users say about us?
				</h2>
			</div>
			<div className="col-span-5 relative flex items-center aspect-square max-w-[400px] lg:max-w-none
			min-w-[300px] lg:min-w-0 mx-auto lg:mx-0">
				<Star className="w-12 h-12 rotate-45 absolute -bottom-48 -left-24" />
				<UnderlayCircles className="absolute scale-[0.6] lg:scale-100 xl:scale-125 top-[50%] left-[50%] -translate-x-[55%] -translate-y-[50%] -z-10"/>
				<Image src={redYellowBlurredUnderlay} alt="Red blurred underlay" className="-z-10 absolute -left-24 rotate-180 pointer-events-none"/>
				<Image
					src={face5}
					alt="Face of a person who gave a testimonial about the tracking app"
					className="w-36 xl:w-auto mx-auto"
				/>
				<Image
					src={face1}
					alt="Face of a person who gave a testimonial about the tracking app"
					className="absolute w-24 xl:w-28 top-0 left-0"
				/>
				<Image
					src={face2}
					alt="Face of a person who gave a testimonial about the tracking app"
					className="absolute w-24 xl:w-28 top-0 right-0"
				/>
				<Image
					src={face3}
					alt="Face of a person who gave a testimonial about the tracking app"
					className="absolute w-24 xl:w-28 bottom-0 left-0"
				/>
				<Image
					src={face4}
					alt="Face of a person who gave a testimonial about the tracking app"
					className="absolute w-24 xl:w-28 bottom-0 right-0"
				/>
			</div>

			<div className="col-span-5 col-start-8 flex flex-col gap-6 justify-center relative">
				<h3 className="font-semibold text-3xl capitalize flex items-center gap-4 text-balance">
					The best financial accounting app ever!
				</h3>

				<p className="font-medium text-lg opacity-70 text-balance">
					“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
					mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam
					suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse
					aliquam.”
				</p>

				<div className="flex gap-2">
					<Image src={face1} alt="Face of a person who gave a testimonial about the tracking app" className="w-10" />
					<Image src={face2} alt="Face of a person who gave a testimonial about the tracking app" className="w-10" />
					<Image src={face3} alt="Face of a person who gave a testimonial about the tracking app" className="w-10" />
					<Image src={face4} alt="Face of a person who gave a testimonial about the tracking app" className="w-10" />
					<Image src={face5} alt="Face of a person who gave a testimonial about the tracking app" className="w-10" />
				</div>

				<h6 className="capitalize text-lg font-semibold">Nick Jonas</h6>
			</div>
		</GridContainer>
	)
}

export default Testimonials
