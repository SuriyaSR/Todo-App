import BackgroundHeading from "./components/BackgroundHeading"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TodoList from "./components/TodoList"

function App() {

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
           <BackgroundHeading />

           <main className="w-[972px] relative h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
              <Header />
              <TodoList />
              <Sidebar />
           </main>
    </div>
  )
}

export default App
