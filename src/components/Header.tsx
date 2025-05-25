import Counter from "./Counter";
import Logo from "./Logo";

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
}
export default function Header({totalTodos, completedTodos}: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
      <Logo />
      <Counter totalTodos={totalTodos} completedTodos={completedTodos}/>
    </header>
  )
}
