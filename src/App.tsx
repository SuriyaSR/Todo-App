import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TodoList from "./components/TodoList"

function App() {

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
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todoText) => {
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

    const handleDeleteTodo = (id) => {
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
    }
    const handleToggleTodo = (id) => {
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
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
        <BackgroundHeading />

        <main className="w-[972px] relative h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
          <Header todos={todos} />
          <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo}/>
          <Sidebar todos={todos} handleAddTodo={handleAddTodo}/>
        </main>
    </div>
  )
}

export default App
