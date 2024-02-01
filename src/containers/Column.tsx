import AddTodoButton from "@/components/domains/dashboard/column/AddTodoButton";
import TodoCard from "@/components/domains/dashboard/column/TodoCard";
import { Badge } from "@/components/ui/badge";
import { MdOutlineSettings } from "react-icons/md";

const Column = () => {
  return(
    <div className="flex flex-col bg-gray-FAFAFA gap-[25px] px-3 pt-[17px] pb-3 md:px-5 md:pb-5 md:pt-[22px] border-b lg:border-r lg:border-b-0 lg:min-h-screen border-gray-EEEEEE">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-violet-5534DA"></div>
          <div className="flex items-center gap-3">
            <p>To Do</p>
            <Badge>3</Badge>
          </div>
        </div>
        <MdOutlineSettings className="w-6 h-6 text-gray-787486"/>
      </div>
      <div className="flex flex-col gap-4">
        <AddTodoButton />
        <TodoCard />
        <TodoCard image={true}/>
      </div>
    </div>
  )
};

export default Column;
