
import { useContext } from "react";
import DeleteButton from "./DeleteButton";
import { TodosContext } from "../contexts/TodosContextProvider";

export default function TodoList() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("TodoList must be used within a TodosContextProvider");
  } 

  const {
    todos,
    handleToggleTodo,
    handleDeleteTodo,
  } = context;

  return (
    <ul>
      {todos.length === 0 && (
        <li className="flex justify-center items-center h-full font-semibold">
          Start adding your todos!
        </li>
      )}
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]" onClick={() => handleToggleTodo(todo.id)}>
          <span className={`${todo.completed ? 'line-through text-[#ccc]' : ''}`}>{todo.text}</span>
          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  )
}
