import PlusChip from "./PlusChip";

const AddTodoButton = () => {
  return(
    <button className="flex justify-center px-[132px] py-1.5 md:px-[261px] md:py-[9px] lg:px-[146px] bg-white rounded-md border border-gray-D9D9D9 h-fit">
      <PlusChip />
    </button>
  )
};

export default AddTodoButton;
