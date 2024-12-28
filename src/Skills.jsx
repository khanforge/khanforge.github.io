import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const ProgressBar = (props) => {
    const [skillLevel, setSkillLevel] = useState(0);
    const skillObj = props.skillObj;
    // const inView = props.isInVeiw;

    const { ref, inView } = useInView({
        threshold: 0.03,
    })

    useEffect(() => {
        if (inView && skillLevel < skillObj.sillLevel) {
            const timer = setTimeout(() => {
                setSkillLevel(skillLevel + 1);
            }, 25)
            return () => clearTimeout(timer);
        }
        else if (!inView) {
            setSkillLevel(0);
        }

    }, [skillLevel, inView])
    return (
        <div id={`progress - bar-${props.id}`} ref={ref} >
            <div className='mb-1'>{skillObj.skillName}</div>
            <div className=" h-5 w-80 md:w-80 lg:w-96 border-2 border-violet-900 rounded-lg overflow-hidden">
                <div className={` relative left-0 top-0 bg-violet-800/60 h-5 transition-all transform duration-100 rounded-sm`} style={{ width: `${skillLevel}%` }} >
                    <div className="absolute right-2 top-0 text-xs text-violet-300">{skillLevel}%</div>
                </div>

            </div>
        </div>
    )
}

const Skills = (props) => {

    return (
        <div id={`skills`} className='text-white mt-6 w-full'>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-violet-400 ml-1">Skills :</h1>
                <div className={`h-1 border-[1px] border-[#f5a3a3] rounded-sm bg-transparent ${props.classes}`} />
            </div>
            <div className="flex justify-center items-center w-full mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-52">

                    {
                        props.skills.map((skill, index) => (
                            <div className="w-full" key={index}>
                                <ProgressBar id={index} skillObj={skill} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills