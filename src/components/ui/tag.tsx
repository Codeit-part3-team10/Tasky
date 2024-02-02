import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const tagVariants = cva(`inline-flex items-center font-normal`, {
  variants: {
    variant: {
      primary: `gap-1 rounded-full px-2 py-1 bg-[#F1EFFD] text-[#5534DA] before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#5534DA] before:rounded-full`,
      basic: 'rounded px-1.5 py-1',
    },
    color: {
      orange: 'bg-[#F9EEE3] text-[#D58D49]',
      green: 'bg-[#E7F7DB] text-[#86D549]',
      pink: 'bg-[#F7DBF0] text-[#D549B6]',
      blue: 'bg-[#DBE6F7] text-[#4981D5]',
    },
    size: {
      small: 'text-[10px]',
      large: 'text-xs',
    },
  },
});

export interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {
  variant: 'primary' | 'basic';
  size: 'small' | 'large';
  color?: 'orange' | 'green' | 'pink' | 'blue';
  children: React.ReactNode;
}

function Chip({ className, variant, color, size = 'large', ...props }: TagProps) {
  return <div className={cn(tagVariants({ variant, color, size }), className)} {...props} />;
}

export { Chip, tagVariants };
