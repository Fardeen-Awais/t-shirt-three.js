import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    // Break Points
    const isBreakpoint = window.innerWidth <= 1280;
    const isMobile = window.innerWidth <= 600;

    // Set initial position
    let targetPosition = [-0.4, 0, 0.5];

    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 0.5];
      if (isMobile) targetPosition = [0, 0, 0.6];
    } else {
      if (isBreakpoint) targetPosition = [0, 0, 0.5];
      if (isMobile) targetPosition = [0, 0, 0.5];
    }

    // Set model camera postion
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Set the model rotation smoothly
    if (group.current) {
      console.log("Group:", group.current);
      console.log("Rotation:", group.current.rotation);

      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    } else {
      console.log("rotation is not working");
    }
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
