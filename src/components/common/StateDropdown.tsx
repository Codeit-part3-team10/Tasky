import { forwardRef } from 'react';
import Label from '@/components/common/Label';
import Select from 'react-select'; // 라이브러리

interface StateProps {
  value: number;
  label: string;
}
interface StateDropdownProps {
  label: string;
  onChange: (value: StateProps) => void; // 타입 수정
}

const StateDropdown = forwardRef<HTMLInputElement, StateDropdownProps>(
  ({ label, onChange }) => {
    const states: StateProps[] = [
      { value: 1, label: 'To Do' },
      { value: 2, label: 'On Progress' },
      { value: 3, label: 'Done' },
    ];

    const handleStateClick = (state: StateProps) => {
      onChange(state);
    };

    return (
      <div>
        <Label text={label} />
        <div>
          <div className="h-[42px] md:h-12 md:w-[217px] ">
            <Select
              options={states}
              onChange={(v) => handleStateClick(v as StateProps)} // 타입 캐스팅
              defaultValue={states[0]}
            />
          </div>
        </div>
      </div>
    );
  },
);

StateDropdown.displayName = 'StateDropdown';
export default StateDropdown;
