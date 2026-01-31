import Sidebar from "../Components/Sidebar2/sidebar";
import Navbar from "../Components/Navbar/navbar";
import { SingleNoteCard } from "../Components/SingleNoteCard/singleNoteCard";
import { useContext } from "react";
import { AllNotes } from "../Context/AllNotes/allNotesContext";
const Bin = () => {
  let { deletedNotes } = useContext(AllNotes);
  return (
    <>
      <Navbar />
      <div className="flex justify-start sm:justify-between bg-gray-100 min-h-screen h-auto font-poppins">
        <Sidebar />
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-2 p-4 w-full">
          {deletedNotes.length > 0 &&
            deletedNotes?.map((singleNote) => {
              return (
                <SingleNoteCard key={singleNote.id} SingleNote={singleNote} />
              );
            })}
        </main>
      </div>
    </>
  );
};

export default Bin;
