import BorderColorIcon from "@mui/icons-material/BorderColor";
import "../../App.css";
const Navbar = () => {
  return (
    <nav className="w-full h-13 bg-blue-600 flex justify-end items-center gap-3 px-4 font-poppins">
      <div className="flex justify-center items-center gap-2">
        <h2 className="text-white text-3xl flex justify-center items-center h-full font-bold">
          NotesApp
        </h2>
        <BorderColorIcon />
      </div>
    </nav>
  );
};

export default Navbar;
