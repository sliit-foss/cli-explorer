import React from "react";
import {BsMoonStarsFill} from 'react-icons/bs'
const Header = props => (
    <header>
        <div className="h-20 xl:h-14 xl:w-14 absolute top-12 right-12">
            <BsMoonStarsFill className="w-10 h-10 lg:h-14 lg:w-14 "/>
        </div>
    </header>
)
export default Header