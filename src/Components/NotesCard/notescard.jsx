import { AddNote } from "../AddNote/addnote";
import { AllNotesCard } from "../AllNotesCard/AllNotesCard";
const Notescard = () => {
  return (
    <>
      <main className="flex flex-col gap-3 p-2 select-none w-3/4 my-2">
        <AddNote />
        <AllNotesCard />
      </main>
    </>
  );
};

export default Notescard;
