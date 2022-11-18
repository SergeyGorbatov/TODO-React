import { Routes, Route } from "react-router-dom";
import Todos from "./components/Todos/Todos";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
    </Routes>
  );
};

export default App;
