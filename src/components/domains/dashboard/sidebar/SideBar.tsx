import Image from "next/image";
import MenuItem from "./MenuItem";
import { FiPlusSquare } from "react-icons/fi";

const tempData = ['비브리지', '코드잇', '3분기 계획', '회의록', '중요 문서함'];

const SideBar = () => {
  return(
    <div className="w-[67px] md:w-40 lg:w-[300px] min-h-screen flex flex-col gap-14 pt-5 bg-white border-r border-gray-D9D9D9">
      <div className="relative px-6 hidden md:block">
        <Image src='/logo_large.svg' alt="로고" width={109} height={34}/>
      </div>
      <div className="relative px-6 md:hidden">
        <Image src='/logo_small.svg' alt="로고" width={23.6} height={27.1}/>
      </div>
      <div className="w-[67px] md:w-40 lg:w-[300px] flex flex-col gap-[18px]">
        <div className="flex items-center w-full justify-between px-6">
          <p className="text-xs font-bold text-gray-787486 hidden md:block">Dash Boards</p>
          <button className="w-5 h-5 flex items-center justify-center"><FiPlusSquare className=" text-gray-787486"/></button>
        </div>
        <ul className="px-3 flex flex-col gap-[3px] justify-center">
          {tempData.map((data,index) => <MenuItem key={data} link={index+1}>{data}</MenuItem>)}
        </ul>
      </div>
    </div>
  )
};

export default SideBar;
