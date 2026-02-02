export const ArchiveNotesReducer = (state, action) => {
  switch (action.type) {
    case "ArchiveNote":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          note: action.payload.note,
          important: action.payload.important,
          time: action.payload.time,
          pinned: false,
          archived: true,
          deleted: false,
        },
      ];
    case "UnArchiveNote":
      return state.filter((note) => note.id !== action.payload);
    case "RestoreNote":
      action.payload.deleted = false;
      action.payload.pinned = false;
      return [...state, action.payload].sort((a, b) => a.time - b.time);
    case "PinArchiveNote":
      let PinnedNote = state.filter((note) => note.id === action.payload);
      PinnedNote[0].pinned = true;
      let unPinnedNote = state.filter((note) => note.id !== action.payload);
      return [PinnedNote[0], ...unPinnedNote];
    case "UnPinArchiveNote":
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
