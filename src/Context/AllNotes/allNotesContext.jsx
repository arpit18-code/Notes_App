import { createContext } from "react";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const AllNotes = createContext();

const AllNotesProvider = ({ children }) => {
  let reducer = (state, action) => {
    switch (action.type) {
      case "AddNote":
        return [
          ...state,
          {
            id: uuidv4(),
            title: action.payload.NoteTitle,
            note: action.payload.NoteText,
            important: false,
            pinned: false,
          },
        ];
      case "DeleteNote":
        let newState = state.filter(
          (singleNote) => singleNote.id != action.payload,
        );
        return newState;
      case "PinNote":
        let pinnedNote = state.filter(
          (singleNote) => singleNote.id === action.payload,
        );
        pinnedNote[0].pinned = true;
        let unpinnedNotes = state.filter(
          (singleNote) => singleNote.id !== action.payload,
        );
        return [pinnedNote[0], ...unpinnedNotes];
      case "UnpinNote":
        return state.map((singleNote) =>
          singleNote.id === action.payload
            ? { ...singleNote, pinned: false }
            : singleNote,
        );
    }
  };
  let [Notes, dispatchNotes] = useReducer(reducer, []);
  return (
    <AllNotes.Provider value={{ Notes, dispatchNotes }}>
      {children}
    </AllNotes.Provider>
  );
};

export default AllNotesProvider;
export { AllNotes };
