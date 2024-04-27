import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { yellowImg } from '../utils'
import ModelView from './ModelView'

import { View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { models, sizes } from '../constants'
import { animate } from '../utils/animations'

const Model = () => {
	const [size, setSize] = useState('small')
	const [model, setModel] = useState({
		title: 'iPhone 15 Pro in Natural Titanium',
		color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
		img: yellowImg,
	})

	// camera control for the model view
	const cameraControlSmall = useRef()
	const cameraControlLarge = useRef()

	// model
	const small = useRef(new THREE.Group())
	const large = useRef(new THREE.Group())

	// rotation
	const [smallRotation, setSmallRotation] = useState(0)
	const [largeRotation, setLargeRotation] = useState(0)

	const tl = gsap.timeline()

	useEffect(() => {
		if (size === 'large') {
			animate(tl, small, smallRotation, '#view1', '#view2', {
				transform: 'translateX(-100%)',
				duration: 2,
			})
		}

		if (size === 'small') {
			animate(tl, large, largeRotation, '#view2', '#view1', {
				transform: 'translateX(0)',
				duration: 2,
			})
		}
	}, [size])

	useGSAP(() => {
		gsap.from('#anim2', {
			scrollTrigger: {
				trigger: '#anim2',
				start: 'top 80%',
				toggleActions: 'restart reset resume reverse',
			},
			opacity: 0,
			y: '40px',
			duration: 0.8,
			ease: 'power2.inOut',
		})
	}, [])

	useGSAP(() => {
		const trigObj = {
			trigger: '#trigger',
			start: 'center 80%',
			end: 'center top',
			toggleActions: 'play none none reverse',
		}
		const tl = gsap.timeline({
			scrollTrigger: trigObj,
		})

		tl.from(
			'#bar',
			{
				yPercent: 100,
				ease: 'back.out(2)',
				opacity: 0,
				duration: 0.5,
			},
			'<'
		)
		tl.from(
			'#cont-1',
			{
				width: '56px',
				ease: 'back.out(2)',
				x: 35,
				duration: 0.5,
			},
			'-=0.4'
		)
		tl.from(
			'#cont-2',
			{
				width: '56px',
				ease: 'back.out(2)',
				duration: 0.5,
				x: -35,
			},
			'<'
		)
		tl.from(
			'#color',
			{
				opacity: 0,
				ease: 'back.out(2)',
				duration: 0.5,
				scale: 0.5,
				stagger: {
					amount: 0.2,
					from: 4,
				},
			},
			'-=0.2'
		)
		tl.from(
			'#siz1',
			{
				opacity: 0,
				ease: 'back.out(2)',
				duration: 0.5,
				scale: 0.5,
				stagger: 0.2,
			},
			'<'
		)
		tl.from(
			'#title-model',
			{
				opacity: 0,
				ease: 'back.out(2)',
				duration: 0.5,
				yPercent: 100,
			},
			'<'
		)
	}, [])

	return (
		<section className='common-padding'>
			<div className='screen-max-width'>
				<h1 id='anim2' className='section-heading'>
					Take a closer look.
				</h1>

				<div className='flex flex-col items-center mt-5'>
					<div
						id='trigger'
						className='w-full h-[60vh] md:h-[80vh] overflow-hidden relative'
					>
						<ModelView
							index={1}
							groupRef={small}
							gsapType='view1'
							controlRef={cameraControlSmall}
							setRotationState={setSmallRotation}
							item={model}
							size={size}
						/>

						<ModelView
							className='pointer-events-none'
							index={2}
							groupRef={large}
							gsapType='view2'
							controlRef={cameraControlLarge}
							setRotationState={setLargeRotation}
							item={model}
							size={size}
						/>

						<Canvas
							style={{
								width: '100vw',
								height: '100vh',
								pointerEvents: 'none',
								position: 'fixed',
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								overflow: 'hidden',
							}}
							className='w-full h-full pointer-events-none'
						>
							<View.Port />
						</Canvas>
					</div>
					<div className='flex-center flex-col sticky bottom-[30px]' id='bar'>
						<p
							id='title-model'
							className='relative z-10 text-sm font-light text-center mb-5'
						>
							{model.title}
						</p>

						<div id='color-cont' className='flex-center relative rounded-full'>
							<ul id='cont-1' className='color-container  relative'>
								{models.map((item, i) => (
									<li
										id='color'
										key={i}
										className='h-[24px] aspect-square rounded-full cursor-pointer'
										style={{ backgroundColor: item.color[0] }}
										onClick={() => setModel(item)}
									/>
								))}
							</ul>

							<button id='cont-2' className='size-btn-container'>
								{sizes.map(({ label, value }) => (
									<span
										id='siz1'
										key={label}
										className='size-btn'
										style={{
											backgroundColor: size === value ? 'white' : 'transparent',
											color: size === value ? 'black' : 'white',
										}}
										onClick={() => setSize(value)}
									>
										{label}
									</span>
								))}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Model
