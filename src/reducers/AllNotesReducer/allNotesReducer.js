import { v4 as uuidv4 } from "uuid";
export const AllNotesReducer = (state, action) => {
  switch (action.type) {
    case "AddNote":
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.NoteTitle,
          note: action.payload.NoteText,
          pinned: false,
          time: Date.now(),
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
      let newstate = state
        .map((note) => {
          if (note.id === action.payload) {
            note.pinned = false;
            return note;
          }
          return note;
        })
        .sort((a, b) => a.time - b.time);
      let pinnedNotes = newstate.filter((note) => note.pinned === true);
      let notPinnedNotes = newstate.filter((note) => note.pinned === false);
      return [...pinnedNotes, ...notPinnedNotes];
  }
};
