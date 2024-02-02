import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <div className="w-fit mx-auto flex flex-col items-center justify-center text-black-171717">
      <div className="relative w-[287px] h-[168px] md:w-[537.25px] md:h-[314.76px] lg:w-[722px] lg:h-[422.76px] mt-[42px] md:mt-[94px] mb-[26px] md:mb-12">
        <Image
          src="/landing.jpg"
          fill
          sizes="(min-width: 768px) 537.25px, (min-width: 1024px) 722px, 287px"
          alt="hero_img"
          priority
        />
      </div>

      <div className="font-bold text-center md:flex md:items-center md:gap-6 lg:gap-7">
        <div className="text-[40px] md:font-bold md:text-[56px] lg:text-[76px] -tracking-widest">새로운 일정 관리</div>
        <div className="text-[42px] md:font-bold md:text-[70px] lg:text-[90px] text-violet-5534DA">Taskify</div>
      </div>

      <div>
        <Button className="mt-16 py-3 w-[235px] bg-violet-5534DA text-sm md:mt-20 md:w-[280px] md:text-base lg:mt-24 text-white font-medium">
          <Link href="/login">로그인하기</Link>
        </Button>
      </div>
    </div>
  );
}
