
import  React from 'react';
import AddTask from "./components/addTask";
import TodoList from "./components/todoList";



export default  function Home() {

  return (<>
  <main className="max-w-4xl mx-auto ">
    <div className="text-center my-5 flex flex-col gap-4 ">
      <h1 className="text-2xl text-bold">Todo List </h1>
      <AddTask/>  
    </div>
    <TodoList/>
   
    
  </main>

 </> );
}
