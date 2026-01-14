import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Important from "./Pages/important";
import Bin from "./Pages/bin";
import Archieve from "./Pages/archieve";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/important" element={<Important />} />
        <Route path="/bin" element={<Bin />} />
        <Route path="/archieve" element={<Archieve />} />
      </Routes>
    </>
  );
}

export default App;
