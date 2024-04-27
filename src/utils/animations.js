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
