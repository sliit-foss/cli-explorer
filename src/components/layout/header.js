import React from "react";
import {BsMoonStarsFill} from 'react-icons/bs'
const Header = props => (
    <header>
        <div className="h-20 flex justify-end items-end mr-8">
            <BsMoonStarsFill className="w-10 h-10"/>
        </div>
    </header>
)
export default Header