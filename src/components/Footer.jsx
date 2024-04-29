import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
	return (
		<footer className='py-5 sm:px-10 px-5'>
			<div className='container'>
				<div className=''>
					<p className=' text-xs text-gray'>
						More ways to shop:{' '}
						<span className='underline text-blue'>Find an Apple Store</span> or
						<span className='underline text-blue'> other retailer</span> near
						you.
					</p>
					<p className=' text-xs text-gray'>Or call 1-800-MY-APPLE.</p>
				</div>
				<div className='bg-neutral-700 my-5 h-[1px] w-full'></div>
				<div className='flex md:flex-row flex-col md-items-center justify-between'>
					<p className=' text-xs text-gray'>
						Copyright © 2024 Apple Inc. All rights reserved.
					</p>
					<div className='flex mt-[9px] flex-wrap'>
						{footerLinks.map((item, i) => (
							<a
								href=''
								className='flex break-words text-[#ffffffcc] text-xs hover:underline'
								key={item}
							>
								{item}{' '}
								{i !== footerLinks.length - 1 && (
									<div className='mx-[9px] h-[80%] w-[1px] bg-[#ffffff66]'></div>
								)}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
