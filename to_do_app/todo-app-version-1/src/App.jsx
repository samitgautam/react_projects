import "./App.css";
import Addtodo from "./components/Addtodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItem1 from "./components/TodoItem1";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <Addtodo />
      <TodoItem />
      <TodoItem1 />
    </center>
  );
}

export default App;
