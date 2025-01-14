import React from 'react'
import { Linkedin, Github } from 'lucide-react'

const SocialLinks = () => {
    const style = " px-4 py-1 bg-violet-900 rounded-r-xl cursor-pointer text-violet-300/80 bg-opacity-30 hover:text-violet-300/100 hover:bg-opacity-100 transition-all duration-300 ease-in-out hover:scale-105"
    return (
        <div className="left-0 hover:left-0 fixed top-1/2 z-10 flex flex-col gap-y-2 md:-left-3 transition-all duration-700 ease-in-out">
            <div
                className={style}
                onClick={() => {
                    window.open("https://linkedin.com/in/khan-parvej-pk", "_blank")
                }}
            >
                <Linkedin size={30}></Linkedin>
            </div>
            <div
                className={`${style}`}
                onClick={() => {
                    window.open("https://github.com/khanforge", "_blank")
                }}
            >
                <Github />
            </div>
        </div>
    )   
}

export default SocialLinks
