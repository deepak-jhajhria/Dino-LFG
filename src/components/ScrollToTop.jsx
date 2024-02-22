import React, { useState, useEffect } from "react";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (isVisible &&
        <div className="fixed z-10 duration-500 scroll-to-top hover:opacity-100 right-5 bottom-4 " onClick={scrollToTop}>
            <button className="rounded-full hover:shadow-[0_0_20px_1px_#FBA11D] hover:w-[100px] sm:hover:w-[140px] hover:duration-300 hover:bg-gradient-to-br hover:to-[#FBA11D] hover:from-[#FEBF1A] relative before:absolute before:-bottom-5 backToTop before:text-black before:text-[0px] hover:before:text-sm sm:hover:before:text-xl before:duration-300 hover:before:bottom-3 hover:before:duration-300 group z-[100] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-[#FBA11D] font-semibold flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.253)] overflow-hidden">
                <svg className=" w-3 duration-300 fill-white group-hover:translate-y-[200%]" viewBox="0 0 384 512">
                    <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
        </div >
    );
};

export default ScrollToTop;