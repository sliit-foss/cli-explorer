import useDarkMode from "../themeControl";
import React from "react";
import {BsMoonStarsFill} from 'react-icons/bs'
import {BsLightbulb} from 'react-icons/bs'


const Header = props => {
    const [colorTheme , setTheme] = useDarkMode();

    return(
    <header>
        <div onClick={() => setTheme(colorTheme)} className="h-20 xl:h-14 xl:w-14 absolute top-12 right-12 rounded-full ">
            { colorTheme == 'light' ? (
            <BsMoonStarsFill className="cursor-pointer w-10 h-10 lg:h-14 lg:w-14 fill-white"/> ):
            (
            <BsLightbulb className="cursor-pointer w-10 h-10 lg:h-14 lg:w-14 "/> )
            }
        </div>
    </header>
    );
};
export default Header