"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Meteors } from "./ui/meteors";

export const ModelViewer: React.FC = () => {
  return (
    <Canvas style={{ height: "500px", width: "100%" }}>
      <EthereumModel />
      {/* <Meteors number={20} /> */}
    </Canvas>
  );
};

export const EthereumModel: React.FC = () => {
  const myModel = useLoader(GLTFLoader, "/ethereum-logo2.glb");
  const modelRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta / 8;
    }
  });

  return (
    <>
      <pointLight position={[-10, -10, -10]} color="#092c4c" intensity={8000} />
      <pointLight position={[10, 10, 10]} color="#4f4f4f" intensity={8000} />
      <primitive object={myModel.scene} ref={modelRef} />
    </>
  );
};
