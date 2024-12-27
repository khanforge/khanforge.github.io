import { Github } from 'lucide-react'

const Card = (props) => {
    const project = props.project;
    return (
        <div id={`project-card-${project.id}`} className='mt-5 min-h-[20rem] w-[291px] bg-slate-950/50 border-[0.5px] border-violet-900 hover:border-[1px] hover:border-violet-500 rounded-md hover:scale-105 transition-all duration-300  ease-in-out overflow-hidden group'>
            <div id={`image-section-${project.id}`} className='relative  h-[10rem] w-[291px]'>
                <div id="image-mask" className='absolute top-0 left-0 bg-slate-950/50 h-[10rem] w-[291px] z-10'></div>
                <div className="absolute top-0 left-0 z-0 ">
                    <img src={project.imageUrl} alt="" className='h-[10rem] w-[291px]' />
                </div>
                <div className="absolute top-2  left-2 z-20">
                    <h1 className='text-violet-400 text-2xl font-bold group-hover:text-violet-500'>{project.projectName}</h1>
                </div>
                {project.githubUrl != "" && <div className="absolute cursor-pointer p-2 text-violet-500 font-extrabold rounded-lg right-1 top-1 bg-slate-900/30 group-hover:text-violet-400 z-20">
                    <a href={project.githubUrl}>
                        <Github strokeWidth={3}></Github>
                    </a>

                </div>}
            </div>
            <div id={`discription-${project.id}`} className='p-2'>
                <div className="text-violet-400 font-bold text-lg">
                    <span>{project.category}</span>
                </div>
                <div className="">
                    {project.techStack.map((stack, index) => (
                        <span key={index} className={`text-xs py-[2px] px-1 m-[2px] rounded-sm ${index % 2 ? 'bg-orange-300' : 'bg-emerald-600'}`}>{stack}</span>
                    ))}
                </div>
                <div className="text-sm m-1 text-justify text-violet-400 group-hover:text-violet-300">
                    <span>{project.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;