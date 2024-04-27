import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
	return (
		<Html>
			<div
				style={{
					width: `100px`,
					height: `100px`,
				}}
				className={`relative flex-center bg-[#29292970] rounded-2xl  z-50 translate-x-[-50%] 
				 translate-y-[-50%]`}
			>
				<p className='section-heading'>Loading...</p>
			</div>
		</Html>
	)
}

export default Loader
