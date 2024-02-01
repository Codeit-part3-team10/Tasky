import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import GroupAvatar from '@/components/ui/avatarGroup';
import { FaCrown } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Member } from '@/types/DashboardType';

// 나중에 api연동하면 삭제될 임시 데이터입니다.
const userData = {
  nickname: 'dongbin',
  profileImageUrl: '',
};

const members = [
  {
    id: 1,
    userId: 1,
    email: 'example1@example.com',
    nickname: 'KimDongbin',
    profileImageUrl: '',
    createdAt: '2024-01-25T10:21:46.244Z',
    updatedAt: '2024-01-25T10:21:46.244Z',
    isOwner: false,
  }, {
    id: 2,
    userId: 2,
    email: 'example2@example.com',
    nickname: '김동빈',
    profileImageUrl: '',
    createdAt: '2024-01-25T10:21:46.244Z',
    updatedAt: '2024-01-25T10:21:46.244Z',
    isOwner: false,
  }, {
    id: 3,
    userId: 3,
    email: 'example3@example.com',
    nickname: 'dongbin',
    profileImageUrl: '',
    createdAt: '2024-01-25T10:21:46.244Z',
    updatedAt: '2024-01-25T10:21:46.244Z',
    isOwner: false,
  }, {
    id: 4,
    userId: 4,
    email: 'example3@example.com',
    nickname: 'lauren',
    profileImageUrl: '',
    createdAt: '2024-01-25T10:21:46.244Z',
    updatedAt: '2024-01-25T10:21:46.244Z',
    isOwner: false,
  }, {
    id: 5,
    userId: 5,
    email: 'example3@example.com',
    nickname: 'Kimdongbin',
    profileImageUrl: '',
    createdAt: '2024-01-25T10:21:46.244Z',
    updatedAt: '2024-01-25T10:21:46.244Z',
    isOwner: false,
  }
];

const SlotSection = ({members}:{members:Member[]}) =>{
  return(
    <>
      <nav className="flex flex-row items-center gap-4 mr-10">
        <Button className='text-gray-787486 flex align-middle gap-2 w-[88px]'>
          <span><MdOutlineSettings className="w-5 h-5" /></span><span>관리</span>
        </Button>
        <Button className='text-gray-787486 flex align-middle gap-2 w-[116px]'>
          <span><FaRegSquarePlus className="w-5 h-5" /></span><span>초대하기</span>
        </Button>
      </nav>
      <GroupAvatar members={members} totalCount={members.length} />
      <div className='w-px h-[38px] mx-8 bg-gray-D9D9D9'/>
    </>
  )
};

const DashboardHeader: React.FC<{ columnName: string, type?: string }> = ({ columnName, type }) => {
  const isDashboard = type === 'myDashboard';

  const getTitle = () => (isDashboard ? '내 대시보드' : columnName);

  return (
    <header className='w-full pl-10 pr-20 bg-white border-b border-gray-D9D9D9'>
      <div className="flex flex-row items-center justify-between h-[70px]">
        <div className="flex items-center font-bold text-xl gap-2">
          {getTitle()}
          {!isDashboard && <FaCrown className="w-5 h-4" fill="#FDD446"/>}
        </div>
        <div className='flex flex-row items-center'>
          {!isDashboard && <SlotSection members={members}/>}
          <Avatar {...userData} />
          <span className="ml-3 font-medium text-base">{userData.nickname}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
