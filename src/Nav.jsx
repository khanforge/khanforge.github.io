import { NavItems } from "./assets/NavItems.js"
import { useState, useEffect } from "react"
import { AlignLeft, X } from "lucide-react";

function Nav(props) {
    const [isActive, setIsActive] = useState();
    const [activeMenu, setActiveMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        if (width >= 768) setActiveMenu(true);
        else setActiveMenu(false);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [width])

    const handleMenuBtn = () => {
        setActiveMenu(!activeMenu);
    }
    const handleIsActive = (id) => {
        setIsActive(id);
    }



    return (
        <div className="flex border-b-2 border-slate-950 bg-slate-900 fixed top-0 flex-col w-full justify-between items-center text-white md:px-10 md:flex-row md:py-3">
            <div className={`relative sm:static w-full sm:w-auto cursor-pointer md:hidden z-10`}>
                <div className={`absolute right-5 top-2 `}
                    onClick={() => { handleMenuBtn() }}
                >
                    <div className={`${activeMenu && 'hidden'}`}>
                        <AlignLeft />
                    </div>
                    <div className={`${!activeMenu && 'hidden'}`}>
                        <X />
                    </div>
                </div>
            </div>
            <div id="logo" className="z-20 lg:ml-5 lg:mr-2 h-12 w-12">
                <img src="./logo.png" className="text-white h-12 w-12 py-2" alt="" />
            </div>

            <div className="fixed md:static md:flex w-full top-12">
                {/* Adding transition classes */}
                <ul className={`flex flex-col justify-center items-center text-sm md:text-xl md:justify-end w-full md:flex-row z-0
                    ${activeMenu ? 'block opacity-100 transform translate-y-0 bg-slate-900' : ' opacity-0 transform -translate-y-full'} 
                    transition-all duration-500 ease-in-out`}>
                    {NavItems.map((item, index) => (
                        <li id={`link-${index}`}
                            className={`${item.id === isActive && 'text-yellow-200 md:border-yellow-200/100'} sm:border-b-4 sm:border-yellow-100/0 cursor-pointer sm:px-1 md:mr-1 lg:px-3`}
                            key={index}
                            onClick={() => handleIsActive(item.id)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Nav;