import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
	return (
		<header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
			<nav className='grid max-sm:grid-cols-2 grid-cols-3 w-full  items-center container'>
				<img src={appleImg} alt='Apple' wifth={14} height={18} />
				<ul className='flex gap-4 w-full justify-center max-sm:hidden'>
					{navLists.map(item => (
						<li
							key={item}
							className='text-sm cursor-pointer text-gray hover:text-white transition-all'
						>
							{item}
						</li>
					))}
				</ul>
				<div className='flex items-baseline gap-7 justify-end'>
					<img src={searchImg} width={14} height={18} alt='Search' />
					<img src={bagImg} width={14} height={18} alt='Bag' />
				</div>
			</nav>
		</header>
	)
}

export default Navbar
