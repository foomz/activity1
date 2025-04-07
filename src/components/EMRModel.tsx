import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshProps } from '@react-three/fiber';
import * as THREE from 'three';

const EMRModel: React.FC<MeshProps> = (props) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <group {...props}>
      {/* Main EMR folder */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial color="#1a5928" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Medical cross symbol */}
      <mesh position={[0, 0, 0.15]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Glow effect */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[4, 5]} />
        <meshBasicMaterial
          color="#1a5928"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default EMRModel;