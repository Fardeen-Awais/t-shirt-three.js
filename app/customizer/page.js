"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config/config/config";
import Link from "next/link";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/config/constants";
import { fadeAnimation, slideAnimation } from "../config/config/motion";
import {
  AiPicker,
  ColorPicker,
  FilePicker,
  CustomButton,
  Tab,
} from "../components";
import MyCanvas from "../canvas";

export default function Page() {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [ActiveEditorTab, setActiveEditorTab] = useState("");
  const [ForFilterTab, setForFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on active tab
  const showTabContent = () => {
    switch (ActiveEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker />;
      case "aipicker":
        return <AiPicker />;
      default:
        return "hello";
    }
  };

  console.log(`This is the active editor tab: ${ActiveEditorTab}`);
  return (
    <AnimatePresence>
      <motion.div
        key="custom"
        className="absolute top-0 left-0 z-10"
        {...slideAnimation("left")}
      >
        <div className="flex items-center min-h-screen">
          <div className="editortabscontainer tabs">
            {EditorTabs.map((tab) => (
              <Tab
              className='cursor-pointer'
                key={tab.name}
                tab={tab}
                handleClick={() => setActiveEditorTab(tab.name)}
              />
            ))}
            {showTabContent()}
          </div>
        </div>
      </motion.div>

      <div className="absolute flex justify-center items-center min-h-screen w-full h-full ">
        <MyCanvas />
      </div>

      <motion.div className="absolute z-10 top-4 right-5" {...fadeAnimation}>
        <Link href={"/"}>
          <CustomButton
            type="filled"
            title="Go Back"
            customStyles="w-fit px-4 py-2 rounded-md font-bold text-sm"
          />
        </Link>
      </motion.div>
      <motion.div
        className="filtertabscontainer tabs"
        {...slideAnimation("up")}
      >
        {FilterTabs.map((tab) => (
          <Tab key={tab} tab={tab} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
