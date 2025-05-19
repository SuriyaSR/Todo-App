import AddTodoForm from "./AddTodoForm";

export default function Sidebar() {
  return (
    <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
           <AddTodoForm />     
    </section>
  )
}
