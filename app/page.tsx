import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import Advantages from '@/components/Advantages'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection className="mt-10" />
			<FeaturesGrid />
			<Advantages className="mt-20" />
			<Testimonials className="mt-20" />
			<FaqSection className="mt-64" />
			<CTASection className="mt-36" />
			<Footer className="mt-36" />
		</>
	)
}

export default HomePage
