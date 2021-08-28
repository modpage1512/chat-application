import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div className="container">
      <div className="row">
        <TodoInput/>
        <Todolist/>
      </div>
    </div>
  );
}

export default App;
