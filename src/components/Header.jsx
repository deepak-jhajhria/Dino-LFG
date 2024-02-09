import diyno from '../assets/images/diyno.webp'
import aeroplane from '../assets/images/aeroplane.webp'
import diyno2 from '../assets/images/diyno2.webp'
import headerbottombg from '../assets/images/headerbottombg.webp'
import shadow from '../assets/images/shadowsky.webp'
import bottomshadow from '../assets/images/bottomshadw.webp'
export const Header = () => {
    return (
        <header className="bg-[url(./assets/images/headerbg.webp)] bg-cover bg-center w-full min-h-[730px] sm:min-h-[850px] relative overflow-hidden -top-[100px]">
            <div className='grid grid-cols-1 sm:grid-cols-2 container max-w-[1040px] z-[3] mt-[140px] sm:mt-[178px] relative gap-5'>
                <div className='flex items-center md:items-end max-lg:justify-center'>
                    <img className='w-full max-w-[250px] md:max-w-[394px] max-h-[170px] md:max-h-[240px]' src={aeroplane} alt="aeroplane" />
                </div>
                <h1 className='font-Lucky text-[100px] sm:text-[120px] md:text-[150px] lg:text-[175.64px] font-normal leading-[106.13px] sm:leading-[126.13px] md:leading-[146.13px] lg:leading-[166.13px]  ml-3 sm:ml-6 flex flex-col text-center uppercase drop-shadow-[0px_6px_0px_#000000]'><span><span className='text-[#FBA11D] duration-300 hover:text-[#D45B07]'>D</span><span className=' text-[#23AAAC] duration-300 hover:text-[#8EC627]'>i</span><span className=' text-[#D45B07] duration-300 hover:text-[duration-300 hover:text-[#D45B07]]'>n</span><span className='text-[#8EC627]'>o</span></span><span><span className='text-[#8EC627]'>L</span><span className='text-[#FCCA2B]'>F</span><span className=' text-[#8F78D2]'>G</span></span></h1>
            </div>
            <img className='absolute bottom-[12%] sm:bottom-[11%] md:bottom-[14%] lg:bottom-[20%] xl:bottom-[20%] right-[38%] z-[1] max-w-[60px] w-full  sm:max-w-[90px] md:max-w-[111px] lg:max-w-[131px]' src={diyno} alt="" />
            <img className='absolute bottom-[5%] sm:bottom-[9%] md:bottom-[11%] xl:bottom-[20%] z-[1] right-10 md:right-20 max-w-[80px] sm:max-w-[120px] w-full lg:max-w-[211px]' src={diyno2} alt="" />
            <div className='absolute left-0 right-0 z-0 -bottom-6'><img className='w-full max-md:min-h-[260px]' src={headerbottombg} alt="" /></div>
            <div className='absolute bottom-0 -right-2 -left-10'><img className='w-full min-h-[40px] md:min-h-[66px] xl:min-h-[134px]' src={bottomshadow} alt="" /></div>
            {/* <div className='absolute right-0'><img className=' opacity-10' src={shadow} alt="" /></div> */}
        </header>
    )
}
