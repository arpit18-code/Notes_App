import { v4 as uuidv4 } from "uuid";
export const ImpNotesReducer = (state, action) => {
  switch (action.type) {
    case "AddImpNote":
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.NoteTitle,
          note: action.payload.NoteText,
          important: true,
          pinned: false,
          time: Date.now(),
        },
      ];
    case "DeleteImpNote":
      return state.filter((singleNote) => singleNote.id != action.payload);
    case "PinImpNote":
      let PinnedNote = state.filter((note) => note.id === action.payload);
      PinnedNote[0].pinned = true;
      let unPinnedNote = state.filter((note) => note.id !== action.payload);
      return [PinnedNote[0], ...unPinnedNote];
    case "UnPinImpNote":
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
