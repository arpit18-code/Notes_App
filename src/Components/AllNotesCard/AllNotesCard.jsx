import { useContext } from "react";
import { AllNotes } from "../../Context/AllNotes/allNotesContext";
import { TbPinned } from "react-icons/tb";
import { TbPinnedFilled } from "react-icons/tb";
import { IoMdArchive } from "react-icons/io";
import { MdDelete } from "react-icons/md";
export const AllNotesCard = () => {
  let { Notes, dispatchNotes } = useContext(AllNotes);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Notes &&
        Notes?.map((SingleNote) => {
          return (
            <div
              className="p-2 flex flex-col gap-2 h-fit rounded-lg bg-yellow-200 border-l-6 border-b-6 border-gray-300 shadow-md shadow-gray-300"
              key={SingleNote.id}
            >
              <div className="flex justify-between items-center text-lg">
                <h3 className="text-lg font-bold">{SingleNote.title}</h3>
                {SingleNote.pinned == true ? (
                  <TbPinnedFilled
                    className="cursor-pointer"
                    title="Unpin Note"
                    onClick={() =>
                      dispatchNotes({
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
                      dispatchNotes({
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
                    dispatchNotes({
                      type: "DeleteNote",
                      payload: SingleNote.id,
                    })
                  }
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};
