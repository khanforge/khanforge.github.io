const Hero = (props) => {
    return (
        <>
            <section id="hero" className="mt-16 sm:mt-40 ml-3">
                <div id="" className="relative lg:static lg:flex lg:flex-wrap w-full lg:justify-around items-center">
                    <div className="absolute lg:static flex flex-row gap-4 z-20">
                        <div className="flex flex-col items-center">
                            <div className="h-6 w-6 rounded-full bg-violet-600" />
                            <div className="h-[325px] w-1 bg-gradient-to-b from-violet-800"/>
                        </div>
                        <div id="tagline" className="flex flex-col">
                            <span className="text-[1.5rem] lg:text-[3rem] text-slate-50">Full Stack Web-Developer</span>
                            <div className="text-[4rem] lg:text-[6rem] lg:font-extrabold flex flex-col gap-y-0 leading-none">
                                <span className="text-outline-2 lg:text-outline-4">Parvej </span>
                                <span className="text-[#f5a3a3]">Khan</span>
                            </div>
                        </div>
                    </div>
                    <div id="photo-profile" className="absolute left-[60%] top-[2.2rem] lg:static z-10">
                        <div className="h-52 w-full">
                            <img src="./profile.png" className="h-52 w-full" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;