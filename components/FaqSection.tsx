import Star from '@/assets/Star'
import GridContainer from '@/components/utilities/GridContainer'

const FaqSection = ({ className }: { className?: string }) => {
	return (
		<GridContainer className={className}>
			<div className="col-span-full relative mb-10">
				<Star className="absolute top-16 right-96"/>
				<h4 className="uppercase text-red-500 dark:text-red-600 font-medium text-lg tracking-widest">FAQ</h4>
				<h2 className="mt-1 capitalize font-bold text-5xl max-w-[600px]">Frequently asked questions</h2>
			</div>

			<div className="col-span-6 bg-red-500 rounded-lg p-8">
				<h3 className="font-semibold text-3xl capitalize text-zinc-50">
					The best financial accounting app ever!
				</h3>
				<p className="font-medium text-lg text-balance mt-2 text-zinc-50">
					“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
					mauris.
				</p>
			</div>
			<div className="col-span-6 rounded-lg p-8">
				<h3 className="font-semibold text-3xl capitalize">
					The best financial accounting app ever!
				</h3>
				<p className="font-medium text-lg text-balance mt-2">
					“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
					mauris.
				</p>
			</div>
			<div className="col-span-6 rounded-lg p-8">
				<h3 className="font-semibold text-3xl capitalize">
					The best financial accounting app ever!
				</h3>
				<p className="font-medium text-lg text-balance mt-2">
					“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
					mauris.
				</p>
			</div>
			<div className="col-span-6 bg-red-500 rounded-lg p-8">
				<h3 className="font-semibold text-3xl capitalize text-zinc-50">
					The best financial accounting app ever!
				</h3>
				<p className="font-medium text-lg text-balance mt-2 text-zinc-50">
					“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
					mauris.
				</p>
			</div>
			<div className="col-span-6 bg-red-500 rounded-lg p-8">
				<h3 className="font-semibold text-3xl capitalize text-zinc-50">
					The best financial accounting app ever!
				</h3>
				<p className="font-medium text-lg text-balance mt-2 text-zinc-50">
					“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
					mauris.
				</p>
			</div>
			<div className="col-span-6 rounded-lg p-8">
				<h3 className="font-semibold text-3xl capitalize">
					The best financial accounting app ever!
				</h3>
				<p className="font-medium text-lg text-balance mt-2">
					“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit
					mauris.
				</p>
			</div>
		</GridContainer>
	)
}

export default FaqSection
