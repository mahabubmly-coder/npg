
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

function AirplaneMesh() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Simple airplane silhouette
    s.moveTo(0, 0.5); // Nose
    s.lineTo(0.2, 0.1); // Right wing start
    s.lineTo(0.8, -0.2); // Right wing tip
    s.lineTo(0.2, -0.1); // Right wing back
    s.lineTo(0.1, -0.4); // Tail start
    s.lineTo(0.3, -0.6); // Tail tip
    s.lineTo(0, -0.5); // Tail center
    s.lineTo(-0.3, -0.6); // Left tail tip
    s.lineTo(-0.1, -0.4); // Left tail start
    s.lineTo(-0.2, -0.1); // Left wing back
    s.lineTo(-0.8, -0.2); // Left wing tip
    s.lineTo(-0.2, 0.1); // Left wing start
    s.lineTo(0, 0.5); // Back to nose
    return s;
  }, []);

  return (
    <mesh rotation={[0, 0, -Math.PI / 2]} scale={[0.3, 0.3, 0.3]}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial color={NAVY_BLUE} side={THREE.DoubleSide} />
    </mesh>
  );
}

function OrbitingAirplane({ radius, speed }: { radius: number; speed: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the entire group to orbit
      groupRef.current.rotation.z -= delta * speed;

      // Add a slight wobble for realism
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + (Math.PI / 3);
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} rotation={[Math.PI / 3, 0, 0]}>
      {/* The Trail Line - Torus with gap */}
      <Torus args={[radius, 0.008, 16, 100, Math.PI * 1.5]} rotation={[0, 0, Math.PI / 2 + 0.2]}>
        <meshStandardMaterial
          color={NAVY_BLUE} // Blue Orbit
          emissive={NAVY_BLUE}
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
        />
      </Torus>

      {/* The Code-Generated Airplane */}
      <group rotation={[0, 0, Math.PI / 2 + 0.2 + (Math.PI * 1.5)]}>
        <group position={[radius, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <AirplaneMesh />
        </group>
      </group>
    </group>
  );
}

export default function Globe(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  // Generate points for the minimalist core
  const spherePoints = useMemo(() => generateSpherePoints(8500, 1.6), []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto-rotation of the globe itself
      groupRef.current.rotation.y += delta * 0.02;

      // Mouse interaction (smooth lerp)
      const targetRotationY = state.pointer.x * 0.2;
      const targetRotationX = -state.pointer.y * 0.2;

      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y % (Math.PI * 2)) * delta;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, delta);
    }
  });

  return (
    <group {...props}>
      {/* The Globe */}
      <group ref={groupRef}>
        <Points positions={spherePoints} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color={GOLD} // Orange Globe
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.9}
          />
        </Points>
        {/* Inner Sphere for depth */}
        <mesh>
          <sphereGeometry args={[1.55, 32, 32]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.08} />
        </mesh>
      </group>

      {/* Orbiting Airplane */}
      <OrbitingAirplane radius={2.2} speed={0.5} />
    </group>
  );
}
