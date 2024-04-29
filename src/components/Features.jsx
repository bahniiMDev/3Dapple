import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { explore1Img, explore2Img, exploreVideo } from '../utils'
import { useAnim } from '../utils/animations'

const Features = () => {
	console.log(window.matchMedia('(width < 764px)').matches)
	useGSAP(() => {
		useAnim('#features-title', { opacity: 0, y: '40px' })
		document.querySelectorAll('.g_row').forEach((item, i) => {
			useAnim(
				item,
				{ opacity: 0.5, scale: 1.25 },
				{
					scrub: 1,
					start: `top ${window.matchMedia('(width < 764px)').matches ? 80 : 100 - i * 10}%`,
					end: `top ${window.matchMedia('(width < 764px)').matches ? 0 : 20 - i * 20}%`,
				}
			)
		})
		document.querySelectorAll('.g_text').forEach((item, i) => {
			useAnim(item, {
				opacity: 0,
				yPercent: 20,
				duration: 0.6,
				ease: 'linear',
			})
		})

		useAnim(
			'#exploer',
			{},
			{
				toggleActions: 'play none resume restart',
				start: 'top 100%',
				onEnter: e => {
					videoRef.current.play()
				},
			}
		)
	}, [])
	const videoRef = useRef()
	return (
		<section
			className='h-full common-padding bg-zinc
	relative overflow-hidden'
		>
			<div className='container'>
				<div className='mb-12 w-full'>
					<h1 className='section-heading' id='features-title'>
						Explore the full story.
					</h1>
					<div className='flex flex-col'>
						<div className='md:mt-32 mt-16 md:mb-24 mb-12 md:pl-48  ms:pl-12  pl-8'>
							<h2 className='text-4xl lg:text-7xl font-semibold'>
								iPhone. <br /> Forged in titanium.
							</h2>
						</div>
						<div className='flex-center flex-col md:px-20 sm:px-10 px-0'>
							<div className='relative h-[50dvh] w-full mb-5 flex  items-center'>
								<video
									muted
									ref={videoRef}
									playsInline
									id='exploer'
									className='w-full h-full object-cover object-center'
								>
									<source src={exploreVideo} type='video/mp4' />
								</video>
							</div>
							<div className='flex flex-col w-full relative'>
								<div className='feature-video-container'>
									<div className='overflow-hidden flex-1 h-[50dvh] bg-black flex justify-end'>
										<img
											src={explore1Img}
											alt='titanium'
											className='feature-video g_row'
										/>
									</div>
									<div className='overflow-hidden flex-1 h-[50dvh] bg-black flex-center'>
										<img
											src={explore2Img}
											alt='titanium2'
											className='feature-video2 g_row'
										/>
									</div>
								</div>
								<div className='feature-text-container'>
									<div className='flex-1 flex-center'>
										<p className='feature-text g_text'>
											iPhone 15 Pro{' '}
											<span className='text-white'>
												the first iPhone to feature an aerospace‑grade titanium
												design
											</span>
											, using the same alloy that spacecraft use for missions to
											Mars.
										</p>
									</div>
									<div className='flex-1 flex-center'>
										<p className='feature-text g_text'>
											Titanium has one of the best strength‑to‑weight ratios of
											any metal, making these our{' '}
											<span className='text-white'>
												lightest Pro models ever
											</span>
											. You’ll notice the difference the moment you pick one up.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
