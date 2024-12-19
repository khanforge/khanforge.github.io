import { bioData } from './assets/DataItems'
import { BriefcaseBusiness } from 'lucide-react';

const About = () => {
    return (
        <div className='text-slate-200 lg:m-4'>
            <div className="ml-2">
                <div className="flex flex-col">
                    <h1 className='text-2xl font-bold text-violet-400 ml-1'>About Me:</h1>
                    <div className='h-1 w-36 border-[1px] border-[#f5a3a3] rounded-sm bg-transparent' />
                </div>
                <h1 className="text-2xl">I'm Parvej Khan</h1>
            </div>
            <div className="flex flex-wrap justify-start items-center w-full gap-7 sm:gap-5">
                <div id="about-para" className="m-2 md:w-1/2 lg:w-[60%] xl:w-[70%] text-lg">
                    <div className="text-justify">
                        Welcome to my portfolio! I'm Parvej Khan, a passionate tech enthusiast and aspiring computer scientist currently pursuing my Master of Technology in Computer Science and Engineering at NIT Delhi. With hands-on experience in diverse domains such as web development, game design, and machine learning, I thrive on crafting innovative solutions to real-world challenges. From building immersive VR training simulations at DRDO to developing efficient web platforms and interactive tools, I am dedicated to blending creativity and technology to drive impactful results. My journey is fueled by a commitment to continuous learning and a drive to explore the ever-evolving tech landscape.
                        <span className='flex gap-2 w-32 p-2 bg-slate-800 rounded-md cursor-pointer justify-center items-center mt-2 transition-all duration-150 ease-in-out hover:scale-105 hover:text-slate-900 hover:bg-slate-100'>
                            <BriefcaseBusiness />
                            <span className="">
                                Hire Me!
                            </span>
                        </span>
                    </div>
                </div>
                <div id="biodata" className="font-semibold">
                    <table className='table-fixed'>
                        <tbody>
                            {bioData.map((values, index) => (
                                <tr key={index}>
                                    <td>{values.field}</td>
                                    <td>{`: ${values.value}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default About