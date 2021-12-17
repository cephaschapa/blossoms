function Hero() {
    return (
        <div className="hero-section h-screen w-screen relative mt-60 lg:mt-32 ">
            {/* Overlay */}
            <div className="relative h-full w-full bg-black opacity-60">

            </div>
            {/*Headlines, Text */}
            <div className="flex flex-col absolute top-0 lg:-mt-24 px-5 justify-center items-center w-full h-full lg:px-96">
                {/* taglines */}
                <div className="flex flex-col justify-center items-center bg-pink-300 rounded-3xl rounded-br-none mb-4 p-2 border-dashed-2 border-white  py-6 text-white text-xl lg:text-4xl text-center">
                    <p>Private Nursery & Pre-School</p>
                    <p>Children aged 8 weeks to 4 years</p>
                    <p>7am until 7pm, 7 days-a-week</p>
                </div>
                {/* divider */}
                {/* <div className="w-12 p-1 bg-white rounded-full"></div> */}
                {/* Headline */}
                <div className="flex flex-col justify-center py-4 items-center">
                    <h1 className="text-4xl uppercase text-center text-white lg:text-6xl font-bold">Childcare that’s available when you need it</h1>
                    <div className="w-12 p-1 bg-white rounded-full my-4"></div>
                    <p className="text-center text-white text-2xl">A loving and nurturing home-from-home environment where children are put before profits.</p>
                    <p className="text-center text-white text-2xl">Fresh home-cooked meals, healthy breakfasts and snacks, and nappies included in fees.</p>
                    <p className="text-center text-white text-2xl">Plus, free take-away tea, coffee & hot-chocolate for our busy parents & carers</p>
                </div>
            </div>
            {/*  */}
        </div>
    )
}

export default Hero
