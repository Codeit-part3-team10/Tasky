import DashboardHeader from '@/components/header/dashboardHeader';
import SideBar from '@/components/domains/dashboard/sidebar/SideBar';
import ProfileCard from '@/components/domains/mypage/ProfileCard';
import ChangePasswordCard from '@/components/domains/mypage/ChangePasswordCard ';
import { useDashboard } from '@/contexts/useDashboard';

export default function MyPage() {
  const { dashboards } = useDashboard();

  return (
    <div className="flex w-screen h-screen bg-gray-FAFAFA">
      <SideBar dashboards={dashboards}/>
      <div className="flex flex-col w-full">
        <DashboardHeader dashboardName="내 대시보드" type="myDashboard" />
        <main className="grow p-6 md:p-10">
          <ProfileCard className="max-w-[620px] mb-4" />
          <ChangePasswordCard className="max-w-[620px]" />
        </main>
      </div>
    </div>
  );
}
