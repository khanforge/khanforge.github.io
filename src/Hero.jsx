const Hero = (props) => {
    return (
        <>
            <section id="hero" className="flex mt-40 w-full justify-around">
                <div id="tagline" className="text-slate-50 flex flex-col">
                    <span className="text-[3rem]">Full Stack Web-Developer</span>
                    <div className="text-[6rem] font-extrabold flex flex-col">
                        <span className="">Parvej </span>
                        <span>Khan</span>
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