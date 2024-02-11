import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import GroupAvatar from '@/components/ui/avatarGroup';
import { FaCrown } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Member } from '@/types/DashboardType';
import Link from 'next/link';
import { axiosAuthInstance } from '@/libs/axios';
import ColumnModal from '../modal/ColumnModal';
import useStore from '@/state/dashboardTitleState';

interface DashboardHeaderProps {
  type?: string;
  dashboardid?: string | string[] | number | undefined; 
}

interface SlotSectionProps {
  dashboardid?: string | string[] | number | undefined; 
}

const authInstance = axiosAuthInstance();

const SlotSection: React.FC<SlotSectionProps> = ({ dashboardid }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const openInviteModal = () => {
    setIsInviteModalOpen(true);
  };
  
  const closeInviteModal = () => {
    setIsInviteModalOpen(false);
  };

  const handleConfirmFunction = async (inputValue: string) => {
    try {
      if(dashboardid) {
        await authInstance.post(`dashboards/${dashboardid}/invitations`, {
          email: inputValue
        });
      }
      alert('구성원으로 초대하였습니다: ' + inputValue);
    } catch (error) {
      alert('초대하는데 실패하였습니다: ' + (error as Error).message);
    }
  };
  
  useEffect(() => {
    if (dashboardid) {
      const fetchMembers = async () => {
        try {
          const response = await authInstance.get(`members?page=1&size=20&dashboardId=${dashboardid}`);
          const data = response.data;
          setMembers(data.members);
        } catch (error) {
          alert('Error fetching members data: ' + (error as Error).message);
        }
      };
  
      fetchMembers();
    }
  }, [dashboardid]);

  return(
    <>
      <nav className="flex flex-row items-center gap-4 mr-10">
        <Link href={`/mypage`}>
          <Button  className='text-gray-787486 flex align-middle gap-2 w-[50px] lg:w-[88px] md:w-[88px]'>
          <span><MdOutlineSettings className="w-0 lg:w-5 md:w-5 h-5" width={5} /></span><span>관리</span>
          </Button>
        </Link>
        <Button className='text-gray-787486 flex align-middle gap-2 w-[96px] lg:w-[116px] md:w-[116px]' onClick={openInviteModal}>
          <span><FaRegSquarePlus className="w-0 lg:w-5 md:w-5 h-5" width={5} /></span><span>초대하기</span>
        </Button>
      </nav>
      <GroupAvatar dashboardid={dashboardid} />
      <div className='w-[1px] h-[38px] mx-8 bg-[#d9d9d9]'/>
      <ColumnModal
        isOpen={isInviteModalOpen}
        onClose={closeInviteModal}
        title="초대하기"
        label="이메일"
        placeholder="codeit@codeit.com"
        confirmButtonText="초대"
        modalType="invite"
        onConfirm={handleConfirmFunction}
      />
    </>
  )
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ type, dashboardid }) => {
  const isDashboard = type === 'myDashboard';
  const [userData, setUserData] = useState<{ nickname: string }>({ nickname: '' });
  const dashboardTitle = useStore(state => state.dashboardTitle);
  const setDashboardTitle = useStore(state => state.setDashboardTitle);
  const [createdByMe, setCreatedByMe] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await authInstance.get('users/me');
        const data = await response.data;
        setUserData(data);
      } catch (error) {
        alert('Error fetching user data: ' + (error as Error).message);
      }
    };
  
    fetchUserData();
  }, []);

  useEffect(() => {
    if (dashboardid) {
      const fetchDashboardData = async () => {
        try {
          const response = await authInstance.get(`dashboards/${dashboardid}`);
          const data = await response.data;
          setDashboardTitle(data.title);
          setCreatedByMe(data.createdByMe);
        } catch (error) {
          alert('Error fetching dashboard data: ' + (error as Error).message);
        }
      };
  
      fetchDashboardData();
    }
  }, [dashboardid]);

  const getTitle = () => (isDashboard ? '내 대시보드' : dashboardTitle);

  return (
    <header className='w-full h-[70px] pl-10 pr-5 lg:pr-20 md:pr-10 bg-white border-b border-gray-D9D9D9'>
      <div className="flex flex-row items-center justify-between h-[70px]">
      {isDashboard && <div className="flex items-center font-bold text-xl gap-2">{getTitle()}</div>}
        {!isDashboard &&
          <div className="hidden lg:flex items-center font-bold text-xl gap-2 lg:w-[98px]">
            {getTitle()}
            {!isDashboard && <FaCrown className="w-5 h-4" fill="#FDD446"/>}
          </div>
        }
        <div className='flex flex-row items-center'>
          {!isDashboard && createdByMe && <SlotSection dashboardid={dashboardid} />}
          <Avatar size='lg' {...userData} />
          <span className="invisible lg:visible md:visible ml-3 font-medium text-base">{userData.nickname}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
