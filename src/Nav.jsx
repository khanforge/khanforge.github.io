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
    const handleIsActive = (id, elementId) => {
        setIsActive(id);
        let offset = 95;
        if (width < 768) {
            handleMenuBtn();
            (id == 7) ? offset = 0 : offset = 75;
        }
        const element = document.getElementById(elementId);
        const rect = (element ? element.getBoundingClientRect() : 0);
        const pos = rect ? (rect.top + window.scrollY - offset) : 0;
        window.scroll({
            top: pos,
            behavior: "smooth"
        });
        console.log(pos);
    }



    return (
        <div className="flex border-b-2 border-slate-950 bg-slate-900 fixed top-0 flex-col w-full justify-between items-center text-white md:px-10 md:flex-row md:py-3 z-50">
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

            <div className="fixed w-full md:static md:flex ">
                {/* Adding transition classes */}
                <ul className={`flex flex-col gap-5 justify-center items-center h-[0vh] w-0 text-2xl md:text-xl md:justify-end md:flex-row z-0 md:gap-0 md:h-0
                    ${activeMenu ? 'static opacity-100 transform transition-transform translate-x-0 bg-slate-900 h-[100vh] w-full' : 'static opacity-0 transform transition-transform -translate-x-full'} 
                    transition-transform duration-500 delay-100 ease-in-out`}>
                    {NavItems.map((item, index) => (
                        <li id={`link-${index}`}
                            className={`${item.id === isActive && 'text-violet-200 md:border-violet-300/100'} text-violet-600 sm:border-b-4 sm:border-violet-100/0 rounded-sm cursor-pointer sm:px-1 md:mr-1 lg:px-3`}
                            onClick={() => handleIsActive(item.id, item.elementId)}
                            key={index}
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
