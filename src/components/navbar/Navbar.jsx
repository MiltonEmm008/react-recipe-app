import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

function Navbar() {
  const { searchParams, setSearchParams, handleSubmit, setRandomRecipe } =
    useContext(GlobalContext);

  console.log(searchParams);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          className={"text-black dark:text-gray-200 dark:hover:text-white hover:text-gray-600 hover:underline duration-200"}
        >
          Food Recipes
        </NavLink>
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          className="bg-white/75 dark:bg-slate-800 dark:text-gray-200 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 dark:shadow-red-900 focus:shadow-red-200 dark:focus:shadow-red-950 duration-300 hover:shadow-red-200 dark:hover:shadow-red-950 hover:bg-red-50 dark:hover:bg-red-950 hover:scale-105 focus:scale-105"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            onClick={setRandomRecipe}
            to={"/"}
            className={"text-black dark:text-gray-200 dark:hover:text-white hover:text-gray-500 hover:underline duration-200"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={"text-black dark:text-gray-200 dark:hover:text-white hover:text-gray-500 hover:underline duration-200"}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
