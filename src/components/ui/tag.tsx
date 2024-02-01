import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const tagVariants = cva(
  `inline-flex items-center text-[10px] md:text-xs font-normal whitespace-nowrap`,
  {
    variants: {
      variant: {
        primary: `gap-1 rounded-full px-2 py-1 bg-violet-8% text-violet-5534DA before:content-[''] before:w-1.5 before:h-1.5 before:bg-violet-5534DA before:rounded-full`,
        basic: 'rounded px-1.5 py-1',
      },
      color: {
        orange: 'bg-[#F9EEE3] text-[#D58D49]',
        green: 'bg-[#E7F7DB] text-[#86D549]',
        pink: 'bg-[#F7DBF0] text-[#D549B6]',
        blue: 'bg-[#DBE6F7] text-[#4981D5]',
      },
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  variant: 'primary' | 'basic';
  color?: 'orange' | 'green' | 'pink' | 'blue';
}

function Chip({ className, color, ...props }: TagProps) {
  return <div className={cn(tagVariants({ color }), className)} {...props} />;
}

export { Chip, tagVariants };
