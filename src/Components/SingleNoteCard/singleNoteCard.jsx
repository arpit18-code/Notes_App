import { TbPinned } from "react-icons/tb";
import { TbPinnedOff } from "react-icons/tb";
import { IoMdArchive } from "react-icons/io";
import { MdUnarchive } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useContext, useState } from "react";
import { AllNotes } from "../../Context/AllNotes/allNotesContext";
import { MdRestore } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";

export const SingleNoteCard = ({ SingleNote }) => {
  let {
    dispatchNotes,
    dispatchImportantNotes,
    dispatchDeletedNotes,
    dispatchArchiveNotes,
  } = useContext(AllNotes);
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
    } else if (SingleNote.important && SingleNote.archived === false) {
      handleImportantUnPinned(SingleNote.id);
    } else if (
      (SingleNote.important || !SingleNote.important) &&
      SingleNote.archived === true
    ) {
      dispatchArchiveNotes({
        type: "UnPinArchiveNote",
        payload: SingleNote.id,
      });
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
    } else if (SingleNote.important && SingleNote.archived === false) {
      handleImportantPinned(SingleNote.id);
    } else if (
      (SingleNote.important || !SingleNote.important) &&
      SingleNote.archived === true
    ) {
      dispatchArchiveNotes({
        type: "PinArchiveNote",
        payload: SingleNote.id,
      });
    } else {
      dispatchNotes({
        type: "PinNote",
        payload: SingleNote.id,
      });
    }
  };

  let handleDeleteNotes = (SingleNote) => {
    if (SingleNote.important && SingleNote.archived === false) {
      console.log("1st if statement implemented of deleted");
      dispatchImportantNotes({
        type: "DeleteImpNote",
        payload: SingleNote.id,
      });
      dispatchDeletedNotes({
        type: "AddDeletedNote",
        payload: SingleNote,
      });
    } else if (
      (SingleNote.important && SingleNote.archived === true) ||
      (!SingleNote.important && SingleNote.archived === true)
    ) {
      console.log("2nd if statement implemented of deleted");
      dispatchArchiveNotes({
        type: "UnArchiveNote",
        payload: SingleNote.id,
      });
      dispatchDeletedNotes({
        type: "AddDeletedNote",
        payload: SingleNote,
      });
    } else {
      console.log("3rd if statement implemented of deleted");
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
    if (SingleNote.important && SingleNote.archived === false) {
      console.log("1st statement of if statement implemented in restore notes");
      dispatchImportantNotes({
        type: "RestoreNote",
        payload: SingleNote,
      });
      dispatchDeletedNotes({
        type: "RestoreNote",
        payload: SingleNote.id,
      });
    } else if (
      (SingleNote.important && SingleNote.archived === true) ||
      (!SingleNote.important && SingleNote.archived === true)
    ) {
      console.log("2nd if statement implemented in restore notes");
      dispatchArchiveNotes({
        type: "RestoreNote",
        payload: SingleNote,
      });
      dispatchDeletedNotes({
        type: "RestoreNote",
        payload: SingleNote.id,
      });
    } else {
      console.log("3rd statement of if statement implemented in restore notes");
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

  let handleArchiveNotes = (SingleNote) => {
    if (SingleNote.important) {
      dispatchArchiveNotes({
        type: "ArchiveNote",
        payload: SingleNote,
      });
      dispatchImportantNotes({
        type: "DeleteImpNote",
        payload: SingleNote.id,
      });
    } else {
      dispatchArchiveNotes({
        type: "ArchiveNote",
        payload: SingleNote,
      });
      dispatchNotes({
        type: "DeleteNote",
        payload: SingleNote.id,
      });
    }
  };

  let handleUnArchiveNote = (SingleNote) => {
    if (SingleNote.important) {
      dispatchArchiveNotes({
        type: "UnArchiveNote",
        payload: SingleNote.id,
      });
      dispatchImportantNotes({
        type: "UnArchiveNote",
        payload: SingleNote,
      });
    } else {
      dispatchArchiveNotes({
        type: "UnArchiveNote",
        payload: SingleNote.id,
      });
      dispatchNotes({
        type: "UnArchiveNote",
        payload: SingleNote,
      });
    }
  };
  return (
    <div
      className="p-2 flex flex-col gap-2 h-fit rounded-lg bg-linear-to-b from-blue-400 to-blue-100 border-l-6 border-b-6 border-gray-300 shadow-md shadow-gray-300 text-[#001f4d] sm:hover:scale-104 transition-all duration-300 ease-out"
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
        {SingleNote.deleted === true ? (
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
        ) : null}

        {SingleNote.archived === true && SingleNote.deleted === false ? (
          <MdUnarchive
            className="cursor-pointer"
            title="UnArchive Note"
            onClick={() => handleUnArchiveNote(SingleNote)}
          />
        ) : null}

        {SingleNote.archived === false && SingleNote.deleted === false ? (
          <IoMdArchive
            className="cursor-pointer"
            title="Archive Note"
            onClick={() => handleArchiveNotes(SingleNote)}
          />
        ) : null}

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
