import Select from 'react-select'; //라이브러리
import React from 'react';
import Label from '@/components/common/Label';

interface InputDropdownProps {
  label: string;
  onChange: (value: Member) => void;
}
interface Member {
  value: string;
  label: string;
}

const InputDropdown = ({ label, onChange }: InputDropdownProps) => {
  const members: Member[] = [
    { value: '', label: '김동빈' },
    { value: '', label: '배유철' },
  ];

  const handlememberChange = (select: Member) => {
    onChange(select);
  };

  return (
    <div>
      <Label text={label} />
      <div className=" h-[42px] md:h-12 md:w-[217px] ">
        <Select
          options={members}
          onChange={(select) => handlememberChange(select as Member)}
          defaultValue={members[0]}
        />
      </div>
    </div>
  );
};

InputDropdown.displayName = 'InputDropdown';
export default InputDropdown;
