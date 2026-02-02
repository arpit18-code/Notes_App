import Navbar from "../Components/Navbar/navbar";
import Sidebar from "../Components/Sidebar2/sidebar";
import NotesCard from "../Components/NotesCard/notescard";
import { useContext, useEffect } from "react";
import { AllNotes } from "../Context/AllNotes/allNotesContext";
import "../App.css";
const Home = () => {
  let { setCurrentPage } = useContext(AllNotes);
  useEffect(() => {
    setCurrentPage("Home");
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-start sm:justify-between bg-gray-100 min-h-screen h-auto font-poppins">
        <Sidebar />
        <NotesCard />
      </div>
    </>
  );
};

export default Home;
