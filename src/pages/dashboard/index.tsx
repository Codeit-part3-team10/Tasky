import AddColumnButton from "@/components/domains/dashboard/column/AddColumnButton";
import SideBar from "@/components/domains/dashboard/sidebar/SideBar";
import DashboardHeader from "@/components/header/dashboardHeader";
import Modal from "@/components/modal/column";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Column from "@/containers/Column";
import { DialogContent } from "@radix-ui/react-dialog";

export default function DashboardPage() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex flex-col max-w-[100vw]">
        <DashboardHeader columnName="비브리지" />
        <div className="flex flex-col lg:flex-row w-full">
          <Column />
          <Column />
          <Column />
          <Dialog>
            <DialogTrigger>
              <AddColumnButton />
            </DialogTrigger>
            <DialogContent>
              <Modal isOpen={true} onClose={() => false} title="새 컬럼 생성" label="이름" placeholder="새로운 프로젝트" confirmButtonText="생성" onConfirm={() => true} modalType=""/>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
