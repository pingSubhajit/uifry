import Navbar from '@/components/Navbar'

const HomePage = () => {
	return (
		<main className="min-h-screen bg-white dark:bg-zinc-950">
			<div className="grid grid-cols-4 md:grid-cols-12 gap-5 px-[175px] py-10">
				<Navbar />
			</div>
		</main>
	)
}

export default HomePage
