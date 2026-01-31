import AddCircleIcon from "@mui/icons-material/AddCircle";
import { MdLabelImportantOutline } from "react-icons/md";
import { useState, useContext } from "react";
import { AllNotes } from "../../Context/AllNotes/allNotesContext";
import { MdLabelImportant } from "react-icons/md";
export const AddNote = () => {
  let [title, setTitle] = useState("");
  let [note, setNote] = useState("");
  let [Important, setImportant] = useState(false);
  let { dispatchNotes, dispatchImportantNotes } = useContext(AllNotes);
  let handleAddNote = () => {
    if (Important) {
      dispatchImportantNotes({
        type: "AddImpNote",
        payload: { NoteTitle: title, NoteText: note },
      });
    } else {
      dispatchNotes({
        type: "AddNote",
        payload: { NoteTitle: title, NoteText: note },
      });
    }
    setTitle("");
    setNote("");
    setImportant(false);
  };
  return (
    <div className="p-4 min-w-40 w-auto max-w-80 rounded-2xl ml-auto shadow-lg bg-yellow-200 min-h-30 h-auto bg-linear-to-b from-blue-400 to-blue-100 border-l-6 border-gray-300">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Enter title"
          className="my-1 focus:outline-none h-auto w-full font-bold"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {Important ? (
          <MdLabelImportant
            className="h-8 w-8 cursor-pointer"
            title="Remove important"
            onClick={() => setImportant((Important) => !Important)}
          />
        ) : (
          <MdLabelImportantOutline
            className="h-8 w-8 cursor-pointer"
            title="Set important"
            onClick={() => setImportant((Important) => !Important)}
          />
        )}
      </div>
      <textarea
        type="text"
        placeholder="Enter note"
        className="my-1 focus:outline-none min-h-5 h-auto w-full text-sm"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
      <div className="flex justify-end">
        <AddCircleIcon
          sx={{
            opacity: title.trim() && note.trim() ? "100%" : "50%",
            cursor: title.trim() && note.trim() ? "pointer" : "normal",
            "&:active": {
              transform:
                title.trim() && note.trim() ? "scale(90%)" : "scale(100%)",
            },
          }}
          title="Add Note"
          onClick={() => (title.trim() && note.trim() ? handleAddNote() : null)}
        />
      </div>
    </div>
  );
};
