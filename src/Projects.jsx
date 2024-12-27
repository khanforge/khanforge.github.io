import React from 'react'
import { Card } from './Components'
import { projects } from './assets/DataItems'

const Projects = (props) => {
    return (
        <section id="projects" className='text-white mt-6'>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-violet-400 ml-1">Projects :</h1>
                <div className={`h-1 border-[1px] border-[#f5a3a3] rounded-sm bg-transparent ${props.classes}`} />
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {projects.map((proj, index) => (
                    <Card key={index} project={proj} />
                ))}
            </div>
        </section>
    )
}

export default Projects