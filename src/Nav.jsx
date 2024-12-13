import { NavItems } from "./assets/NavItems.js"
import { useState } from "react"
function Nav(props) {
    const [isActive, setIsActive] = useState();
    const handleIsActive = (id) => {
        setIsActive(id);
        console.log(id);
    }
    return (
        <div className="flex w-full justify-around h-14 items-center text-white px-10 mt-2">
            <div id="logo" className="font-extrabold text-2xl h-12 w-12">
                <img src="./logo.png" className="text-white h-12 w-12" alt="" srcset="" />
            </div>
            <ul className="flex justify-end  w-full">
                {NavItems.map((item, index) => (
                    <li id="link"
                        className={`mr-5 ${item.id === isActive && 'border-b-2 border-yellow-100'} cursor-pointer px-2 py-1`}
                        key={index}
                        onClick={() => handleIsActive(item.id)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Nav