import React from 'react';
import heloImg from '../assets/images/roadmapaeroplane.png';
import TimelineDashed from '../assets/images/roadmaplinecenter.png';
import TimeChris from '../assets/images/roadmaptree1.png';
import Timedinechris from '../assets/images/roadmaptree2.png';
import Timegrass from '../assets/images/roadmaptree3.png';

const Roadmap = () => {
    return (
        <div className='bg-[#09655A] -mt-2 relative overflow-hidden'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div id='Roadmap' className=' sm:pt-0 pt-[45px] pb-[80px] relative'>
                    <h2 className='sm:text-[64px] text-[40px] font-normal text-white text-center font-Chewy leading-[83.63px] md:mb-[97px]leading-[132%] relative z-10 mb-10'>Roadmap</h2>
                    <div className="container md:max-w-[768px] lg:max-w-[1000px] relative lg:mt-[90px]">
                        <div data-aos="zoom-in" className='relative z-10 flex flex-col justify-between lg:flex-row sm:items-center'>
                            <div className='flex items-center'>
                                <h2 className='text-[200px] font-normal sm:leading-[130%] leading-[70%] font-Chewy text-[#FBA11D] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)]'>01 </h2>
                                <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Launch $DINO & Website & Social Media.</li>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Building the community.</li>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Marketing Phase 1.</li>
                                </ol>
                            </div>
                            <img src={heloImg} alt="heloImg" className='max-lg:-mt-6' />
                        </div>
                        <div data-aos="zoom-in" className='relative z-10 flex items-start lg:items-end md:mt-[140px] lg:mt-[200px] flex-col lg:flex-row'>
                            <img src={TimeChris} alt="TimeChris" className='order-2 lg:order-1 max-lg:ml-10' />
                            <div className='flex items-center order-1 lg:order-2'>
                                <h2 className='text-[200px] leading-[100%] sm:leading-[145%] font-Chewy font-normal text-[#8EC627] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] -mb-[30px]'>02</h2>
                                <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>CoinGecko & Coinmarketcap listing.</li>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Introduction to Buyback & Burning mechanism</li>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Marketing Phase 2.</li>
                                </ol>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className='relative z-10 flex items-end justify-between mt-[70px]'>
                            <div className='flex items-center -mb-8'>
                                <h2 className='text-[220.95px] font-normal font-Chewy text-[#D45B07] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] leading-[100%] sm:leading-[131%]'>03</h2>
                                <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Utility and Usecase Introduction.</li>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>CEX Listings</li>
                                    <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Marketing Phase 3.</li>
                                </ol>
                            </div>
                            <img src={Timedinechris} alt="Timedinechris" className='' />
                        </div>
                        <div data-aos="zoom-in" className='relative z-10 mt-[222px] flex justify-center'>
                            <div className='flex flex-col items-start'>
                                <div className='flex items-center'>
                                    <h2 className='text-[200px] font-Chewy font-normal text-[#23AAAC] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] leading-[100%] sm:leading-[145%]'>04</h2>
                                    <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                                        <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Staking Introduction.</li>
                                        <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>DINO NFT Collection.</li>
                                        <li className='text-xl font-normal font-Balsamiq text-white leading-[121%]'>Marketing Phase 4</li>
                                    </ol>
                                </div>
                                <img src={Timegrass} alt="Timegrass" className='mt-10' />
                            </div>
                        </div>
                        <img src={TimelineDashed} alt="TimelineDashed" className='absolute w-full top-[111px] left-[7%] h-[90%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;