import { ButtonSvg, Discord, Insta, NavLinks, Twitter } from "./Icons"
import { Spin as Hamburger } from 'hamburger-react'
import { useOverflowHidden } from "./Hooks";

export const Nav = () => {
  const [isOpen, setOpen] = useOverflowHidden(false);

  return (
    <nav className="px-2 mt-5 sm:mt-7">
      <div className="container px-0 max-w-[1140px] flex items-center justify-between bg-white rounded-full relative z-10 border-black border-b-4">
        <a href="#" className='font-Lucky text-3xl sm:text-4xl md:text-[39.13px] group font-normal leading-[37.13px] text-[#FBA11D] ml-3 sm:ml-6 drop-shadow-[0px_1.3px_0px_#000000]'>
          <span className="duration-300 group-hover:text-[#8EC627]">D</span>
          <span className=' text-[#23AAAC] duration-300 group-hover:text-[#D45B07]'>i</span>
          <span className=' text-[#D45B07] group-hover:text-[#8EC627]'>n</span>
          <span className='text-[#8EC627] group-hover:text-[#FCCA2B]'>o</span>
          <span className='text-[#FCCA2B] group-hover:text-[#8F78D2]'>L</span>
          <span className='text-[#8F78D2] duration-300 group-hover:text-[#8EC627]'>F</span>
          <span className=' text-[#8EC627] group-hover:text-[#D45B07]'>G</span>
        </a>
        <div className="flex items-center justify-between lg:w-[65%] sm:mr-2 l-3">
          <ul className={`${isOpen ? "right-0" : "-right-full"} flex items-center gap-7 mobileview`}>
            <li><a href="#about" onClick={() => setOpen(false)} className="relative text-lg font-normal text-black duration-500 navlinks group font-Chewy">About<NavLinks /></a></li>
            <li><a href="#teko" onClick={() => setOpen(false)} className="relative text-lg font-normal text-black duration-300 navlinks group font-Chewy">Tokenomic<NavLinks /></a></li>
            <li><a href="#roadmap" onClick={() => setOpen(false)} className="relative text-lg font-normal text-black duration-300 navlinks group font-Chewy">Roadmap <NavLinks /></a></li>
            <li><a href="#faq" onClick={() => setOpen(false)} className="relative text-lg font-normal text-black duration-300 navlinks group font-Chewy">FAQ <NavLinks /></a></li>
            <div className='flex items-center gap-2 lg:hidden'>
              <a href="http://twitter.com" target="_blank"><Twitter /></a>
              <a href="http://twitter.com" target="_blank"><Discord /></a>
              <a href="http://twitter.com" target="_blank"><Insta /></a>
            </div>
          </ul>
          <div className="flex items-center gap-3 pt-1 sm:pb-1">
            <div className='flex items-center gap-2 max-lg:hidden'>
              <a href="http://twitter.com" target="_blank"><Twitter /></a>
              <a href="http://twitter.com" target="_blank"><Discord /></a>
              <a href="http://twitter.com" target="_blank"><Insta /></a>
            </div>
            <button className="relative px-5 pt-3 pb-5 text-sm font-normal text-black duration-500 hover:scale-90 md:text-lg font-Chewy sm:px-7 md:px-9 sm:text-base text-nowrap hover:text-white "><span className="absolute left-0 top-1 -z-10"><ButtonSvg /></span>Join Now</button>
          </div>
          <div className='relative z-[110] mx-2 sm:mx-3 lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="sm" direction='right' duration={0.5} color='#FBA11D' />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav