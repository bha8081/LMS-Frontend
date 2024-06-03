function CarouselSlide({ image, title, description, slideNumber, totalSlides }) {
    return (
        <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img src={image} className="w-60 rounded-full border-4 border-gray-800" />
                <p className="text-xl text-gray-300">
                    {description}
                </p>
                <h2 className="text-3xl font-semibold text-gray-300">{title}</h2>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${(slideNumber == 1 ? totalSlides : (slideNumber - 1))}`} className="btn btn-circle">❮</a> 
                    <a href={`#slide${(slideNumber) % totalSlides + 1}`} className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default CarouselSlide;