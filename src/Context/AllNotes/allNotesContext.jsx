import { createContext } from "react";
import { useReducer } from "react";
import { AllNotesReducer } from "../../reducers/AllNotesReducer/allNotesReducer";
import { ImpNotesReducer } from "../../reducers/ImpNotesReducer/impNotesReducer";
import { DeletedNotesReducer } from "../../reducers/DeletedNotesReducer/deletedNotesReducer";
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
  return (
    <AllNotes.Provider
      value={{
        Notes,
        dispatchNotes,
        importantNotes,
        dispatchImportantNotes,
        deletedNotes,
        dispatchDeletedNotes,
      }}
    >
      {children}
    </AllNotes.Provider>
  );
};

export default AllNotesProvider;
export { AllNotes };
