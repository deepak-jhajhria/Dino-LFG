import shadow from "../assets/images/shadowaboutsec.png";
import shadow2 from "../assets/images/shadowtekosecbottom.png";
import tree1 from "../assets/images/treeleft1.webp";
import tree2 from "../assets/images/treeleft2.webp";
import tree3 from "../assets/images/treeleft3.webp";
import tree4 from "../assets/images/treeleft4.webp";
import panda from "../assets/images/pandateko.webp";
import panda2 from "../assets/images/tekopanda.png";
import { TekoFirst, TekoFirstLine, TekoFive, TekoFiveLine, TekoFourth, TekoFourthLine, TekoSecond, TekoSecondLine, TekoThird, TekoThirdLine } from "./Icons";

const Tokenomics = () => {
    return (
        <div className="relative bg-[#0A4740] min-h-[450px] sm:min-h-[700px] md:min-h-[1000px] lg:min-h-[1217px] overflow-hidden">
            <img className="absolute right-0 -mt-1 min-h-[17%]" src={shadow} alt="image" />
            <img className="absolute bottom-0 right-0 -mt-1 min-h-[17%]" src={shadow2} alt="image" />
            <img className="absolute bottom-0 left-0 -mt-1 w-[21%]" src={tree1} alt="image" />
            <img className="absolute bottom-16 left-[30%] max-md:bottom-3 -mt-1 w-[8%] sm:w-[5.5%]" src={tree2} alt="image" />
            <img className="absolute bottom-0 right-[40%] -mt-1 w-[8%] sm:w-[5.5%]" src={tree3} alt="image" />
            <img className="absolute bottom-0 right-[8%] sm:right-[10%] -mt-1 w-[20%] sm:w-[12%]" src={tree4} alt="image" />
            <img className="absolute bottom-0 left-0 -mt-1 translate-y-[40%] w-[30%] sm:w-[26%]" src={panda} alt="image" />
            <div className="container relative z-[1] max-w-[1147px] pt-10 sm:pt-[100px] md:pt-[150px] lg:pt-[246px]">
                <h2 className="text-white font-normal font-Chewy sm:text-[64px] text-[35px] leading-[83px] text-center">Tokenomics</h2>
                <div className="relative flex items-center justify-center  sm:mt-12 md:mt-16 lg:mt-20 max-w-[133px] mx-auto">
                    <img className=" w-full max-w-[80px] sm:max-w-[113px] md:max-w-[133px]" src={panda2} alt="images" />

                    <div className="absolute -left-[39px] sm:-left-[117px] md:-left-[231px] top-[77px] sm:top-[71px] md:top-[73px] z-[5] group cursor-pointer"><TekoFirst />
                        <div className="flex flex-col gap-[5px] absolute -left-[48px] sm:-left-[80px] sm:-top-20 -top-10 xl:top-12 xl:-left-[280px]">
                            <p className="text-[#FBA11D] leading-[119%] sm:text-3xl lg:text-[32px] text-sm font-normal font-Balsamiq">333,333,333</p>
                            <p className="text-white leading-[138%] font-normal text-base sm:text-2xl text-right font-Balsamiq">Supply </p>
                        </div>
                        <span className="absolute -top-2 -left-7 xl:top-12 xl:-left-[50px]"><TekoFirstLine /></span>
                    </div>

                    <div className="absolute -left-[17px] sm:-left-[80px] md:-left-[172px] top-[102px] sm:top-[115px] md:top-[144px] z-[4] group cursor-pointer"><TekoSecond />
                        <div className="flex flex-col gap-[5px] absolute -left-[63px] top-20 sm:top-36 sm:-left-[110px] md:-left-[112px] md:top-64 lg:-left-[220px] lg:top-48">
                            <p className="text-[#23AAAC] max-w-[217px] text-nowrap leading-[119%] sm:text-3xl lg:text-[32px] text-sm font-normal font-Balsamiq"> 95% Uniswa </p>
                            <p className="text-[#23AAAC] max-w-[217px] text-nowrap text-right leading-[119%] sm:text-3xl lg:text-[32px] text-sm font-normal font-Balsamiq"> 5% Marketing </p>
                            <p className="text-white max-w-[217px] text-right leading-[119%] sm:text-3xl lg:text-[32px] text-sm  font-normal font-Balsamiq"> Allocation</p>
                        </div>
                        <span className="absolute top-12 -left-3 sm:-left-3 sm:top-20 md:top-36 lg:top-48 lg:left-4"><TekoSecondLine /></span>
                    </div>

                    <div className="absolute top-[117px] sm:top-[141px] md:top-[186px] z-[3] group cursor-pointer"><TekoThird />
                        <p className="text-[#D45B07] leading-[119%] sm:text-3xl lg:text-[32px] text-sm absolute top-24 sm:top-44 text-nowrap left-2 sm:left-10 font-normal font-Balsamiq md:top-[270px] md:left-8">No Tax</p>
                        <span className="absolute top-[70px] sm:top-32 md:top-[205px] left-8 sm:left-16"><TekoThirdLine /></span>
                    </div>

                    <div className="absolute -right-[17px] sm:-right-[81px] md:-right-[172px] top-[102px] sm:top-[114px] md:top-[144px] z-[2] group cursor-pointer"><TekoFourth />
                        <p className="text-[#FB5352] leading-[119%] sm:text-3xl lg:text-[32px] absolute -right-[42px] sm:-right-[84px] top-20 sm:top-36 md:-right-[112px] md:top-64 lg:-right-[250px] lg:top-[240px] text-sm font-normal font-Balsamiq flex flex-col md:flex-row gap-2">No Mint<span>Function</span></p>
                        <span className="absolute top-12 -right-3 sm:-right-3 sm:top-20 md:top-36 lg:top-48 lg:right-4"><TekoFourthLine /></span>
                    </div>

                    <div className="absolute -right-[39px] sm:-right-[119px] md:-right-[231px] top-[77px] sm:top-[71px] md:top-[73px] z-[1] cursor-pointer group"><TekoFive />
                        <p className="text-[#8EC627] leading-[119%] sm:text-3xl lg:text-[32px] text-sm max-w-[87px] sm:max-w-[200px] font-normal font-Balsamiq absolute -right-[51px] -top-10 sm:-right-[90px] sm:-top-20 xl:top-12 xl:-right-[300px]">Liquidity lock for 1 year</p>
                        <span className="absolute -top-2 -right-7 xl:top-12 xl:-right-[50px]"><TekoFiveLine /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;