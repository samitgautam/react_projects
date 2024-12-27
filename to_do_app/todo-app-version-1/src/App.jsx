import "./App.css";
import Addtodo from "./components/Addtodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItem1 from "./components/TodoItem1";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <Addtodo />
        <TodoItem />
        <TodoItem1 />
      </div>
    </center>
  );
}

export default App;
