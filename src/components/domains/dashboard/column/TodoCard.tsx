import { Avatar } from '@/components/ui/avatar';
import { Chip } from '@/components/ui/tag';
import { Card } from '@/types/DashboardType';
import Image from 'next/image';
import { GoCalendar } from 'react-icons/go';

const colorArray: Array<'orange' | 'pink' | 'blue' | 'green'> = ['orange', 'pink', 'blue', 'green'];

const TodoCard = ({ card }: { card: Card }) => {
  return (
    <div className="px-3 py-3 md:py-5 md:px-5 border rounded-md border-gray-D9D9D9 w-[284px] md:w-auto lg:w-[314px] h-fit flex flex-col gap-2.5 items-center md:flex-row md:gap-5 lg:flex-col lg:gap-3">
      {card.imageUrl && (
        <div className="relative flex-shrink-0 mb-0.5 rounded-md w-[260px] h-[152px] md:w-[91px] md:h-[53px] lg:w-[274px] lg:h-40">
          <Image src={card.imageUrl} alt="todo 이미지" fill />
        </div>
      )}
      <div className="flex flex-col gap-1.5 md:gap-2.5 w-full">
        <p className="font-Pretendard font-medium text-black-333236 flex">{card.title}</p>
        <div className="flex flex-col gap-1.5 md:flex-row md:gap-4 lg:flex-col lg:gap-2.5 lg:w-auto">
          <div className="flex gap-1.5">
            {card.tags.slice(0, 2).map((tag, idx) => (
              <Chip variant="basic" size="large" color={colorArray[idx % 4]} key={idx}>
                {tag}
              </Chip>
            ))}
          </div>
          <div className="flex w-[260px] md:w-auto md:flex-grow lg:w-[274px] justify-between">
            <div className="flex gap-1.5 items-center text-gray-787486 text-[10px] md:text-xs">
              <span>
                <GoCalendar className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
              </span>
              <p>{card.dueDate}</p>
            </div>
            <Avatar nickname={card.assignee?.nickname} profileImageUrl={card.assignee?.profileImageUrl} size="xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
