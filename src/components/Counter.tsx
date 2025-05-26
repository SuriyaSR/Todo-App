import { useTodosContext } from "../lib/hooks";


export default function Counter() {
  
  const {totalTodos, completedTodos} = useTodosContext();
  return (
    <p>
        <b>{completedTodos}</b> / {totalTodos} todos completed
      </p>
  )
}
