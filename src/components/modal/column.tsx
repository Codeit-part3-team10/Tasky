import * as React from 'react';
import { Button } from '@/components/ui/button';
import DeleteModal from '@/components/modal/deleteColumn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  label: string;
  placeholder: string;
  confirmButtonText: string;
  onConfirm: (inputValue: string) => void;
  modalType: 'delete' | '';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, label, placeholder, confirmButtonText, onConfirm, modalType }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  const handleConfirm = () => {
    onConfirm(inputValue);
    setInputValue('');
    onClose();
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else if (!isDeleteModalOpen) {
      document.body.style.backgroundColor = 'initial';
    }
    return () => {
      if (!isDeleteModalOpen && !isOpen) {
        document.body.style.backgroundColor = 'initial';
      }
    };
  }, [isOpen, isDeleteModalOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-6 w-[540px] h-[276px] flex-shrink-0 rounded-md">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <label className="text-lg font-medium block mb-[10px] mt-[32px]">{label}</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 placeholder:text-gray-500 focus:outline-violet-500"
              value={inputValue}
              placeholder={placeholder}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className={`mt-[28px] flex items-end ${modalType === 'delete' ? 'justify-between' : 'justify-end'}`}>
              {modalType === 'delete' && (
                <button className="text-[#9FA6B2] font-normal text-sm underline" onClick={handleDeleteClick}>
                  삭제하기
                </button>
              )}
              <div>
                <Button variant="default" size="modal" text="modal" onClick={onClose} className="w-[120px] h-[48px] py-[14px] px-[46px] mr-[12px]">
                  취소
                </Button>
                <Button variant="violet" size="modal" text="login" onClick={handleConfirm} className="w-[120px] h-[48px] py-[14px] px-[46px]">
                  {confirmButtonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <DeleteModal isOpen={isDeleteModalOpen} onClose={handleDeleteCancel} />
      )}
    </>
  );
};

export default Modal;
