import Sidebar from "../Components/Sidebar2/sidebar";
import Navbar from "../Components/Navbar/navbar";
import { SingleNoteCard } from "../Components/SingleNoteCard/singleNoteCard";
import { useContext } from "react";
import { AllNotes } from "../Context/AllNotes/allNotesContext";
const Important = () => {
  let { importantNotes } = useContext(AllNotes);
  return (
    <>
      <Navbar />
      <div className="flex justify-start sm:justify-between bg-gray-100 min-h-screen h-auto">
        <Sidebar />
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 w-full">
          {importantNotes.length > 0 &&
            importantNotes?.map((singleNote) => {
              return (
                <SingleNoteCard key={singleNote.id} SingleNote={singleNote} />
              );
            })}
        </main>
      </div>
    </>
  );
};

export default Important;
