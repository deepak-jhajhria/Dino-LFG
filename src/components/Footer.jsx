import { DiscordFooter, InstaFooter, TwitterFooter } from "./Icons"
import footerbottom from '../assets/images/footerbottom.webp'
import dino from '../assets/images/footerdino.webp'
const Footer = () => {
    return (
        <div className=" bg-[#0A4740] w-full relative -mt-[1px]">
            <div className="w-full mx-auto max-w-[376px] flex flex-col items-center justify-center gap-4 md:gap-[33px] lg:-mb-[72px] relative z-10">
                <h2 className=' font-Lucky text-[65px] sm:text-[80.366px] text-center leading-[95%] font-normal text-[#FBA11D] drop-shadow-[0px_1.337px_0px_#000] mt-[50px] sm:mt-[130px] md:mt-[180px] lg:mt-[213px]'>
                    D
                    <span className='text-[#23AAAC]'>i</span>
                    <span className='text-[#D45B07]'>n</span>
                    <span className='text-[#8EC627]'>o</span>
                    <span className='text-[#FCCA2B]'>L</span>
                    <span className='text-[#8F78D2]'>F</span>
                    <span className='text-[#8EC627]'>G</span>
                </h2>
                <p className='text-[14px] font-normal font-Balsamiq text-center text-white max-w-[376px] leading-[122%]'>Sed tempus pretium est, vestibulum dapibus mauris viverra id. Curabitur feugiat porta lorem,  </p>
                <div className='flex items-center gap-2'>
                    <a href="http://twitter.com" target="_blank"><TwitterFooter /></a>
                    <a href="http://twitter.com" target="_blank"><DiscordFooter /></a>
                    <a href="http://twitter.com" target="_blank"><InstaFooter /></a>
                </div>
            </div>
            <img className="w-full max-sm:min-h-[150px]" src={footerbottom} alt="image" />
            <img className="absolute bottom-4 right-20 max-lg:w-[16%] animate-cycle" src={dino} alt="image" />
        </div>
    )
}

export default Footer
