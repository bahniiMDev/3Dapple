import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import { Suspense } from 'react'
import { Vector3 } from 'three'
import Iphone from './Iphone'
import Lights from './Lights'
import Loader from './Loader'

const ModelView = ({
	index,
	groupRef,
	gsapType,
	controlRef,
	setRotationState,
	item,
	size,
	loaderSize,
}) => {
	return (
		<View
			index={index}
			id={gsapType}
			className={`w-full h-full absolute ${index === 2 && 'right-[-100%]'}`}
		>
			<ambientLight intensity={1} />
			<PerspectiveCamera makeDefault position={[0, 0, 4]} />

			<Lights />
			<OrbitControls
				makeDefault
				ref={controlRef}
				enableZoom={false}
				enablePan={false}
				rotateSpeed={0.6}
				target={new Vector3(0, 0, 0)}
				onEnd={() => {
					setRotationState(controlRef.current.getAzimuthalAngle())
				}}
			/>

			<group
				ref={groupRef}
				name={index === 1 ? 'small' : 'large'}
				position={[0, 0, 0]}
				rotation={[0, 0, 0]}
			>
				<Suspense fallback={<Loader loaderSize={loaderSize} />}>
					<Iphone
						item={item}
						size={size}
						rotation={[0.15, 0, 0]}
						scale={index === 1 ? [16, 16, 16] : [18, 18, 18]}
					/>
				</Suspense>
			</group>
		</View>
	)
}

export default ModelView
