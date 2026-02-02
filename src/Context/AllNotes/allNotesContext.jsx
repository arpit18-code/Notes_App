import { createContext } from "react";
import { useReducer, useState } from "react";
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
  let [currentPage, setCurrentPage] = useState("Home");
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
