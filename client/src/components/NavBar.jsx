export default function NavBar() {
  return (
    <nav className="mt-4 mb-8 flex justify-around h-8">
      <div className="font-semibold self-center">LOGO</div>
      <ul className="flex space-x-10">
        <li className="flex space-x-2 cursor-pointer">
          <div className=" bg-gray-700 w-4 h-4 rounded-full self-center"></div>
          <p className="self-center text-black">Ambulance</p>
        </li>
        <li className="flex space-x-2 cursor-pointer">
          <div className=" bg-gray-400 w-4 h-4 rounded-full self-center"></div>
          <p className="self-center text-gray-500 hover:text-black">Buses</p>
        </li>
        <li className="flex space-x-2 cursor-pointer">
          <div className=" bg-gray-400 w-4 h-4 rounded-full self-center"></div>
          <p className="self-center text-gray-500 hover:text-black">Cabs</p>
        </li>
        <li className="flex space-x-2 cursor-pointer">
          <div className=" bg-gray-400 w-4 h-4 rounded-full self-center"></div>
          <p className="self-center text-gray-500 hover:text-black">Flights</p>
        </li>
      </ul>
      <div>
        <ul className="flex space-x-4">
          <li className="flex space-x-2 cursor-pointer hover:text-gray-600 self-center">
            Home
          </li>
          <li className="flex space-x-2 cursor-pointer hover:text-gray-600 self-center">
            About
          </li>
          <li className="flex space-x-2 cursor-pointer hover:text-gray-600 self-center">
            Contact
          </li>
          <button className=" bg-blue-700 text-white px-4 py-1 hover:bg-blue-600 transition-all">
            Login/Signup
          </button>
        </ul>
      </div>
    </nav>
  );
}
