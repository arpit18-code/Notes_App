import { useContext } from "react";
import { AllNotes } from "../../Context/AllNotes/allNotesContext";
import { SingleNoteCard } from "../SingleNoteCard/singleNoteCard";
export const AllNotesCard = () => {
  let { Notes } = useContext(AllNotes);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Notes &&
        Notes?.map((SingleNote) => {
          return <SingleNoteCard SingleNote={SingleNote} />;
        })}
    </div>
  );
};
