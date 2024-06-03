import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import Advantages from '@/components/Advantages'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection className="mt-10" />
			<FeaturesGrid />
			<Advantages className="mt-20" />
			<Testimonials className="mt-20" />
			<FaqSection className="mt-64" />
		</>
	)
}

export default HomePage
