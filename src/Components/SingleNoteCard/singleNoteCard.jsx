import { TbPinned } from "react-icons/tb";
import { TbPinnedOff } from "react-icons/tb";
import { IoMdArchive } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { AllNotes } from "../../Context/AllNotes/allNotesContext";
import { MdRestore } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";

export const SingleNoteCard = ({ SingleNote }) => {
  let { dispatchNotes, dispatchImportantNotes, dispatchDeletedNotes } =
    useContext(AllNotes);
  let handleImportantUnPinned = (id) => {
    dispatchImportantNotes({
      type: "UnPinImpNote",
      payload: id,
    });
  };
  let handleImportantPinned = (id) => {
    dispatchImportantNotes({
      type: "PinImpNote",
      payload: id,
    });
  };

  let handleUnPinNote = (SingleNote) => {
    if (SingleNote.deleted) {
      dispatchDeletedNotes({
        type: "UnPinNote",
        payload: SingleNote.id,
      });
      return;
    } else if (SingleNote.important) {
      handleImportantUnPinned(SingleNote.id);
    } else {
      dispatchNotes({
        type: "UnpinNote",
        payload: SingleNote.id,
      });
    }
  };

  let handlePinNote = (SingleNote) => {
    if (SingleNote.deleted) {
      dispatchDeletedNotes({
        type: "PinNote",
        payload: SingleNote.id,
      });
      return;
    } else if (SingleNote.important) {
      handleImportantPinned(SingleNote.id);
    } else {
      dispatchNotes({
        type: "PinNote",
        payload: SingleNote.id,
      });
    }
  };

  let handleDeleteNotes = (SingleNote) => {
    if (SingleNote.important) {
      dispatchImportantNotes({
        type: "DeleteImpNote",
        payload: SingleNote.id,
      });
      dispatchDeletedNotes({
        type: "AddDeletedNote",
        payload: SingleNote,
      });
    } else {
      dispatchNotes({
        type: "DeleteNote",
        payload: SingleNote.id,
      });
      dispatchDeletedNotes({
        type: "AddDeletedNote",
        payload: SingleNote,
      });
    }
  };

  let handleRestoreNotes = (SingleNote) => {
    if (SingleNote.important) {
      dispatchImportantNotes({
        type: "RestoreNote",
        payload: SingleNote,
      });
      dispatchDeletedNotes({
        type: "RestoreNote",
        payload: SingleNote.id,
      });
    } else {
      dispatchNotes({
        type: "RestoreNote",
        payload: SingleNote,
      });
      dispatchDeletedNotes({
        type: "RestoreNote",
        payload: SingleNote.id,
      });
    }
  };
  return (
    <div
      className="p-2 flex flex-col gap-2 h-fit rounded-lg bg-linear-to-b from-blue-400 to-blue-100 border-l-6 border-b-6 border-gray-300 shadow-md shadow-gray-300 text-[#001f4d] sm:hover:scale-101"
      key={SingleNote.id}
    >
      <div className="flex justify-between items-center text-lg">
        <h3 className="text-lg font-bold">{SingleNote.title}</h3>
        {SingleNote.pinned == true ? (
          <TbPinnedOff
            className="cursor-pointer"
            title="Unpin Note"
            onClick={() => handleUnPinNote(SingleNote)}
          />
        ) : (
          <TbPinned
            className="cursor-pointer"
            title="Pin Note"
            onClick={() => handlePinNote(SingleNote)}
          />
        )}
      </div>
      <hr />
      <p className="text-sm whitespace-pre-wrap">{SingleNote.note}</p>
      <div className="flex justify-end gap-4 text-lg">
        {SingleNote.deleted ? (
          <RiDeleteBin2Fill
            className="ml-auto cursor-pointer"
            title="Delete permanently"
            onClick={() =>
              dispatchDeletedNotes({
                type: "RestoreNote",
                payload: SingleNote.id,
              })
            }
          />
        ) : (
          <IoMdArchive className="cursor-pointer" title="Archive Note" />
        )}

        {SingleNote.deleted ? (
          <MdRestore
            className="cursor-pointer"
            title="Restore note"
            onClick={() => handleRestoreNotes(SingleNote)}
          />
        ) : (
          <MdDelete
            className="cursor-pointer"
            title="Delete Note"
            onClick={() => handleDeleteNotes(SingleNote)}
          />
        )}
      </div>
      {SingleNote.important ? (
        <div className="ml-auto bg-gray-200 rounded-lg p-2 text-xs">
          Important
        </div>
      ) : null}
    </div>
  );
};
