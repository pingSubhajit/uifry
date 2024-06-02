import ThemeToggleButton from '@/components/utilities/ThemeToggleButton'

const HomePage = () => {
	return (
		<main className="min-h-screen bg-white dark:bg-zinc-950">
			<h1 className="text-zinc-950 dark:text-zinc-50">Home Page</h1>
			<ThemeToggleButton />
		</main>
	)
}

export default HomePage
