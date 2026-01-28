import { createContext } from "react";
import { useReducer, useEffect, useState } from "react";
import { AllNotesReducer } from "../../reducers/AllNotesReducer/allNotesReducer";
import { ImpNotesReducer } from "../../reducers/ImpNotesReducer/impNotesReducer";
const AllNotes = createContext();

const AllNotesProvider = ({ children }) => {
  let [Notes, dispatchNotes] = useReducer(AllNotesReducer, []);
  let [importantNotes, dispatchImportantNotes] = useReducer(
    ImpNotesReducer,
    [],
  );
  return (
    <AllNotes.Provider
      value={{ Notes, dispatchNotes, importantNotes, dispatchImportantNotes }}
    >
      {children}
    </AllNotes.Provider>
  );
};

export default AllNotesProvider;
export { AllNotes };
