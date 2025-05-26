import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContextProvider";

export default function Counter() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("TodoList must be used within a TodosContextProvider");
  } 
  const {totalTodos, completedTodos} = context;
  return (
    <p>
        <b>{completedTodos}</b> / {totalTodos} todos completed
      </p>
  )
}
