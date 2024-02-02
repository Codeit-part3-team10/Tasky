import InvitedCard from '@/components/domains/mydashboard/InvitedCard';
import DashboardList from '@/components/domains/mydashboard/DashboardList';
import Pagination from '@/components/domains/mydashboard/Pagination';
import AddDashboardModal from '@/components/domains/mydashboard/AddDashboardModal';

export default function MyDashboardPage() {
  return (
    <div className="w-screen h-screen p-6 md:p-10 bg-gray-FAFAFA">
      <div className="flex flex-col items-end max-w-[1022px] mb-6 sm:mb-10 md:mb-11 ">
        <DashboardList className="w-full max-w-[1022px] mb-2 sm:mb-2" />
        <Pagination />
      </div>
      <InvitedCard />
      <AddDashboardModal />
    </div>
  );
}