import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarusel from './VideoCarusel'

gsap.registerPlugin(ScrollTrigger)
const Highlights = () => {
	useGSAP(() => {
		document.querySelectorAll('#anim').forEach((item, index) => {
			gsap.from(item, {
				scrollTrigger: {
					trigger: item,
					start: 'top 80%',
					toggleActions: 'restart reset resume reverse',
				},
				opacity: 0,
				y: '40px',
				duration: 0.8,
				delay: index * 0.1,
				ease: 'power2.inOut',
			})
		})
	}, [])
	return (
		<section id='highlights' className='w-screen h-full bg-zinc common-padding'>
			<div className='container'>
				<div className='w-full md:flex items-end justify-between mb-10'>
					<h1 id='anim' className='md:mb-0 mb-12 section-heading'>
						Get the highlights.
					</h1>
					<ul className='flex items-start md:gap-5 gap-1 md:flex-row flex-col md:items-end'>
						<li className='link' id='anim'>
							Watch the film
							<img src={watchImg} alt='watch' className='ml-2' />
						</li>
						<li className='link' id='anim'>
							Watch the event
							<img src={rightImg} alt='watch' className='ml-2' />
						</li>
					</ul>
				</div>
				<VideoCarusel />
			</div>
		</section>
	)
}

export default Highlights
