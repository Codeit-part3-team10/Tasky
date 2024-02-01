import PlusChip from "./PlusChip";

const AddColumnButton = () => {
  return(
    <button className="flex justify-center ml-[9px] mr-[15px] my-3 md:mx-5 md:my-5 lg:mt-[68px] px-[60px] py-5 md:px-[180px] lg:px-[86px] md:py-6 bg-white rounded-md border border-gray-D9D9D9 h-fit">
      <div className="flex items-center gap-3 w-fit">
        <p className="font-Pretendard text-base md:text-lg font-bold whitespace-nowrap text-black-333236 leading-none">새로운 컬럼 추가하기</p>
        <PlusChip />
      </div>
    </button>
  )
};

export default AddColumnButton;
