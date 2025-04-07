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
    // Tail wagging
    if (catRef.current.children[3]) {
      catRef.current.children[3].rotation.z = Math.sin(state.clock.elapsedTime * 4) * 0.3;
    }
  });

  return (
    <group ref={catRef} {...props}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#808080" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.5, 0.3]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#808080" />
      </mesh>

      {/* Ears */}
      <group position={[0, 0.7, 0.3]}>
        <mesh position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
          <coneGeometry args={[0.1, 0.2, 32]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
        <mesh position={[0.2, 0, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
          <coneGeometry args={[0.1, 0.2, 32]} />
          <meshStandardMaterial color="#808080" />
        </mesh>
      </group>

      {/* Tail */}
      <mesh position={[0, 0, -0.5]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 32]} />
        <meshStandardMaterial color="#808080" />
      </mesh>

      {/* Eyes */}
      <group position={[0, 0.5, 0.5]}>
        <mesh position={[-0.1, 0, 0]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.1, 0, 0]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </group>
  );
};

export default DancingCat;