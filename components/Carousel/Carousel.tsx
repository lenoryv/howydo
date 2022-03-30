import { useState } from "react";

function Carousel() {

    const [index, setIndex] = useState<number>(0);
    const next = () => {
        if (index >= 2) {
            setIndex(0);
        } else {
            setIndex(index+1);
        }
    }

    const previous = () => {
        if (index <= 0) {
            setIndex(2);
        } else {
            setIndex(index-1);
        }
    }

    return (
        <div id="default-carousel" className="relative" data-carousel="slide">
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

                <div className={(index === 0 ? "z-20 translate-x-0" : "z-10 translate-x-full") + " duration-700 ease-in-out absolute inset-0 transition-all transform"} data-carousel-item="">
                    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                    <img src="/svg/blob-haikei.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>

                <div className={(index === 1 ? "z-20 translate-x-0" : "z-10 translate-x-full") + " duration-700 ease-in-out absolute inset-0 transition-all transform"} data-carousel-item="">
                    <img src="/svg/blob-haikei-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>

                <div className={(index === 2 ? "z-20 translate-x-0" : "z-10 translate-x-full") + " duration-700 ease-in-out absolute inset-0 transition-all transform"} data-carousel-item="">
                    <img src="/svg/blob-haikei-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
            </div>

            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button onClick={() => setIndex(0)} type="button" className={(index === 0 ? "bg-white" : "bg-white/50") + " w-3 h-3 rounded-full dark:bg-gray-800"} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button onClick={() => setIndex(1)} type="button" className={(index === 1 ? "bg-white" : "bg-white/50") + " w-3 h-3 rounded-full dark:bg-gray-800"} aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button onClick={() => setIndex(2)} type="button" className={(index === 2 ? "bg-white" : "bg-white/50") + " w-3 h-3 rounded-full dark:bg-gray-800"} aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>

            <button onClick={() => previous()} type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="hidden">Previous</span>
                </span>
            </button>
            <button onClick={() => next()} type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="hidden">Next</span>
                </span>
            </button>
        </div>

    );
}
export default Carousel;