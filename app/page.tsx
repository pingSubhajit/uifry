import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import Advantages from '@/components/Advantages'
import Testimonials from '@/components/Testimonials'

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection className="mt-10" />
			<FeaturesGrid />
			<Advantages className="mt-20" />
			<Testimonials className="mt-20" />
		</>
	)
}

export default HomePage
