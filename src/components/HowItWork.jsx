import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useAnim } from '../utils/animations'

const HowItWork = () => {
	const videoRef = useRef()
	useGSAP(() => {
		useAnim(
			'#chip',
			{
				opacity: 0,
				scale: 1.3,
				duration: 0.8,
				ease: 'power4',
			},
			{ start: 'bottom 100%' }
		)
		document.querySelectorAll('.g_text2').forEach((item, i) => {
			useAnim(
				item,
				{
					opacity: 0,
					yPercent: 20,
				},
				{
					start: `top ${i === 2 && window.matchMedia('(width < 768px)').matches ? '0%' : '70%'}`,
				},
				0.4,
				'linear'
			)
		})
	}, [])
	return (
		<div className='common-padding'>
			<div className='container'>
				<div id='chip' className='flex-center w-full my-20'>
					<img src={chipImg} alt='chip' width={180} height={180} />
				</div>
				<div className='flex items-center flex-col'>
					<h2 className='hiw-title'>
						A17 Pro chip. <br /> A monster win for gaming.
					</h2>
					<p className='hiw-subtitle'>
						It’s here. The biggest redesign in the history of Apple GPUs.
					</p>
				</div>
				<div className='mt-10 md:mt-20 mb-14 flex-col flex-center '>
					<div className='relative h-full flex-center max-w-[800px]'>
						<div className='overflow-hidden flex-center'>
							<img src={frameImg} alt='frame' className=' relative z-10' />
							<div className='hiw-video w-full h-full '>
								<video
									autoPlay
									muted
									playsInline
									preload='none'
									ref={videoRef}
									className='pointer-events-none object-cover w-full
								h-full'
								>
									<source src={frameVideo} type='video/mp4' />
								</video>
							</div>
						</div>
					</div>
					<p className='text-gray font-semibold text-center mt-5'>
						Honkai: Star Rail
					</p>
					<div className='md:flex-row flex-col flex md:justify-evenly justify-center w-full md:items-start items-center'>
						<div className='feature-text-container2 md:max-w-[400px] max-w-[300px]'>
							<div className='flex-1 flex-center'>
								<p className='feature-text g_text2'>
									A17 Pro is an entirely new class of iPhone chip that delivers
									our{' '}
									<span className='text-white'>
										best graphics performance by far
									</span>
									.
								</p>
							</div>
							<div className='flex-1 flex-center'>
								<p className='feature-text g_text2'>
									Mobile{' '}
									<span className='text-white'>
										games will look and feel so immersive
									</span>
									, with incredibly detailed environments and more realistic
									characters. And with industry-leading speed and efficiency,
									A17 Pro takes fast and runs with it.
								</p>
							</div>
						</div>
						<div className='w-full md:mt-16  flex-col md:flex-row mt-5 g_text2  max-w-[300px]'>
							<p className='hiw-text'>New</p>
							<p className='hiw-bigtext'>Pro-class GPU</p>
							<p className='hiw-text'>with 6 cores</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowItWork
