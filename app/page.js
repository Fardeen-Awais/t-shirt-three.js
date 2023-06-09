"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSnapshot } from "valtio";
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "./config/config/motion";
import state from "./store";
import CustomButton from "./components/CustomButton";
import { useEffect } from "react";
import MyCanvas from "./canvas";

export default function Home() {
  const snap = useSnapshot(state);

  useEffect(() => {
    state.intro = true;
    return () => {
      state.intro = false;
    };
  }, []);

  return (
    <motion.main className="home" {...slideAnimation("left")}>
      <motion.header>
        <Image
          className="w-10 h-10 object-contain"
          src="/threejs.png"
          alt="logo"
          width={300}
          height={300}
        />
      </motion.header>
      <motion.div className="homecontent" {...headContainerAnimation}>
        <div className="flex justify-center mx-auto items-center">
          <div>
            <motion.div {...headTextAnimation}>
              <h1 className="headtext">
                LET&apos;S 
                DO IT
              </h1>
            </motion.div>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your Unique and customizable shirt with our Brand-new 3D
                customization tool. <strong>Unleash Your imagination</strong> and
                define your own style.
              </p>
              <Link href={"/customizer"}>
                <CustomButton
                  type="filled"
                  title="Customize"
                  customStyles="w-full px-4 py-2 font-bold text-sm"
                />
              </Link>
            </motion.div>
          </div>
          <div className="flex w-full h-full justify-center max-w-full items-center min-h-screen  z-10">
            <MyCanvas />
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}
