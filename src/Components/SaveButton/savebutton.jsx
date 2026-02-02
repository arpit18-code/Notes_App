import { useContext } from "react";
import { AllNotes } from "../../Context/AllNotes/allNotesContext";
const SaveButton = () => {
  let { Notes, importantNotes, deletedNotes, archiveNotes } =
    useContext(AllNotes);

  const handleSaveAllNotes = () => {
    const notesData = {
      Notes,
      importantNotes,
      archiveNotes,
      deletedNotes,
    };

    localStorage.setItem("notes", JSON.stringify(notesData));
  };

  return (
    <button
      className="bg-[#0052CC] hover:bg-[#003D99] active:bg-[#003966] text-white p-2 text-center active:scale-95 w-25 rounded-lg text-sm cursor-pointer mb-3"
      onClick={handleSaveAllNotes}
    >
      Save Notes
    </button>
  );
};

export default SaveButton;
