import HeroSection from '@/components/HeroSection'
import {Metadata} from 'next'
import FeaturesGrid from '@/components/FeaturesGrid'
import Advantages from '@/components/Advantages'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
	title: 'Batch System Assignment | UIFry',
	description: 'This is the assignment for the frontend development internship at Batch System. This project is crafted with Next.js, Tailwind CSS, Framer Motion, and TypeScript. This is a mobile responsive replica of the Figma design that was provided with the assignment details.',
	openGraph: {
		title: 'Batch System Assignment | UIFry',
		description: 'This is the assignment for the frontend development internship at Batch System. This project is crafted with Next.js, Tailwind CSS, Framer Motion, and TypeScript. This is a mobile responsive replica of the Figma design that was provided with the assignment details.',
		type: 'website'
	}
}

const HomePage = () => {
	return (
		<>
			<HeroSection className="mt-10" />
			<FeaturesGrid />
			<Advantages className="mt-20" />
			<Testimonials className="mt-20" />
			<FaqSection className="mt-20 xl:mt-64" />
			<CTASection className="mt-20 lg:mt-36" />
			<Footer className="mt-36" />
		</>
	)
}

export default HomePage
