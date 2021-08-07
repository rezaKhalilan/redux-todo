import "./App.css";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h2 className="header-text">TODO REDUX</h2>
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;
