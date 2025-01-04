import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className=" md:flex sm:block justify-between p-4 items-center">
      {/* logo */}
      <div>
        <h2 className="md:text-3xl sm:text-2xl font-bold">Recipe Calories</h2>
      </div>
      {/* list items */}
      <div>
        <ul className="flex gap-4 text-lg">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Recipe</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
      </div>
      {/* seach input */}
      <div className="border rounded-3xl flex items-center pl-2 font-semibold text-lg">
        <CiSearch className="w-6 h-8" />
        <input type="text" placeholder="Search" />
      </div>
      {/* logo icon */}
      <div className="ml-3 ">
        <FaRegUser className="w-8 h-8 bg-green-500 p-2 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
