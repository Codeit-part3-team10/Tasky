import AddColumnDialog from '@/components/dialog/AddColumnDialog';
import Layout from '@/components/domains/dashboard/layout';
import DashboardHeader from '@/components/header/dashboardHeader';
import Column from '@/containers/Column';
import { getColumns, getDetailedDashboardData } from '@/libs/network';
import { ColumnType, Dashboard } from '@/types/DashboardType';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

export default function DashboardIdPage() {
  const router = useRouter();
  const [dashboard, setDashbaord] = useState<Dashboard>({
    id: 0,
    title: '',
    color: '#7AC555',
    createdAt: '',
    updatedAt: '',
    createdByMe: false,
    userId: 0,
  });

  const [columns, setColumns] = useState<ColumnType[]>([]);

  useEffect(() => {
    const getDashbaordData = async () => {
      if (typeof router.query.dashboardid === 'string') {
        try {
          const dashboardData = await getDetailedDashboardData(router.query.dashboardid);
          if (dashboardData) {
            setDashbaord(dashboardData.data);
          }
        } catch (error) {
          alert(error);
        }
      }
    };

    const getColumnData = async () => {
      if (typeof router.query.dashboardid === 'string') {
        try {
          const columnData = await getColumns(router.query.dashboardid);
          if (columnData) {
            setColumns(columnData.data);
          }
        } catch (error) {
          alert(error);
        }
      }
    };

    getDashbaordData();
    getColumnData();
  }, [router.query.dashboardid]);

  const handleChangeColumn = (id: number) => {
    setColumns((prevs) => prevs.filter((prev) => prev.id !== id));
  };

  return (
    <>
      <DashboardHeader dashboardName={dashboard.title} createdByMe={dashboard.createdByMe} dashboardid={dashboard.id} />
      <div className="header-size flex flex-col lg:flex-row w-full bg-gray-FAFAFA overflow-scroll">
        {columns.map((column) => (
          <Column
            dashboardid={Number(router.query.dashboardid)}
            key={column.id}
            title={column.title}
            column={column}
            columns={columns}
            id={column.id}
            onChange={handleChangeColumn}
          />
        ))}
        <div>
          <AddColumnDialog dashboardid={Number(router.query.dashboardid)} columns={columns} setColumns={setColumns} />
        </div>
      </div>
    </>
  );
}

DashboardIdPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
