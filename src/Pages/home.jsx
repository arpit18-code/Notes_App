import Navbar from "../Components/Navbar/navbar";
import Sidebar from "../Components/Sidebar2/sidebar";
import NotesCard from "../Components/NotesCard/notescard";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <NotesCard />
      </div>
    </>
  );
};

export default Home;
