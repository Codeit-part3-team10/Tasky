import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

const buttonVariants = cva(
  'inline-flex font-medium items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      text: {
        default: 'text-violet-5534DA text-[14px]',
        login: 'text-white text-[18px]',
        modal: 'text-gray-787486 text-[14px] lg:text-[16px]',
        delete: 'text-violet-5534DA text-[12px] lg:text-[14px]',
        input: 'text-violet-5534DA text-[12px]',
      },
      size: {
        default: 'px-[37px] py-[7px] md:px-[23px] lg:px-[29px]',
        login: 'px-[152px] py-[14px] lg:px-[236px]',
        modal: 'px-14 py-[12px] lg:px-[46px] lg:py-[14px] ',
        delete: 'px-[9px] py-[7px] lg:px-[29px]',
        input: 'px-[31px] py-[9px]',
      },
      variant: {
        default: 'bg-white border border-gray-D9D9D9',
        violet: 'bg-violet-5534DA text-white disabled:bg-gray',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      text: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, text, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, text, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
