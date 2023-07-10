"use client"
import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  // console.log(readFile, file, setFile);
  console.log('janu')
  return (
    <div className="filepickercontainer">
      <div className="flex flex-1 flex-col">
        <input
          id="fileupload"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*"
        />
        <label htmlFor="fileupload" className="filepickerlabel">
          Upload file
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 p-3 z-30">
        <CustomButton
          type="outline"
          title={"Logo"}
          customStyles="text-xs"
          handleClick={() => {
            console.log("Logo button clicked");
            readFile("logo");
          }}
        />
        <CustomButton
          type="filled"
          title={"Full"}
          customStyles="text-xs"
          handleClick={() => {
            console.log("Full button clicked");
            readFile("full");
          }}
        />
      </div>
    </div>
  );
};

export default FilePicker;
