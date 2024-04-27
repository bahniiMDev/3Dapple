import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='bg-black'>
			<Navbar />
			<Hero />
			<Highlights />
			<Model />
		</div>
	)
}

export default App
