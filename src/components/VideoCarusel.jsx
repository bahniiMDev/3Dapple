import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import { pauseImg, playImg, replayImg } from '../utils'

const VideoCarusel = () => {
	const videoRef = useRef([])
	const videoSpanRef = useRef([])
	const videoDivRef = useRef([])
	const [video, setVideo] = useState({
		isEnd: false,
		startPlay: false,
		videoId: 0,
		isPlaing: false,
		isLastVideo: false,
	})

	const { isEnd, startPlay, isLastVideo, videoId, isPlaing } = video

	const [loadData, setLoadData] = useState([])

	useGSAP(() => {
		gsap.to('#slider', {
			transform: ` translateX(${-100 * videoId}%)`,
			duration: 1,
			ease: 'power4.inOut',
		})
		gsap.to('#video', {
			scrollTrigger: {
				trigger: '#video',
				toggleActions: 'restart none none none',
			},
			onComplete: () => {
				setVideo(prev => ({
					...prev,
					startPlay: true,
					isPlaing: true,
				}))
			},
		})
	}, [isEnd, videoId])

	useEffect(() => {
		let currentProgress = 0
		let span = videoSpanRef.current
		if (span[videoId]) {
			let anim = gsap.to(span[videoId], {
				onUpdate: () => {
					const progres = Math.ceil(anim.progress() * 100)
					currentProgress = progres
					gsap.to(videoDivRef.current[videoId], {
						width: window.innerWidth < 1200 ? '10vw' : '4vw',
					})
					gsap.to(videoSpanRef.current[videoId], {
						backgroundColor: 'white',
						width: `${currentProgress}%`,
					})
				},
				onComplete: () => {
					if (isPlaing) {
						gsap.to(videoDivRef.current[videoId], {
							width: '12px',
						})
						gsap.to(span[videoId], {
							backgroundColor: 'transparent',
						})
					}
				},
			})
			if (videoId === 0) {
				anim.restart()
			}
			const animUpdate = () => {
				anim.progress(
					videoRef.current[videoId].currentTime /
						hightlightsSlides[videoId].videoDuration
				)
			}
			if (isPlaing) {
				gsap.ticker.add(animUpdate)
			} else {
				gsap.ticker.add(animUpdate)
			}
		}
	}, [videoId, startPlay])

	useEffect(() => {
		if (loadData.length > 3) {
			if (!isPlaing) {
				videoRef.current[videoId].pause()
			} else {
				startPlay && videoRef.current[videoId].play()
			}
		}
	}, [startPlay, isPlaing, loadData, videoId])

	const handleLoadedData = (e, i) => {
		setLoadData(prev => [...prev, e])
	}

	const handleProcess = (type, i) => {
		switch (type) {
			case 'video-end':
				setVideo(prev => ({ ...prev, isEnd: true, videoId: i++ }))
				break
			case 'video-last':
				setVideo(prev => ({ ...prev, isLastVideo: true }))
				break
			case 'video-reset':
				setVideo(prev => ({ ...prev, isLastVideo: false, videoId: 0 }))
				break
			case 'play':
				setVideo(prev => ({ ...prev, isPlaing: true }))
				break
			case 'pause':
				setVideo(prev => ({ ...prev, isPlaing: false }))
				break
			default:
				return video
		}
	}

	return (
		<>
			<div className='flex items-center'>
				{hightlightsSlides.map((item, index) => (
					<div key={item.id} id='slider' className='sm:pr-20 pr-10'>
						<div className='video-carousel_container'>
							<div className='w-full flex-center h-full rounded-3xl overflow-hidden bg-black box'>
								<video
									ref={e => {
										videoRef.current[index] = e
									}}
									id='video'
									playsInline={true}
									preload='auto'
									className={
										index === 0 || 2 ? 'h-full w-full object-cover' : ''
									}
									muted
									onClick={() => {
										setVideo(prev => ({ ...prev, isPlaing: !prev.isPlaing }))
									}}
									onEnded={() => {
										index !== 3
											? handleProcess('video-end', index)
											: handleProcess('video-last')
									}}
									onPlay={() => {
										setVideo(prev => ({ ...prev, isPlaing: true }))
									}}
									onLoadedMetadata={e => {
										handleLoadedData(e, index)
									}}
								>
									<source
										className='h-full'
										src={item.video}
										type='video/mp4'
									/>
								</video>
							</div>
							<div className='absolute top-12 left-[5%] z-10'>
								{item.textLists.map((item2, index2) => (
									<p className='text-xl md:text-2xl font-medium' key={index2}>
										{item2}
									</p>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='relative flex-center mt-10'>
				<div className='flex-center bg-gray-300 px-7 py-5 backdrop-blur rounded-full'>
					{videoRef.current.map((_, i) => (
						<span
							key={i}
							ref={e => (videoDivRef.current[i] = e)}
							className='mx-2 w-3 h-3 bg-gray rounded-full relative cursor-pointer'
						>
							<span
								className='absolute min-w-3 h-full w-full rounded-full'
								ref={e => (videoSpanRef.current[i] = e)}
							/>
						</span>
					))}
				</div>
				<button
					className='control-btn'
					onClick={
						isLastVideo
							? () => handleProcess('video-reset')
							: () => handleProcess(isPlaing ? 'pause' : 'play')
					}
				>
					<img
						src={isLastVideo ? replayImg : !isPlaing ? playImg : pauseImg}
						alt={isLastVideo ? 'replay' : !isPlaing ? 'play' : 'pause'}
					/>
				</button>
			</div>
		</>
	)
}

export default VideoCarusel
