import { AddNote } from "../AddNote/addnote";
import { AllNotesCard } from "../AllNotesCard/AllNotesCard";
import SaveButton from "../SaveButton/savebutton";
const Notescard = () => {
  return (
    <>
      <main className="flex flex-col gap-3 p-2 select-none w-3/4 my-2">
        <AddNote />
        <div className="flex justify-end">
          <SaveButton />
        </div>
        <AllNotesCard />
      </main>
    </>
  );
};

export default Notescard;
