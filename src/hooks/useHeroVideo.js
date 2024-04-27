import { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

export const useHeroVideo = () => {
	const [videoSRC, setVideoSRC] = useState(
		window.matchMedia('(width < 760px)').matches ? smallHeroVideo : heroVideo
	)
	const handleVideoSRC = () => {
		if (window.matchMedia('(width < 760px)').matches) {
			setVideoSRC(smallHeroVideo)
		} else {
			setVideoSRC(heroVideo)
		}
	}
	useEffect(() => {
		window.addEventListener('resize', handleVideoSRC)
		return () => {
			window.removeEventListener('resize', handleVideoSRC)
		}
	}, [])
	return videoSRC
}
