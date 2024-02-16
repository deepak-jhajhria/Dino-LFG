import dino1 from '../assets/images/utilitydino1.webp';
import dino2 from '../assets/images/utilitydino2.webp';
import Tree from '../assets/images/utilitytree.webp';
import toplayer from '../assets/images/utilitytopshadow.webp';
import bottomlayer from '../assets/images/utilitybottomshadow.webp';

const Utility = () => {
    return (
        <div className='relative overflow-hidden bg-[#0A4740]'>
            <img src={toplayer} alt="images" className='w-full' />
            <div className='container max-w-[1038px] relative z-10'>
                <h2 data-aos="fade-up" data-aos-duration="1500" className='font-Chewy sm:text-[64px] text-[40px] font-normal text-white text-center leading-[132%] mt-5 sm:mt-10 md:mt-[70px]'>Utility and Usecase</h2>
                <div className='relative z-10 xl:mt-[158px] max-lg:overflow-hidden lg:mt-[100px] md:mt-[70px] mt-[30px] rounded-[20px] border border-solid lg:h-[266px] border-white bg-[#09655A] lg:py-[62px] pt-[40px] lg:pl-[39px] lg:pr-[26px] px-[20px] flex lg:justify-between lg:flex-row flex-col'>
                    <>
                        <p data-aos="fade-up" data-aos-duration="1500" className='max-w-[681px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-2xl font-normal text-white leading-[119%] font-Balsamiq'>We are going to work hard in otder to add <span className='text-[#8EC627]'>$</span>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#FB5352]'>O</span> to main platforms as a form of payment</p>
                        <p data-aos="fade-up" data-aos-duration="1500" className='max-w-[695px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-2xl font-normal text-white mt-[28px] leading-[120%] font-Balsamiq'>You will be able to buy a lot of things with <span className='text-[#8EC627]'>$</span>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#FB5352]'>O</span></p></>
                    <div className='flex max-lg:justify-center'><img data-aos="fade-up" data-aos-duration="1500" src={dino1} alt="images" className=' lg:absolute max-lg:ml right-0 -top-[67px] sm:max-w-[253px] max-w-[160px] lg:mt-0 mt-6 lg:h-[332px] w-full' /></div>
                </div>
                <div className='relative max-lg:overflow-hidden z-20 lg:mt-[125px] sm:mt-16 mt-[20px] rounded-[20px] border border-solid bg-[#09655A] lg:py-[95px] pt-[40px] lg:pr-[27px] lg:pl-0 px-5 lg:h-[266px] border-white flex lg:justify-between lg:flex-row flex-col-reverse lg:items-center '>
                    <div data-aos="fade-up" data-aos-duration="1500" className='flex max-lg:justify-center'><img src={dino2} alt="crocoWithCycle" className='sm:max-w-[267px] utility_croco1 max-w-[160px] lg:h-[334px] lg:translate-y-[-35px] lg:mt-0 mt-7 lg:ml-[-6px]' /></div>
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <p className='sm:text-[32px] text-2xl font-normal lg:text-end text-center text-white leading-[119%]  font-Balsamiq'>We are going to have staking and buyback/ burning mechanism</p>
                    </div>
                </div>
            </div>
            <img src={Tree} alt="tree" className='lg:max-w-[320px] max-w-[200px] top-[40%] w-full absolute right-0 bottom-0' />
            <img src={bottomlayer} alt="image" className='w-full translate-y-2 mt-12 sm:mt-20 md:mt-[120px] lg:mt-[168px]' />
        </div>
    )
}

export default Utility