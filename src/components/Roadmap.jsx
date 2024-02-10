import React from 'react';
import heloImg from '../assets/images/roadmapaeroplane.png';
import TimelineDashed from '../assets/images/roadmaplinecenter.png';
import TimelineDashed2 from '../assets/images/roadmaplinecenter2nd.png';
import TimeChris from '../assets/images/roadmaptree1.png';
import Timedinechris from '../assets/images/roadmaptree2.png';
import Timegrass from '../assets/images/roadmaptree3.png';

const Roadmap = () => {
    return (
        <div className='bg-[#09655A] -mt-2 relative overflow-hidden'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div id='Roadmap' className=' sm:pt-0 pt-[35px] pb-8 sm:pb-[64px] relative'>
                    <h2 data-aos="fade-up" data-aos-duration="1500" className='sm:text-[64px] text-[40px] font-normal text-white text-center font-Chewy leading-[132%] relative mb-10'>Roadmap</h2>
                    <div className="container max-w-[768px] lg:max-w-[1000px] relative lg:mt-[83px]">
                        <div className='relative flex flex-col items-center justify-between lg:flex-row max-md:ml-10 max-sm:gap-5 z-[1]'>
                            <div className='flex items-center max-sm:gap-5 max-sm:flex-col'>
                                <h2 data-aos="fade-up" data-aos-duration="1500" className='text-[100px] sm:text-[150px] md:text-[200px] font-normal sm:leading-[130%] leading-[70%] font-Chewy text-[#FBA11D] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)]'>01 </h2>
                                <ol data-aos="fade-up" data-aos-duration="1500" className='flex flex-col gap-4 list-disc pl-[30px]'>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Launch $DINO & Website & Social Media.</li>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Building the community.</li>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Marketing Phase 1.</li>
                                </ol>
                            </div>
                            <img data-aos="fade-up" data-aos-duration="1500" src={heloImg} alt="heloImg" className='md:ml-20 max-lg:-mt-6 max-sm:w-[50%]' />
                        </div>
                        <div className='relative z-10 flex items-center max-md:mt-4 md:items-end lg:items-end md:mt-[155px] max-md:ml-10 max-lg:ml-16 lg:mt-[200px] flex-col lg:flex-row max-sm:gap-5'>
                            <div className='flex order-2 lg:order-1 max-sm:justify-center'><img data-aos="fade-up" data-aos-duration="1500" src={TimeChris} alt="TimeChris" className='md:mr-20 max-sm:w-[50%]' /></div>
                            <div className='flex items-center order-1 max-sm:gap-8 max-sm:flex-col lg:order-2'>
                                <h2 data-aos="fade-up" data-aos-duration="1500" className='text-[100px] sm:text-[150px] md:text-[200px] leading-[100%] sm:leading-[145%] font-Chewy font-normal text-[#8EC627] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] -mb-[30px]'>02</h2>
                                <ol data-aos="fade-up" data-aos-duration="1500" className='flex flex-col gap-4 list-disc pl-[30px]'>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>CoinGecko & Coinmarketcap listing.</li>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Introduction to Buyback & Burning mechanism</li>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Marketing Phase 2.</li>
                                </ol>
                            </div>
                        </div>
                        <div className='relative z-10 flex items-center lg:items-end flex-col lg:flex-row sm:justify-between mt-10 sm:mt-8 md:mt-[70px] max-sm:gap-5 max-sm:ml-10'>
                            <div className='flex items-center -mb-8 max-sm:gap-5 max-sm:flex-col'>
                                <h2 data-aos="fade-up" data-aos-duration="1500" className='text-[105px] sm:text-[155px] md:text-[220.95px] font-normal font-Chewy text-[#D45B07] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] leading-[100%] sm:leading-[131%]'>03</h2>
                                <ol data-aos="fade-up" data-aos-duration="1500" className='flex flex-col gap-4 list-disc pl-[30px]'>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Utility and Usecase Introduction.</li>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>CEX Listings</li>
                                    <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Marketing Phase 3.</li>
                                </ol>
                            </div>
                            <img data-aos="fade-up" data-aos-duration="1500" src={Timedinechris} alt="Timedinechris" className='max-sm:w-[50%] max-sm:mt-7' />
                        </div>
                        <div className='relative z-10 mt-8 md:mt-[100px] lg:mt-[214px] max-sm:pb-0 max-lg:pb-20 flex max-md:ml-10 max-sm:justify-center md:justify-center'>
                            <div className='flex flex-col items-center md:items-start'>
                                <div className='flex items-center max-sm:gap-5 max-sm:flex-col'>
                                    <h2 data-aos="fade-up" data-aos-duration="1500" className='text-[100px] sm:text-[150px] md:text-[200px] font-Chewy font-normal text-[#23AAAC] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] leading-[100%] sm:leading-[145%]'>04</h2>
                                    <ol data-aos="fade-up" data-aos-duration="1500" className='flex flex-col gap-4 list-disc pl-[30px]'>
                                        <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Staking Introduction.</li>
                                        <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>DINO NFT Collection.</li>
                                        <li className='text-base sm:text-lg md:text-xl font-normal font-Balsamiq text-white leading-[121%]'>Marketing Phase 4</li>
                                    </ol>
                                </div>
                                <img data-aos="fade-up" data-aos-duration="1500" src={Timegrass} alt="Timegrass" className='lg:mt-10 md:-translate-y-4 max-sm:mt-5 max-sm:w-[50%]' />
                            </div>
                        </div>
                        <img src={TimelineDashed} alt="TimelineDashed" className='absolute max-lg:hidden w-full top-[111px] left-[7%] h-[90%] z-0' />
                        <img src={TimelineDashed2} alt="TimelineDashed" className='absolute hidden md:block lg:hidden w-full top-[111px] left-[7%] h-[90%] z-0' />
                        <div className='md:hidden block absolute left-5 top-0 bottom-0 w-3 border-l-[11px] border-dashed border-[#0a4740]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;