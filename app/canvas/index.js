import React from "react";
import Backdrop from "./Backdrop";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import { Canvas } from "@react-three/fiber";
const MyCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
    );
};

export default MyCanvas;
