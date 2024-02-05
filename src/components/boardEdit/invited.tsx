import React, { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { RiAddBoxLine } from "react-icons/ri";
import { Button } from '../ui/button';
import ColumnModal from '../modal/ColumnModal';
import axios from 'axios';

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

interface InvitedProps {
  className?: string;
  dashboardId: number;
  members: Member[];
}

const Invited: React.FC<InvitedProps> = ({ dashboardId, members ,className }) => {
  const membersPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const currentMembers = members.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const openInviteModal = () => {
    setIsInviteModalOpen(true);
  };

  const closeInviteModal = () => {
    setIsInviteModalOpen(false);
  };

  const handleInviteConfirm = async (inputValue: string) => {
    try {
      const response = await fetch(
        `https://sp-taskify-api.vercel.app/2-10/dashboards/${dashboardId}/invitations`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nzk4LCJ0ZWFtSWQiOiIyLTEwIiwiaWF0IjoxNzA3MTA5NzA3LCJpc3MiOiJzcC10YXNraWZ5In0.CvyV3tAh6cO-F8uvRuOtPbZbeYRBXUWYis8Lig8Ejy0',
          },
          body: JSON.stringify({
            email: inputValue,
          }),
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      closeInviteModal();
    } catch (error) {
      alert(`Error sending invitation: ${(error as Error).message}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sp-taskify-api.vercel.app/2-10/dashboards/${dashboardId}/invitations`,
          {
            params: {
              page: currentPage,
              size: membersPerPage,
            },
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nzk4LCJ0ZWFtSWQiOiIyLTEwIiwiaWF0IjoxNzA3MTA5NzA3LCJpc3MiOiJzcC10YXNraWZ5In0.CvyV3tAh6cO-F8uvRuOtPbZbeYRBXUWYis8Lig8Ejy0',
            },
          }
        );

        setTotalPages(Math.ceil(response.data.totalCount / membersPerPage));
      } catch (error) {
        alert(`Error fetching data: ${(error as Error).message}`);
      }
    };

    fetchData();
  }, [currentPage, dashboardId]);

  function deleteMember(memberId: number) {
    axios
      .delete(`https://sp-taskify-api.vercel.app/2-10/members/${memberId}`)
      .then(() => {
        alert('멤버가 삭제되었습니다.');
      })
      .catch((error) => {
        alert(`Error deleting member: ${error.message}`);
      });
  }

  return (
    <div className="bg-white pt-[24px] lg:pt-[32px] md:pt-[32px] px-[20px] lg:px-[28px] md:px-[20px] pb-[19px] lg:pb-[28px] md:pb-[28px] rounded-md shadow-md w-[100%] h-[404px]">
      <div className="h-[24px] flex flex-row justify-between items-center">
        <div className="text-[19px] lg:text-xl md:text-xl font-bold lg:mb-[37px] md:mb-[37px] lg:mt-[34px] md:mt-[34px]">초대 내역</div>
        <div className="flex items-center flex-col gap-[25px] lg:gap-[0px] md:gap-[0px] lg:flex-row md:flex-row mt-[50px] lg:mt-[0px] md:mt-[0px]">
          <div className='flex flex-row items-center'>
            <span className="text-[#333236] lg:text-sm md:text-sm text-xs lg:mr-[16px] md:mr-[16px] mr-[12px]">
              {totalPages} 페이지 중 {currentPage}
            </span>
            <button className='text-[#D9D9D9] border border-gray-D9D9D9 lg:w-[40px] md:w-[40px] w-[36px] lg:h-[40px] md:h-[40px] h-[36px] inline-flex items-center justify-center rounded-md rounded-br-none rounded-tr-none' onClick={handlePrevPage}>
              <IoIosArrowBack size={20} />
            </button>
            <button className='text-[#D9D9D9] border border-gray-D9D9D9 lg:w-[40px] md:w-[40px] w-[36px] lg:h-[40px] md:h-[40px] h-[36px] inline-flex items-center justify-center rounded-md rounded-bl-none rounded-tl-none' onClick={handleNextPage}>
              <IoIosArrowForward size={20} />
            </button>
          </div>
          <div>
            <button className='flex flex-row items-center gap-[8px] rounded-md text-white bg-[#5534DA] px-[12px] lg:px-[16px] md:px-[16px] py-[7px] lg:py-[8px] md:py-[8px] ml-[61px] lg:ml-[16px] md:ml-[16px] w-[86px] h-[28px] lg:w-[105px] lg:h-[32px] md:w-[105px] md:h-[32px] text-[11px] lg:text-[14px] md:text-[14px] font-medium' onClick={openInviteModal}>
              <RiAddBoxLine className='w-[14px] h-[14px]' />
              초대하기
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className='mb-[24px] mt-[32.5px] font-normal text-base text-[#9FA6B2]'>이메일</p>
        <div>
          {currentMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between mb-[32px]">
              <div className='flex flex-row gap-[12px] items-center text-[14px] lg:text-[16px] md:text-[16px]'>
                {member.email}
              </div>
              <Button
                className='w-[50px] px-[10px] lg:px-[37px] md:px-[37px] lg:w-[84px] md:w-[84px] h-[32px]'
                onClick={() => deleteMember(member.id)}
              >
                취소
              </Button>
            </div>
          ))}
        </div>
      </div>
      <ColumnModal
        isOpen={isInviteModalOpen}
        onClose={closeInviteModal}
        title="초대하기"
        label="이메일"
        placeholder="codeit@codeit.com"
        confirmButtonText="초대"
        onConfirm={handleInviteConfirm}
        modalType=""
      />
    </div>
  );
};

export default Invited;
