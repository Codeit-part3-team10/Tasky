import { forwardRef } from 'react';
import Label from '@/components/common/Label';

export interface CardLabelProps {
  label?: string;
  required?: boolean;
}

interface TextareaProps extends CardLabelProps {
  value: string;
  onChange: () => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, required, value, onChange }, ref) {
    return (
      <div>
        <Label text={label} required={required} />
        <div className="mt-2.5">
          <textarea
            ref={ref}
            className="selection:block w-full rounded-md border border-solid px-[16px] py-[14px] text-[14px] h-[84px] text-gray70 placeholder:text-gray-9FA6B2 focus:border-violet outline-0  md:text-[16px] md:h-24"
            maxLength={200}
            placeholder="200자 이내로 작성해주세요."
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
