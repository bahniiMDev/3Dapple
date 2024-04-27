import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import React from 'react'
import { useHeroVideo } from '../hooks/useHeroVideo'

const Hero = () => {
	const videoSRC = useHeroVideo()
	useGSAP(() => {
		gsap.to('#hero', { opacity: 1, delay: 1 })
		gsap.from('video', {
			opacity: 0,
			delay: 0.2,
			duration: 0.5,
		})
		gsap.from('#anim1', {
			opacity: 0,
			y: 40,
			duration: 0.8,
			delay: 1.4,
			stagger: 0.2,
		})
	}, [])
	return (
		<section className='w-full nav-height bg-balck'>
			<div className='h-5/6 w-full flex-center flex-col'>
				<p id='hero' className='hero-title font-light text-xl'>
					iPhone 15 Pro
				</p>
				<div className='md:w-10/12 w-9/12 '>
					<video
						className='pointer-events-none max-h-[60vh] m-auto'
						autoPlay
						muted
						playsInline={true}
						key={videoSRC}
					>
						<source type='video/mp4' src={videoSRC} />
					</video>
				</div>
			</div>
			<div
				id='block-buy'
				className='flex flex-col items-center -translate-y-16 cursor-pointer'
			>
				<a id='anim1' className='btn'>
					Buy
				</a>
				<p id='anim1' className='font-normal cursor-default text-xl'>
					From $999 or $41.62/mo. for 24 mo.1
				</p>
			</div>
		</section>
	)
}

export default Hero
