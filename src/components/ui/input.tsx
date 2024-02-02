import * as React from 'react';
import Label from '@/components/common/Label';
import { cn } from '@/libs/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, value = '', required = false, className, type, ...props }, ref) => {
    return (
      <div>
        {label && <Label text={label} required={required} />}
        <div className="mt-2.5">
          <input
            type={type}
            value={value}
            className={cn(`h-[42px] px-4 rounded-md border border-gray-D9D9D9 text-sm text-black-333236'`, className)}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
