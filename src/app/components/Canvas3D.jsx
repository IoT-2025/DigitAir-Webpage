"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Object = () => {
    const object3d = useGLTF('/esp32.glb');

    return (
        <primitive object={object3d.scene} scale={2} position-y={0.2} rotation-x={0.5} rotation-z={0.3} />
    );
};

const Canvas3D = () => {
    return (
        <Canvas
            className='z-50 min-h-[350px] md:h-auto 2xl:min-h-full'
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-5, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={1.0}
                    enablePan={false}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Object />
                <hemisphereLight intensity={1.30} groundColor='black' />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default Canvas3D