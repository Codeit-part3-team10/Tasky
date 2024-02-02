import React, { useState, useRef, MouseEvent } from 'react';
import Image from 'next/legacy/image';
import { LuPlus } from 'react-icons/lu';

import Label from '@/components/common/Label';
import { CardLabelProps } from '@/components/common/Textarea';

const AddFile = ({ label, required }: CardLabelProps) => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string>('');
  // const send = () => {};

  // const imgReset = () => {
  //   if (imgRef.current) {
  //     imgRef.current.value = '';
  //     URL.revokeObjectURL(imgUrl);
  //     setImgUrl('');
  //   }
  // };
  const handleButtonClick = (e: MouseEvent) => {
    imgRef.current?.click();
  };

  return (
    <div>
      <Label text={label} required={required} />
      <button
        type="button"
        className="border border-solid rounded-md bg-gray10 relative overflow-hidden w-[58px] h-[58px] lg:h-[76px] lg:w-[76px]"
        onClick={handleButtonClick}
      >
        <input
          type="file"
          ref={imgRef}
          onChange={(e: React.ChangeEvent<{ files: FileList | null }>) => {
            if (e.target.files && e.target.files.length > 0) {
              //객체 URL 메모리 누수방지
              const file = e.target.files[0];
              URL.revokeObjectURL(imgUrl);
              //URL생성
              setImgUrl(() => URL.createObjectURL(file));
            }
          }}
          accept="image/*"
          className="hidden"
        />

        {imgUrl ? (
          <>
            <div className="w-14 h-14 p-[24px] rounded-md overflow-hidden relative md:w-[76px] md:h-[76px]">
              <Image
                src={imgUrl}
                alt="프로필 이미지"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* <button
              type="button"
              className="p-[24px] "
              onClick={imgReset}
            >
              삭제하기
            </button> */}
          </>
        ) : (
          <>
            <div className="sm:p-[24px] p-[18px]">
              <LuPlus />
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default AddFile;
