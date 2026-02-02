export const DeletedNotesReducer = (state, action) => {
  switch (action.type) {
    case "AddDeletedNote":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          note: action.payload.note,
          important: action.payload.important,
          time: action.payload.time,
          deleted: true,
          pinned: false,
          archived: action.payload.archived,
        },
      ];
    case "RestoreNote":
      return [...state].filter((note) => note.id != action.payload);
    case "PinNote":
      let pinnedNote = state.filter(
        (singleNote) => singleNote.id === action.payload,
      );
      pinnedNote[0].pinned = true;
      let unpinnedNotes = state.filter(
        (singleNote) => singleNote.id !== action.payload,
      );
      return [pinnedNote[0], ...unpinnedNotes];
    case "UnPinNote":
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
    case "fetchNotes":
      return Array.isArray(action.payload) ? action.payload : [];
  }
};
