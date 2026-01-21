import AddCircleIcon from "@mui/icons-material/AddCircle";
export const AddNote = () => {
  return (
    <div className="border border-black p-4 min-w-40 w-auto max-w-80 rounded-2xl ml-auto shadow-lg bg-yellow-200 min-h-30 h-auto">
      <input
        type="text"
        placeholder="Enter title"
        className="my-1 focus:outline-none h-auto w-full font-bold"
      />
      <hr className="bg-gray-700" />
      <input
        type="text"
        placeholder="Enter note"
        className="my-1 focus:outline-none h-auto w-full"
      />
      <div className="flex justify-end">
        <AddCircleIcon className="cursor-pointer active:scale-90" />
      </div>
    </div>
  );
};
