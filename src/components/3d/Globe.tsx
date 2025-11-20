"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Brand Colors
const NAVY_BLUE = "#0B1E45";
const GOLD = "#F0A500"; // The "Orange"

function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

function OrbitalRing({ radius, rotation, speed }: { radius: number; rotation: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <group rotation={rotation}>
      <Torus args={[radius, 0.015, 16, 100]} ref={ref}>
        <meshStandardMaterial
          color={NAVY_BLUE}
          emissive={NAVY_BLUE}
          emissiveIntensity={0.8}
          transparent
          opacity={0.9}
        />
      </Torus>
    </group>
  );
}

export default function Globe(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  // Generate points for the minimalist core
  const spherePoints = useMemo(() => generateSpherePoints(5500, 1.5), []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto-rotation
      groupRef.current.rotation.y += delta * 0.05;

      // Mouse interaction (smooth lerp)
      // state.pointer.x goes from -1 to 1
      // We want to influence rotation based on mouse X and Y
      const targetRotationY = state.pointer.x * 0.5; // Influence Y rotation
      const targetRotationX = -state.pointer.y * 0.5; // Influence X rotation

      // Smoothly interpolate current extra rotation towards target
      // We add this to the base rotation
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y % (Math.PI * 2)) * delta * 2;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, delta * 2);
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Minimalist Point Cloud Core - Increased Visibility */}
      <Points positions={spherePoints} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={GOLD}
          size={0.025} // Increased size
          sizeAttenuation={true}
          depthWrite={false}
          opacity={1.0} // Increased opacity
        />
      </Points>

      {/* Subtle Inner Glow Sphere */}
      <mesh>
        <sphereGeometry args={[1.45, 32, 32]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.05} />
      </mesh>

      {/* Swooshes / Orbital Rings */}
      <OrbitalRing radius={1.8} rotation={[Math.PI / 3, 0, 0]} speed={0.2} />
      <OrbitalRing radius={2.0} rotation={[-Math.PI / 4, Math.PI / 6, 0]} speed={-0.15} />
    </group>
  );
}
