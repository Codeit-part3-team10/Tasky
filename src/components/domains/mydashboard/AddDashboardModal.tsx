import * as React from 'react';
import { cn } from '@/libs/utils';
import DashboardCardTitle from './DashboaordCardTitle';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn('h-[42px] px-4 rounded-md border border-gray-D9D9D9 text-sm text-black-333236', className)}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };

export default function AddDashboardModal() {
  return (
    <div className="z-10 w-full h-screen fixed top-0 left-0 bg-black-000000 bg-opacity-70 transition-opacity">
      <div className="w-full h-full flex justify-center items-center px-6">
        <div className="max-w-[540px] w-full py-7 px-5 md:pt-8 md:pb-7 md:px-7 rounded-lg bg-white">
          <DashboardCardTitle className="mb-6 md:mb-8">새로운 대시보드</DashboardCardTitle>
          <form className="mb-6 md:mb-7">
            <div className="flex flex-col gap-2.5 md:gap-3 mb-6 md:mb-7">
              <label className="text-base md:text-lg font-medium text-black-333236">대시보드 이름</label>
              <Input type="text" />
            </div>

            <RadioGroup defaultValue="green" className="flex gap-2">
              <RadioGroupItem value="green" color="green" />
              <RadioGroupItem value="purple" color="purple" />
              <RadioGroupItem value="orange" color="orange" />
              <RadioGroupItem value="blue" color="blue" />
              <RadioGroupItem value="pink" color="pink" />
            </RadioGroup>
          </form>

          <div className="flex justify-between md:justify-end gap-[11px] md:gap-3">
            <Button size="modal" text="modal" className="flex-1 h-[42px]">
              취소
            </Button>
            <Button variant="violet" size="modal" text="modal" className="flex-1 h-[42px]">
              생성
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}