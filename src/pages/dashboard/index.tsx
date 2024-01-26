import AddTodoButton from "@/components/domains/dashboard/column/AddTodoButton";
import TodoCard from "@/components/domains/dashboard/column/TodoCard";
import SideBar from "@/components/domains/dashboard/sidebar/SideBar";

export default function DashboardPage() {
  return (
    <div className="flex gap-6">
      <SideBar />
      <div className="flex flex-col gap-4 bg-gray-FAFAFA">
        <AddTodoButton />
        <TodoCard />
        <TodoCard image={true}/>
      </div>
    </div>
  );
}
