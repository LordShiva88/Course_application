import { Button } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const App = () => {
  return (
    <div>
      <h1 className="secondary-bg">Hello World</h1>
      <Button variant="contained">Hello world</Button>

      <div className="flex rounded-full shadow-sm justify-between items-center">
        <div className="flex items-center">
          <CiSearch className="text-3xl ml-5" />
          <input
            type="text"
            className="h-14 w-96 pr-8 pl-5  z-0 focus:outline-none"
            placeholder="Search anything..."
          />
        </div>
        <button className="rounded-full primary-bg w-12 h-12 text-center text-white hover:">
          <FaArrowRightLong className="text-3xl font-bold mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default App;
