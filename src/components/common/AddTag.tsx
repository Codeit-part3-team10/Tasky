import React, { KeyboardEvent, useState } from 'react';
import { Chip } from '@/components/ui/tag'; // Chip 컴포넌트와 tagVariants 가져오기
import Label from '@/components/common/Label';

interface AddTagProps {
  addedTags?: string[];
  label: string;
}
function AddTag({ label }: AddTagProps) {
  const [text, setText] = useState<string>(''); // 입력된 텍스트를 상태로 관리
  const [chips, setChips] = useState<React.ReactNode[]>([]); // Chip 컴포넌트들을 상태로 관리

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value); // 입력된 텍스트 업데이트
  };

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // 입력된 텍스트를 분할하여 배열로 만듦
      const words = text.split(' ');

      // 새로운 Chip 컴포넌트들을 생성하여 상태를 업데이트
      setChips((prevChips) => [
        ...prevChips,
        ...words.map((word, index) => (
          <Chip
            key={index}
            variant="primary"
            size="large"
            color="blue"
            className="my-1 mx-1"
          >
            {word}
          </Chip>
        )),
      ]);

      // 입력 필드를 비움
      setText('');
    }
  };

  return (
    <div>
      <Label text={label} />
      <div className="flex h-12 flex-wrap border rounded-md px-4 py-[11px] md:py-[13px] ">
        <Chip variant="primary" size="small">
          {chips}
        </Chip>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey} // Enter 키 입력 이벤트 처리
          className="border-none focus:outline-none md:text-[16px] placeholder:text-gray40 "
        />
      </div>
    </div>
  );
}

export default AddTag;
