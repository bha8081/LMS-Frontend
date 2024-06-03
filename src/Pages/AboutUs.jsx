import AboutMainImage from "../Assets/Images/AboutMainImage.jpg";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {

    // const celebrities = [
    //     {
    //         title: "Toni Stark",
    //         description: "Education is the most powerful tool you can use to change the world.",
    //         image: Tonistark,
    //         slideNumber: 1
    //     },

    //     {
    //         title: "Caption",
    //         description: "Hmm harege to sath mil kr aur jetege to sath mil kr.",
    //         image: Caption,
    //         slideNumber: 2
    //     },

    //     {
    //         title: "Bugei",
    //         description: "Caption my to every time tumhare sath hu tum jo bolo oo my abhi kr duga.",
    //         image: Bagei,
    //         slideNumber: 3
    //     },

    //     {
    //         title: "Natasha",
    //         description: "Kahi pr bhi loot maar ho rahi ho to mujhe jarur batana.",
    //         image: Natasha,
    //         slideNumber: 4
    //     },

    //     {
    //         title: "Wanda",
    //         description: "Tum sb ne mujhe ek kamre me band kr diya aur kahte ho hm tumhari help kr rahe hai.",
    //         image: Wanda,
    //         slideNumber: 5
    //     },
    // ]

    return (
        <HomeLayout>
            {/* Main Rapper div */}
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">

                        <h1 className="text-5xl font-bold text-sky-400">
                            Affordable and quality education.
                        </h1>

                        <p className="text-xl text-slate-300">
                            Our goal is to provide the afoordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to
                            share their skills, creativity and knowledge to each other to empower and
                            contribute in the growth and wellness of mankind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img 
                            id="text1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"
                            }}
                            className="drop-shadow-2xl"
                            src={AboutMainImage} 
                            alt="about main image" 
                        />
                    </div>
                </div>

        {/*Add Carousels  */}
            <div className="carousel w-1/2 my-16 m-auto">
                {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                                                                {...celebrity} 
                                                                key={celebrity.slideNumber} 
                                                                totalSlides={celebrities.length}
                                                                 
                                                            />))}
                
                {/* <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={Tonistark} className="w-40 rounded-full border-4 border-gray-800" />
                        <p className="text-xl text-gray-300">
                            {"Education is the most powerful tool you can use to change the world."}
                        </p>
                        <h2 className="text-3xl font-semibold text-gray-300">Toni Stark</h2>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={Caption} className="w-40 rounded-full border-4 border-gray-800" />
                        <p className="text-xl text-gray-300">
                            {"Hmm harege to sath mil kr aur jetege to sath mil kr."}
                        </p>
                        <h2 className="text-3xl font-semibold text-gray-300">Caption</h2>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={Bagee} className="w-40 rounded-full border-4 border-gray-800" />
                        <p className="text-xl text-gray-300">
                            {"Caption my to every time tumhare sath hu tum jo bolo oo my abhi kr duga."}
                        </p>
                        <h2 className="text-3xl font-semibold text-gray-300">Bugei</h2>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={Natasha} className="w-40 rounded-full border-4 border-gray-800" />
                        <p className="text-xl text-gray-300">
                            {"Kahi pr bhi loot maar ho rahi ho to mujhe jarur batana."}
                        </p>
                        <h2 className="text-3xl font-semibold text-gray-300">Natasha</h2>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div id="slide5" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={RedGirl} className="w-40 rounded-full border-4 border-gray-800" />
                        <p className="text-xl text-gray-300">
                            {"Tum sb ne mujhe ek kamre me band kr diya aur kahte ho hm tumhari help kr rahe hai."}
                        </p>
                        <h2 className="text-3xl font-semibold text-gray-300">Wanda</h2>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                </div> */}

            </div>

        </div>

    </HomeLayout>

    )
}

export default AboutUs;