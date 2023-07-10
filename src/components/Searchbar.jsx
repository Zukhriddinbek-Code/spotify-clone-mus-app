/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable operator-linebreak */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-return */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="zuhriddin-spotify-clone" className="sr-only">
        Search Songs
      </label>

      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-filed"
          autoComplete="off"
          id="search-field"
          placeholder="zuhriddin-songs"
          type="search"
          value=""
          onChange={() => {}}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};
export default Searchbar;
