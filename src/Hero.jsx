const Hero = (props) => {
    return (
        <>
            <section id="hero" className="flex mt-40 w-full justify-around">
                <div id="tagline" className=" flex flex-col">
                    <span className="text-[3rem] text-slate-50">Full Stack Web-Developer</span>
                    <div className="text-[6rem] font-extrabold flex flex-col gap-y-0 leading-none">
                        <span className="text-outline-2">Parvej </span>
                        <span className="text-slate-50">Khan</span>
                    </div>

                </div>
                <div id="photo-profile">
                    <div className="h-96 w-full">
                        <img src="./profile.png " className="h-96 w-full" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;