import { ReactNode } from 'react';

interface ModalTitleProps {
  children: ReactNode;
}

export default function ModalTitle({ children }: ModalTitleProps) {
  return (
    <div className={`font-bold text-[20px]  md:text-[24px]  lg:text-[24px]`}>
      {children}
    </div>
  );
}
