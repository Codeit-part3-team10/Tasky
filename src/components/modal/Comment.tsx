import { Avatar } from "../ui/avatar";

const Comment = () => {
  return(
    <div className="flex gap-2.5">
      <Avatar size="m" nickname="C" color="yellow" />
      <div className="flex flex-col gap-1.5 mt-2">
        <div className="flex items-center gap-2">
          <p className="font-Pretendard text-sm font-semibold text-black-333236">정만철</p>
          <p className="font-Pretendard text-xs text-gray-9FA6B2">2022.12.27 14:00</p>
        </div>
        <p className="font-Pretendard text-sm text-black-333236">오늘안에 CCC 까지 만들 수 있을까요?</p>
        <div className="mt-1.5 flex gap-3">
          <button className="font-Pretendard text-xs text-gray-9FA6B2 underline">수정</button>
          <button className="font-Pretendard text-xs text-gray-9FA6B2 underline">삭제</button>
        </div>
      </div>
    </div>
  )
};

export default Comment;
