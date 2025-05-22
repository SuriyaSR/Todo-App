import { useState } from "react";
import DeleteButton from "./DeleteButton";      

export default function TodoList() {
  const initialTodos = [
  {
    id: 1,
    text: 'Buy Groceries',
    completed: false
  },
  {
    id: 2,
    text: 'Walk the dog',
    completed: true
  },
  {
    id: 3,
    text: 'Do Laundry',
    completed: false
  },
  {
    id: 4,
    text: 'Read a book',
    completed: true
  },
  {
    id: 5,
    text: 'Finish homework',
    completed: false
  },
  {
    id: 6,
    text: 'Clean the house',
    completed: true
  },
  {
    id: 7,
    text: 'Prepare dinner',
    completed: false
  },
  {
    id: 8,
    text: 'Call mom',
    completed: false
  }]; 
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]" onClick={() => {
        setTodos(todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t)));
      }}>
          <span className={`${todo.completed ? 'line-through text-[#ccc]' : ''}`}>{todo.text}</span>
          <DeleteButton id={todo.id} setTodos={setTodos}/>
        </li>
      ))}
    </ul>
  )
}
