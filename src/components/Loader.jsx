import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
	return (
		<Html>
			<p
				className='flex-center p-10 bg-gray-300 rounded-2xl relative z-40 translate-x-[-50%] translate-y-[-50%]
				section-heading'
			>
				Loading...
			</p>
		</Html>
	)
}

export default Loader
