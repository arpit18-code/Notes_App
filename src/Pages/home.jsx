import Navbar from "../Components/Navbar/navbar";
import Sidebar from "../Components/Sidebar2/sidebar";
import NotesCard from "../Components/NotesCard/notescard";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-start sm:justify-between bg-gray-100 min-h-screen h-auto">
        <Sidebar />
        <NotesCard />
      </div>
    </>
  );
};

export default Home;
