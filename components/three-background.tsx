'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Points } from '@react-three/drei'
import type * as THREE from 'three'

function Stars() {
  const ref = useRef<THREE.Points>(null)
  const sphere = useMemo(() => {
    const radius = 1.5
    const points = new Float32Array(2800)
    for (let i = 0; i < points.length; i += 3) {
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      points[i] = r * Math.sin(phi) * Math.cos(theta)
      points[i + 1] = r * Math.sin(phi) * Math.sin(theta)
      points[i + 2] = r * Math.cos(phi)
    }
    return points
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x -= delta / 28
    ref.current.rotation.y -= delta / 32
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#D6A14A"
          size={0.0018}
          opacity={0.35}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none hidden 2xl:block opacity-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={['#0B0B0C', 0.85, 1.9]} />
        <Stars />
      </Canvas>
    </div>
  )
}
