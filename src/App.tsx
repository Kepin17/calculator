import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/Home";
import Calculator from "./components/pages/test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
