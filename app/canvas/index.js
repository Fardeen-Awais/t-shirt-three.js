import React from "react";
import Backdrop from "./Backdrop";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import { Canvas } from "@react-three/fiber";
const MyCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0], fov: 100 }} gl={{preserveDrawingBuffer:true}} className="w-full h-full max-w-full ">
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        {/* <Backdrop />  I'm personally not interested in the backdrop */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
    );
};

export default MyCanvas;
