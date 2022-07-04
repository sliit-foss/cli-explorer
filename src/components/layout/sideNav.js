import React, { useState } from "react";
import {
  FaYarn,
  FaVuejs,
  FaReact,
  FaNpm,
  FaWindows,
  FaLinux,
  FaTerminal,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import { SiNestjs, SiNextdotjs, SiHeroku } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

function SideNav({ setContent }) {
  const [selectedItem, setSelectedItem] = useState();

  const navItems = [
    { icon: FaLinux, desc: "Linux", link: "https://www.linux.org/" },
    {
      icon: FaWindows,
      desc: "Windows",
      link: "https://www.microsoft.com/en-us/windows/",
    },
    { icon: FaNpm, desc: "NPM", link: "https://www.npmjs.com/" },
    { icon: FaYarn, desc: "Yarn", link: "https://yarnpkg.com/en/" },
    { icon: FaVuejs, desc: "Vue.js", link: "https://vuejs.org/" },
    { icon: FaReact, desc: "React", link: "https://reactjs.org/" },
    { icon: AiFillGithub, desc: "Git", link: "https://github.com" },
    { icon: RiFlutterFill, desc: "Flutter", link: "https://flutter.dev/" },
    { icon: SiNestjs, desc: "Nest.js", link: "https://nestjs.com/" },
    { icon: SiNextdotjs, desc: "Next.js", link: "https://nextjs.org/" },
    { icon: SiHeroku, desc: "Heroku", link: "https://www.heroku.com/" },
  ];

  return (
    <div className="">
      <div className="fixed group z-40 flex flex-col h-screen w-[6rem] lg:hover:w-[14rem] bg-blue-primary shadow-right px-2  ease-in-out duration-300 ">
        <div className="flex flex-col mt-3.5">
          <FaTerminal className="w-12 h-12 text-white ml-[0.9rem] mb-12 mt-5" />
          {navItems.map((Item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="flex flex-row justify-start items-center">
                  <div className="my-3 ml-[0.8rem]">
                    <Item.icon
                      onClick={() => {
                        setContent(Item.desc);
                        setSelectedItem(Item.desc);
                      }}
                      className={`${
                        Item.desc === selectedItem
                          ? "text-red-400"
                          : "text-white"
                      } cursor-pointer w-12 h-12 hover:text-blue-light transition-all duration-300`}
                    />
                  </div>
                  <a
                    href={Item.link}
                    className={`hidden lg:flex cursor-pointer opacity-0 hover:text-blue-light pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto items-center pl-5 text-2xl text-white transition ease-in duration-300 `}
                  >
                    {Item.desc}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideNav;
