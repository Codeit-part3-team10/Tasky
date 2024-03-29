import Link from 'next/link';
import { cn } from '@/libs/utils';
import Image from 'next/image';
import { getDashboards } from '@/api/fetchDashboard';
import { useState, useEffect, useContext } from 'react';
import { DASHBOARD_COLOR } from '@/constants/constants';
import Pagination from '@/components/domains/mydashboard/Pagination';
import { IoIosArrowForward } from 'react-icons/io';
import PlusChip from '@/components/domains/dashboard/column/PlusChip';
import AddDashboardDialog from '@/components/dialog/AddDashboardDialog';
import { DashboardContext } from '@/contexts/DashboardProvider';
import { Dashboard } from '@/types/DashboardType';
interface DashboardListProps {
  className?: string;
}
// interface Dashboard {
//   id: number;
//   title: string;
//   createdByMe: boolean;
//   color: string;
// }

export default function DashboardList({ className, ...props }: DashboardListProps) {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const {dashboards:totalDashboard, setDashboards:setTotalDashboard} = useContext(DashboardContext)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const pageSize = 5;

  useEffect(() => {
    const handleload = async () => {
      const { dashboards, totalCount } = await getDashboards('pagination', pageSize, currentPage);
      setDashboards(dashboards);

      const calculatedTotalPage = Math.ceil(totalCount / pageSize);
      setTotalPage(calculatedTotalPage);
    };

    handleload();
  }, [currentPage]);

  const handleChangeDashboard = (dashboard:Dashboard) => {
    setDashboards(prev => [dashboard, ...prev]);
    setTotalDashboard(prev => [dashboard, ...prev]);
  };

  return (
    <div className={cn(className)} {...props}>
      <ul className="grid grid-rows-1 grid-cols-1 gap-2 md:grid-cols-2 md:gap-2.5 lg:grid-cols-3 lg:gap-[13px] ">
        <li>
          <AddDashboardDialog onChange={handleChangeDashboard}>
            <DashboardAddButton />
          </AddDashboardDialog>
        </li>
        {dashboards.map((dashboard) => (
          <li key={dashboard.id}>
            <Link
              href={`/dashboard/${dashboard.id}`}
              className="flex justify-between items-center h-[58px] sm:h-[68px] md:h-[70px] px-5 rounded-lg border border-gray-D9D9D9 bg-white text-base font-semibold text-black-333236"
            >
              <div className="flex items-center whitespace-nowrap">
                <Bullet color={dashboard.color} />
                {dashboard.title}
                {dashboard.createdByMe && (
                  <div className="relative w-4 h-3 md:w-[21px] md:h-[17px] ml-2">
                    <Image fill src="/crown.svg" alt="" className="object-cover" />
                  </div>
                )}
              </div>

              <IoIosArrowForward className="w-[18px] h-[18px]" />
            </Link>
          </li>
        ))}
      </ul>

      <Pagination
        className="self-end mt-2 sm:mt-2"
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
interface BulletProps {
  color: string;
}

function Bullet({ color }: BulletProps) {
  const bulletColor = DASHBOARD_COLOR[color];

  return <span className={cn(`block rounded-full w-[8px] h-[8px] mr-4 ${bulletColor}`)}></span>;
}

function DashboardAddButton() {
  return (
    <div className="flex w-full justify-center items-center gap-2.5 h-[58px] sm:h-[68px] md:h-[70px] px-5 rounded-lg border border-gray-D9D9D9 bg-white text-base font-semibold text-black-333236">
      새로운 대시보드
      <PlusChip />
    </div>
  );
}
