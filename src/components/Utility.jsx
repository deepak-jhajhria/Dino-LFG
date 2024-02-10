import React from 'react';
import dino1 from '../assets/images/utilitydino1.png';
import dino2 from '../assets/images/utilitydino2.png';
import Tree from '../assets/images/utilitytree.png';
import toplayer from '../assets/images/utilitytopshadow.png';
import bottomlayer from '../assets/images/utilitybottomshadow.png';

const Utility = () => {
    return (
        <div className='relative overflow-hidden xl:pb-[466px] md:pb-[300px] sm:pb-[190px] xl:pt-[218px] sm:pt-[150px] pt-[60px] pb-[100px] xs:pb-[150px] bg-[#0A4740]'>
            <div className='container max-w-[1038px] relative z-10'>
                <h2 className='font-Chewy sm:text-[64px] text-[35px] font-normal text-white text-center leading-[132%]'>Utility and Usecase</h2>
                <div className='relative z-10 xl:mt-[158px] max-lg:overflow-hidden lg:mt-[100px] md:mt-[70px] mt-[30px] rounded-[20px] border border-solid lg:h-[266px] border-white bg-[#09655A] lg:py-[62px] pt-[40px] lg:pl-[39px] lg:pr-[26px] px-[20px] flex lg:justify-between lg:flex-row flex-col'>
                    <div data-aos="fade-right">
                        <p className='max-w-[681px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-normal text-white leading-[119%] font-Balsamiq'>We are going to work hard in otder to add <span className='text-[#8EC627]'>$</span>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#FB5352]'>O</span> to main platforms as a form of payment</p>
                        <p className='max-w-[695px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-normal text-white mt-[28px] leading-[120%] font-Balsamiq'>You will be able to buy a lot of things with <span className='text-[#8EC627]'>$</span>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#FB5352]'>O</span></p></div>
                    <div className='flex max-lg:justify-center'><img src={dino1} alt="images" className=' lg:absolute max-lg:ml right-0 -top-[67px] sm:max-w-[253px] max-w-[160px] lg:mt-0 mt-6 lg:h-[332px] w-full' /></div>
                </div>
                <div className='relative max-lg:overflow-hidden z-20 lg:mt-[125px] sm:mt-16 mt-[20px] rounded-[20px] border border-solid bg-[#09655A] lg:py-[95px] pt-[40px] lg:pr-[27px] lg:pl-0 px-5 lg:h-[266px] border-white flex lg:justify-between lg:flex-row flex-col-reverse lg:items-center '>
                    <div className='flex max-lg:justify-center'><img src={dino2} alt="crocoWithCycle" className='sm:max-w-[267px] utility_croco1 max-w-[160px] lg:h-[334px] lg:translate-y-[-35px] lg:mt-0 mt-7 lg:ml-[-6px]' /></div>
                    <div data-aos="fade-left" className=''>
                        <p className='sm:text-[32px] text-[25px] font-normal lg:text-end text-center text-white leading-[119%]  font-Balsamiq'>We are going to have staking and buyback/ burning mechanism</p>
                    </div>
                </div>
            </div>
            <img src={Tree} alt="tree" className='lg:max-w-[320px] max-w-[200px] top-[40%] w-full absolute right-0 bottom-0' />
            <img src={toplayer} alt="images" className='absolute top-0 left-0 right-0 w-full' />
            <img src={bottomlayer} alt="image" className='absolute left-0 right-0 bottom-[-13px] w-full' />
        </div>
    )
}

export default Utility