import { createContext, useState } from "react";
import type { Todo } from "../lib/types";

type TodoContextProviderProps = {
  children: React.ReactNode;
}

type TypeTodosContext = {
  todos: Todo[];
  completedTodos: number;
  totalTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
}

export const TodosContext = createContext<TypeTodosContext | null>(null);

export default function TodosContextProvider({children}: TodoContextProviderProps) {

  // const initialTodos = [
  //   {
  //     id: 1,
  //     text: 'Buy Groceries',
  //     completed: false
  //   },
  //   {
  //     id: 2,
  //     text: 'Walk the dog',
  //     completed: true
  //   },
  //   {
  //     id: 3,
  //     text: 'Do Laundry',
  //     completed: false
  //   }]; 
    const [todos, setTodos] = useState<Todo[]>([]);

    //derived state for the number of todos
    const completedTodos = todos.filter((todo) => todo.completed).length;  
    const totalTodos = todos.length;

    const handleAddTodo = (todoText: string) => {
      if(todos.length >= 5) {
          alert('Log in to add more than 5 todos');
          return;
        } else {
            setTodos((prevTodos) => {
              return [...prevTodos, 
                {
                  id: prevTodos.length + 1, 
                  text: todoText, 
                  completed: false
                }];
          });
        }    
    }
    const handleDeleteTodo = (id: number) => {
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
    }
    const handleToggleTodo = (id: number) => {
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        });
      });
    }
    
  return (
    <TodosContext.Provider value={{
      todos,
      completedTodos,
      totalTodos,
      handleAddTodo,
      handleDeleteTodo,
      handleToggleTodo
    }}>
      {children}
    </TodosContext.Provider>
  )
}
