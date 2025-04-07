import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshProps } from '@react-three/fiber';
import * as THREE from 'three';

const DancingCat: React.FC<MeshProps> = (props) => {
  const catRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!catRef.current) return;
    // Dancing motion
    catRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    catRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    // Tail wagging - more enthusiastic for dog
    if (catRef.current.children[3]) {
      catRef.current.children[3].rotation.z = Math.sin(state.clock.elapsedTime * 6) * 0.5;
    }
  });

  return (
    <group ref={catRef} {...props}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#8B4513" /> {/* Brown color */}
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.5, 0.35]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Ears - floppy dog ears */}
      <group position={[0, 0.75, 0.3]}>
        <mesh position={[-0.25, -0.05, -0.05]} rotation={[0.3, 0, Math.PI / 4]} castShadow>
          <boxGeometry args={[0.1, 0.2, 0.05]} />
          <meshStandardMaterial color="#704214" /> {/* Darker brown */}
        </mesh>
        <mesh position={[0.25, -0.05, -0.05]} rotation={[0.3, 0, -Math.PI / 4]} castShadow>
          <boxGeometry args={[0.1, 0.2, 0.05]} />
          <meshStandardMaterial color="#704214" />
        </mesh>
      </group>

      {/* Tail - longer than cat tail */}
      <mesh position={[0, 0, -0.6]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <cylinderGeometry args={[0.05, 0.03, 0.7, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Snout */}
      <mesh position={[0, 0.4, 0.65]} castShadow>
        <boxGeometry args={[0.25, 0.2, 0.25]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.4, 0.8]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Eyes */}
      <group position={[0, 0.55, 0.6]}>
        <mesh position={[-0.1, 0, 0]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color="#000000" /> {/* Black eyes instead of green */}
        </mesh>
        <mesh position={[0.1, 0, 0]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Legs */}
      <group position={[0, -0.3, 0]}>
        {/* Front legs */}
        <mesh position={[0.3, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.4, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[-0.3, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.4, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* Back legs */}
        <mesh position={[0.3, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.4, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[-0.3, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.4, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>
    </group>
  );
};

export default DancingCat;