import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useAppContext } from '../context/AppContext';

function FloatingSpheres() {
  const { theme } = useAppContext();
  const group = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  // Desktop only, so we can keep a reasonable number of spheres
  const numSpheres = 10;

  // Create a memoized array of sphere data
  const spheres = useMemo(() => {
    return Array.from({ length: numSpheres }).map(() => ({
      position: [
        (Math.random() - 0.5) * viewport.width * 2,
        (Math.random() - 0.5) * viewport.height * 2,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      scale: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.15 + 0.05,
      color: Math.random() > 0.5 ? '#0ea5e9' : '#3b82f6', // Cyan and Blue
    }));
  }, [viewport.width, viewport.height]);

  useFrame((state) => {
    if (!group.current) return;
    
    const time = state.clock.getElapsedTime();
    
    group.current.children.forEach((child, i) => {
      const data = spheres[i];
      // Float animation
      child.position.y = data.position[1] + Math.sin(time * data.speed) * 2;
      child.position.x = data.position[0] + Math.cos(time * data.speed) * 1;
      
      // Rotate
      child.rotation.x += 0.01 * data.speed;
      child.rotation.y += 0.01 * data.speed;
    });

    // Mouse parallax - gentle and low overhead
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (mouse.y * Math.PI) / 15, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (mouse.x * Math.PI) / 15, 0.05);
  });

  return (
    <group ref={group}>
      {spheres.map((data, i) => (
        <mesh key={i} position={data.position} scale={data.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          {/* Use native MeshPhysicalMaterial which is much faster than MeshTransmissionMaterial */}
          <meshPhysicalMaterial 
            color={data.color}
            transmission={0.9}
            opacity={1}
            metalness={0.1}
            roughness={0.1}
            ior={1.5}
            thickness={0.5}
            transparent={true}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Background3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Disable 3D rendering for all screens smaller than 768px (phones and small tablets)
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[-1] bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-slate-950 dark:to-cyan-950 transition-colors duration-500 bg-cover bg-center bg-no-repeat"
      style={isMobile ? { backgroundImage: "url('/mobile-bg.jpg')" } : {}}
    >
      {!isMobile && (
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 45 }}
          dpr={[1, 1.5]} // Cap device pixel ratio to max 1.5 to save GPU on desktop
          gl={{ powerPreference: "default", antialias: false }} // Disable antialias for performance
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <FloatingSpheres />
        </Canvas>
      )}
    </div>
  );
}
