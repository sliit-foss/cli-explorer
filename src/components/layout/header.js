import useDarkMode from "../themeControl";
import React from "react";
import {BsMoonStarsFill} from 'react-icons/bs'
import {BsSunFill} from 'react-icons/bs'


const Header = props => {
    const [colorTheme , setTheme] = useDarkMode();

    return(
    <header>
        <div onClick={() => setTheme(colorTheme)} className="h-10 w-10 xl:h-12 xl:w-12 absolute top-12 right-12 rounded-full ">
            { colorTheme == 'light' ? (
            <BsSunFill className="cursor-pointer h-10 w-10 xl:h-12 xl:w-12  fill-white hover:rotate-12 transition-all"/> ):
            (
            <BsMoonStarsFill className="cursor-pointer h-10 w-10 xl:h-12 xl:w-12 hover:rotate-12 transition-all"/> )
            }
        </div>
    </header>
    );
};
export default Header