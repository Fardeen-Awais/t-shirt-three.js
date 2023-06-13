"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "./config/config/motion";
import state from "./store";

export default function Home() {
  const snap = useSnapshot(state);
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
      <motion className="homecontent" {...headContainerAnimation}>
        <motion.div {...headTextAnimation}>
          <h1 className="headtext">LET&apos;S <br className="xl:block hidden"/>DO IT</h1>
        </motion.div>
        <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
          <p className="max-w-md font-normal text-gray-600 text-base">
            Create your Unique and customizable shirt with out Brand-new 3D cusomization tool. <strong>Unleash Your imagination</strong> and define your own style.
          </p>
        </motion.div>
      </motion>
    </motion.main>
  );
}
