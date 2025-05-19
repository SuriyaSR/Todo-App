
export default function AddTodoForm() {
  return (
    <form action="">
        <h2 className="font-medium text-[#231d15]">Add a Todo</h2>
        <input type="text" className="h-[45px] border border-black/[12%] rounded-[5px]  my-[9px] text-[14px] block w-full px-[16px]"/>
        <button type="submit" className="h-[45px] bg-[#473a2b] w-full text-white rounded-[5px] hover:bg-[#322618]">Add to list</button>
    </form>
  )
}
