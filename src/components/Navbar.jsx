import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer">Saiful's Shop</div>
        <ul className="md:flex md:items-center">
          <li className="md:ml-8 text-xl">
            <Link className="text-gray-800 hover:text-gray-400 duration-500" to={"/"}>Home</Link>
          </li>
          <li className="md:ml-8 text-xl">
            <Link className="text-gray-800 hover:text-gray-400 duration-500" to={"/cart"}>Cart</Link>
          </li>
          <span className="md:ml-8 text-xl">items:{items.length}</span>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
