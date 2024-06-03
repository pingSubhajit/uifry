import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesGrid from '@/components/FeaturesGrid'

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection className="mt-10" />
			<FeaturesGrid />
		</>
	)
}

export default HomePage
