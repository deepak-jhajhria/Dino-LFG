import { useState } from "react"
import { FaqDown, FaqUp } from "./Icons";
import shadow from '../assets/images/faqshadowup.png'
const Faq = () => {
    const [open, setOpen] = useState(null);
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    const accordionData = [
        { id: 1, title: "Maecenas laoreet, sapien vel cursus ultricies?", content: "Maecenas laoreet, sapien vel cursus ultricies, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 2, title: "Maecenas laoreet, sapien vel cursus ultricies?", content: "Maecenas laoreet, sapien vel cursus ultricies, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 3, title: "Maecenas laoreet, sapien vel cursus ultricies?", content: "Maecenas laoreet, sapien vel cursus ultricies, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 4, title: "Maecenas laoreet, sapien vel cursus ultricies?", content: "Maecenas laoreet, sapien vel cursus ultricies, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
        { id: 5, title: "Maecenas laoreet, sapien vel cursus ultricies?", content: "Maecenas laoreet, sapien vel cursus ultricies, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar." },
    ];
    return (
        <div className="relative bg-[#0A4740]">
            <img className="w-full -translate-y-4" src={shadow} alt="shadow" />
            <div className="container max-w-[970px] -mb-6 relative z-10">
                <h2 className='sm:text-[64px] text-[40px] font-normal text-white text-center font-Chewy leading-[83.63px] md:mb-[97px]leading-[132%] relative z-10 mb-10'>FAQs</h2>
                <div className="mt-6 sm:mt-10 lg:mt-[61px]">
                    {accordionData.map((item, index) => (
                        <div data-aos="fade-up" data-aos-duration="400" className={`border border-white mb-4 sm:mb-6 md:mb-[22px] bg-[#09655A] px-3 xs:px-4 ${item.id === 5 ? "!-mb-0" : ""} ${open === index ? "rounded-2xl md:px-[40px]" : "rounded-full md:px-[50px]"}`} key={item.title}>
                            <div onClick={() => toggleAccordion(index)} className={` ${open === index ? "" : ""} cursor-pointer flex items-center pt-[21px] pb-[19px] justify-between`}>
                                <h2 data-aos="fade-up" data-aos-duration="500" className="w-[90%] text-white font-Balsamiq font-bold text-sm xs:text-base sm:text-lg md:text-xl leading-6">{item.title}</h2>
                                <span data-aos="fade-up" data-aos-duration="500" className="flex items-center justify-center mt-1">{open === index ? (<span className="flex items-center justify-center bg-white rounded-full w-9 h-9"><FaqDown /></span>) : (<span className="flex items-center justify-center bg-white rounded-full w-9 h-9"><FaqUp /></span>)}</span>
                            </div>
                            <p className={`duration-300 font-Balsamiq font-medium text-xs xs:text-sm sm:text-base text-white opacity-80 leading-6 overflow-hidden max-w-[700px]  ${open === index ? "max-h-28 sm:max-h-24 -mt-4 pb-4" : "max-h-0"}`}>{item.content}</p>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq