import { TbPinned } from "react-icons/tb";
import { TbPinnedOff } from "react-icons/tb";
import { IoMdArchive } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { AllNotes } from "../../Context/AllNotes/allNotesContext";

export const SingleNoteCard = ({ SingleNote }) => {
  let { dispatchNotes, dispatchImportantNotes } = useContext(AllNotes);
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
  return (
    <div
      className="p-2 flex flex-col gap-2 h-fit rounded-lg bg-yellow-200 border-l-6 border-b-6 border-gray-300 shadow-md shadow-gray-300"
      key={SingleNote.id}
    >
      <div className="flex justify-between items-center text-lg">
        <h3 className="text-lg font-bold">{SingleNote.title}</h3>
        {SingleNote.pinned == true ? (
          <TbPinnedOff
            className="cursor-pointer"
            title="Unpin Note"
            onClick={() =>
              SingleNote.important === true
                ? handleImportantUnPinned(SingleNote.id)
                : dispatchNotes({
                    type: "UnpinNote",
                    payload: SingleNote.id,
                  })
            }
          />
        ) : (
          <TbPinned
            className="cursor-pointer"
            title="Pin Note"
            onClick={() =>
              SingleNote.important === true
                ? handleImportantPinned(SingleNote.id)
                : dispatchNotes({
                    type: "PinNote",
                    payload: SingleNote.id,
                  })
            }
          />
        )}
      </div>
      <hr />
      <p className="text-sm">{SingleNote.note}</p>
      <div className="flex justify-end gap-4 text-lg">
        <IoMdArchive className="cursor-pointer" title="Archive Note" />
        <MdDelete
          className="cursor-pointer"
          title="Delete Note"
          onClick={() =>
            SingleNote.important
              ? dispatchImportantNotes({
                  type: "DeleteImpNote",
                  payload: SingleNote.id,
                })
              : dispatchNotes({
                  type: "DeleteNote",
                  payload: SingleNote.id,
                })
          }
        />
      </div>
      {SingleNote.important ? (
        <div className="ml-auto bg-gray-200 rounded-lg p-2 text-xs">
          Important
        </div>
      ) : null}
    </div>
  );
};
