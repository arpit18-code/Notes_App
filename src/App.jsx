import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
function App() {
  const Home = lazy(() => import("./Pages/home"));
  const Important = lazy(() => import("./Pages/important"));
  const Bin = lazy(() => import("./Pages/bin"));
  const Archieve = lazy(() => import("./Pages/archieve"));
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <CircularProgress color="primary" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Important" element={<Important />} />
          <Route path="/Deleted" element={<Bin />} />
          <Route path="/Archived" element={<Archieve />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
