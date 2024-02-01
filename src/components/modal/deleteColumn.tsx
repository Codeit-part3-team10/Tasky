import * as React from 'react';
import { Button } from '@/components/ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal: React.FC<ModalProps> = ({ isOpen, onClose}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else {
      document.body.style.backgroundColor = 'initial';
    }
    return () => {
      document.body.style.backgroundColor = 'initial';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white pt-[108px] pr-[28px] pb-[28px] pl-[160px] w-[540px] h-[276px] flex-shrink-0 rounded-md flex flex-col justify-between">
            <span className="text-lg font-medium">컬럼의 모든 카드가 삭제됩니다.</span>
            <div className={`flex items-end justify-end`}>
              <Button variant="default" size="modal" text="modal" onClick={onClose} className="w-[120px] h-[48px] py-[14px] px-[46px] mr-[12px]">
                취소
              </Button>
              <Button variant="violet" size="modal" text="login" className="w-[120px] h-[48px] py-[14px] px-[46px]">
                삭제
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;