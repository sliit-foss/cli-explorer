import React from "react";
import PropTypes from "prop-types";
import github from "assets/images/github.svg";

const Footer = (props) => (
  <footer className="relative flex flex-row items-center justify-center bottom-0 w-full p-2 bg-blue-primary dark:bg-black h-[6rem] font-bold">
    {/* <div className="absolute flex w-full h-full justify-end items-center bottom-0 left-0 pr-[6rem]">
      <a href="https://github.com/sliit-foss/cli-explorer" target="_blank">
        <img src={github} className="w-14 h-14 m-2 mb-6 mr-6 "></img>
      </a>
    </div> */}
    <h1 className="flex flex-row z-50 text-center tracking-wide text-white ">
      Made With <span className="text-red-500 pl-2 pr-2">❤</span> from{" "}
      <a
        href="https://sliitfoss.org/"
        target="_blank"
        className="text-white tracking-wide pl-2"
      >
         SLIIT FOSS
      </a>
    </h1>
  </footer>
);

export default Footer;
