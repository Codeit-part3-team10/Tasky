import { useState } from 'react';
import Image from 'next/image';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

export default function PasswordInput() {
  const [isBlind, setIsBlind] = useState(true);

  const handlePasswordBlind = () => {
    setIsBlind((prev) => !prev);
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 text-black-333236">
      <label htmlFor="password">비밀번호</label>
      <div className="relative">
        <input
          type={isBlind ? 'password' : 'text'}
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          className=" block w-full border border-gray-D9D9D9 rounded-lg px-3 py-3 placeholder:text-gray-9FA6B2 focus:  focus:outline-violet-5534DA"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center" onClick={handlePasswordBlind}>
          {isBlind ? (
            <IoEyeOffOutline size={24} className="cursor-pointer" color="#9FA6B2" />
          ) : (
            <IoEyeOutline size={24} className="cursor-pointer" color="#9FA6B2" />
          )}
        </div>
      </div>
    </div>
  );
}
