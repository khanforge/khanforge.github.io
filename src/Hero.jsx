const Hero = (props) => {
    return (
        <>
            <section id="hero" className="mt-16 w-full flex justify-center items-center h-[52vh] sm:h-[71vh] md:h-[90vh] sm:mt-24 md:mt-28">
                <div className="relative w-full h-full">
                    <div className="absolute left-2 z-20 sm:left-16 md:left-20">
                        <div className="flex flex-row gap-1 sm:gap-2 lg:gap-4">
                            <div className="flex flex-col items-center">
                                <div className="h-6 w-6 rounded-full bg-violet-600 sm:h-7 sm:w-7 lg:h-10 lg:w-10" />
                                <div className="h-[285px] w-1 bg-gradient-to-b from-violet-800 sm:h-[350px] lg:w-[6px] lg:h-[450px] xl:h-[375px]" />
                            </div>
                            <div id="tagline" className="flex flex-col xl:gap-6">
                                <span className="text-[1.6rem] font-bold text-slate-50 sm:text-[2.5rem] lg:text-[4rem] lg:font-medium">Full Stack Web-Developer</span>
                                <div className="text-[3rem] sm:text-[6rem] font-extrabold flex flex-col gap-y-0 leading-none">
                                    <span className="text-outline-2 sm:text-outline-4 ">Parvej </span>
                                    <span className="text-[#673ab7]">Khan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="photo-profile" className="absolute z-10 right-2 top-9 sm:right-5 sm:top-12 lg:top-20 xl:top-0">
                        <div className="h-52 sm:h-80 w-full lg:h-96">
                            <img src="./profile.png" className="h-52 sm:h-80 lg:h-96 w-full" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;