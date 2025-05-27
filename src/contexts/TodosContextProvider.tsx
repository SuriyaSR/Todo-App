import { createContext, useEffect, useState } from "react";
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

  const getInitialTodos = () => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        return JSON.parse(storedTodos);
      } else {
        return [];
      }
    };

    const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

    //derived state for the number of todos
    const completedTodos = todos.filter((todo) => todo.completed).length;  
    const totalTodos = todos.length;

    const handleAddTodo = (todoText: string) => {
      setTodos((prevTodos) => {
          return [...prevTodos, 
            {
              id: prevTodos.length + 1, 
              text: todoText, 
              completed: false
            }];
      });
    }
    const handleDeleteTodo = (id: number) => {

      const filteredTodos = todos.filter(todo => todo.id !== id);
      // Reassign IDs
      const updatedTodos = filteredTodos.map((todo, index) => ({
        ...todo,
        id: index + 1,
      }));

      setTodos(updatedTodos);
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

    // side effects
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
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
