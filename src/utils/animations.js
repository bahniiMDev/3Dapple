import gsap from 'gsap'

export const animate = (
	tl,
	rotationRef,
	rotationState,
	firstTarget,
	secondTarget,
	animationProps
) => {
	if (rotationState) {
		tl.to(rotationRef.current.rotation, {
			y: rotationState,
			duration: 1,
			ease: 'power2.inOut',
		})
	}
	tl.to(
		firstTarget,
		{
			...animationProps,
			ease: 'power2.inOut',
		},
		'<'
	)

	tl.to(
		secondTarget,
		{
			...animationProps,
			ease: 'power2.inOut',
		},
		'<'
	)
}

export const useAnim = (
	target,
	animProps,
	triggerProps,
	dur = 0.8,
	ease = 'power2.inOut'
) => {
	gsap.from(target, {
		scrollTrigger: {
			trigger: target,
			start: 'top 80%',
			toggleActions: 'restart none resume reverse',
			...triggerProps,
		},
		...animProps,
		duration: dur,
		ease: ease,
	})
}
