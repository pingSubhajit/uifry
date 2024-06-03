import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import Advantages from '@/components/Advantages'

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection className="mt-10" />
			<FeaturesGrid />
			<Advantages className="mt-20" />
		</>
	)
}

export default HomePage
