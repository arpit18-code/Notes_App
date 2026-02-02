import { createContext } from "react";
import { useReducer, useState, useEffect } from "react";
import { AllNotesReducer } from "../../reducers/AllNotesReducer/allNotesReducer";
import { ImpNotesReducer } from "../../reducers/ImpNotesReducer/impNotesReducer";
import { DeletedNotesReducer } from "../../reducers/DeletedNotesReducer/deletedNotesReducer";
import { ArchiveNotesReducer } from "../../reducers/ArchiveNotesReducer/archiveNotesReducer";
const AllNotes = createContext();

const AllNotesProvider = ({ children }) => {
  let [Notes, dispatchNotes] = useReducer(AllNotesReducer, []);
  let [importantNotes, dispatchImportantNotes] = useReducer(
    ImpNotesReducer,
    [],
  );
  let [deletedNotes, dispatchDeletedNotes] = useReducer(
    DeletedNotesReducer,
    [],
  );
  let [archiveNotes, dispatchArchiveNotes] = useReducer(
    ArchiveNotesReducer,
    [],
  );
  let [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);

      dispatchNotes({
        type: "fetchNotes",
        payload: parsedNotes.Notes || [],
      });
      dispatchImportantNotes({
        type: "fetchNotes",
        payload: parsedNotes.importantNotes || [],
      });
      dispatchArchiveNotes({
        type: "fetchNotes",
        payload: parsedNotes.archiveNotes || [],
      });
      dispatchDeletedNotes({
        type: "fetchNotes",
        payload: parsedNotes.deletedNotes || [],
      });
    }
  }, []);
  return (
    <AllNotes.Provider
      value={{
        Notes,
        dispatchNotes,
        importantNotes,
        dispatchImportantNotes,
        deletedNotes,
        dispatchDeletedNotes,
        archiveNotes,
        dispatchArchiveNotes,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AllNotes.Provider>
  );
};

export default AllNotesProvider;
export { AllNotes };
