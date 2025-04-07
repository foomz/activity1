import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei';
import EMRModel from './components/EMRModel';
import DancingCat from './components/DancingCat';

function App() {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <SpotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <SpotLight
            position={[-10, -10, -10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />

          {/* EMR Model */}
          <EMRModel position={[0, 0, 0]} />

          {/* Dancing Cat */}
          <DancingCat position={[2, -1, 0]} scale={[0.8, 0.8, 0.8]} />

          {/* Environment */}
          <fog attach="fog" args={['#1a1a1a', 8, 25]} />
        </Suspense>
      </Canvas>

      {/* Overlay Text */}
      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-3xl font-bold mb-2">Electronic Medical Record</h1>
        <p className="text-gray-300">Interactive 3D Visualization</p>
      </div>
    </div>
  );
}

export default App;