export interface LabelProps {
  text?: string;
  required?: boolean;
  htmlFor?: string;
}

export default function Label({ text, required, htmlFor }: LabelProps) {
  return (
    <div
      className={`font-medium mb-[10px] lg:text-[18px] text-black-333236 text-[16px] `}
    >
      <label htmlFor={htmlFor}>{text}</label>
      {required && <span className=" text-violet-5534DA ml-[5px]">*</span>}
    </div>
  );
}
