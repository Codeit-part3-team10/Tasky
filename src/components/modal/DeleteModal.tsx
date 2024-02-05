import * as React from 'react';
import { Button } from '@/components/ui/button';
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  dashboardId: Number;
  columnId: Number;
}

const DeleteModal: React.FC<ModalProps> = ({ isOpen, onClose, dashboardId, columnId}) => {
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

  React.useEffect(() => {
    axios.get(`https://sp-taskify-api.vercel.app/2-10/columns?${dashboardId}`)
  })
  function deleteColumn() {
    axios.delete(`https://sp-taskify-api.vercel.app/2-10/columns/${columnId}`).then(()=> {
      alert('컬럼이 삭제되었습니다.')
    })
  }
  

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white px-[24px] pt-[108px] pb-[28px] w-[327px] lg:w-[540px] md:w-[540px] h-[276px] flex-shrink-0 rounded-md flex flex-col justify-between">
            <span className="w-[100%] text-base lg:text-lg md:text-lg font-medium text-center">컬럼의 모든 카드가 삭제됩니다.</span>
            <div className={`flex items-end justify-end`}>
              <Button variant="default" size="modal" text="modal" onClick={onClose} className="w-[120px] h-[48px] py-[14px] px-[46px] mr-[12px]">
                취소
              </Button>
              <Button variant="violet" size="modal" text="login" onClick={deleteColumn} className="w-[120px] h-[48px] py-[14px] px-[46px]">
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
