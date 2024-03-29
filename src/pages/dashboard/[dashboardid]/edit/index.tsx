import React, {ReactElement, useContext, useEffect, useState} from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import DashboardName from '@/components/boardEdit/dashboardName';
import Members from '@/components/boardEdit/members';
import Invited from '@/components/boardEdit/invited';
import { Button } from '@/components/ui/button';
import DashboardHeader from '@/components/header/dashboardHeader';
import { IoIosArrowBack } from 'react-icons/io';
import { axiosAuthInstance } from '@/libs/axios';
import Layout from '@/components/domains/dashboard/layout';
import { DashboardContext } from '@/contexts/DashboardProvider';

const authInstance = axiosAuthInstance();

export default function BoardEditPage() {
  const router = useRouter();
  const {setDashboards} = useContext(DashboardContext);
  const { dashboardid } = router.query;
  const [dashboardTitle, setDashboardTitle] = useState('');
  const [createdByMe, setCreatedByMe] = useState<boolean>(false);

  const handleDeleteDashboard = async () => {
    try {
      await authInstance.delete(`dashboards/${dashboardid}`);
      setDashboards((prevs) => prevs.filter(prev => prev.id !== Number(dashboardid)))
      router.push('/mydashboard');
    } catch (error) {
      alert(`대시보드를 삭제하는 데 실패하였습니다. : ${(error as Error).message}`);
    }
  };

  useEffect(() => {
    if(dashboardid) {
      const fetchData = async () => {
        try {
          const response = await authInstance.get(`dashboards/${dashboardid}`);
          const data = await response.data;
          setDashboardTitle(data.title || '');
          setCreatedByMe(data.createdByMe || false);
        } catch (error) {
          alert(`대시보드 데이터를 가져오는 데 실패하였습니다. : ${(error as Error).message}`);
        }
      };
      fetchData();
    }
  }, [dashboardid]);

  const handleChangeDashboardTitle = (value:string) => {
    setDashboardTitle(value);
    return;
  };

  return (
    <>
      <DashboardHeader type='' dashboardName={dashboardTitle} createdByMe={createdByMe} dashboardid={dashboardid ? Number(dashboardid) : 0} />
        <div className='flex flex-col gap-[40px] mx-[20px] w-[284px] md:w-[554px] lg:w-[620px]'>
          <div className='flex flex-col gap-[25px]'>
            <Link href={`/dashboard/[dashboardid]`} as={`/dashboard/${dashboardid}`} className='flex flex-fow items-center text-base font-medium mt-[20px] gap-[6px]'>
              <IoIosArrowBack size={20} width={5} />
              돌아가기
            </Link>
            <DashboardName dashboardid={dashboardid} title={dashboardTitle} onChange={handleChangeDashboardTitle} />
            <Members dashboardid={dashboardid} />
            <Invited dashboardid={dashboardid ? Number(dashboardid) : 0} />
          </div>
          <Button onClick={handleDeleteDashboard} className='bg-[#fafafa] text-[#333236] border-[#d9d9d9] w-[284px] lg:w-[320px] md:w-[320px] h-[62px] px-[95px] py-[20px] my-[40px] font-medium text-lg'>대시보드 삭제하기</Button>
        </div>
    </>

  );
}

BoardEditPage.getLayout = function getLayout(page:ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
