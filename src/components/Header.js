import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const searchCahce = useSelector(store => store.search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCahce[searchQuery]) {
        setSuggestions(searchCahce[searchQuery])
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    dispatch(cacheResults({[searchQuery]:json[1]}))
    setSuggestions(json[1]);
  };

  return (
    <div className="grid grid-flow-col shadow-lg sm:w-auto">
      <div className="flex p-2 col-span-1">
        <img
          onClick={() => handleToggleMenu()}
          className="h-8 cursor-pointer hover:bg-gray-200 hover:rounded-full"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        ></img>
        <img
          className="md:h-10 md:block sm:grid"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="logo"
        ></img>
      </div>
      <div className="col-span-10 p-2 ml-20">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border border-gray-400 w-1/2 rounded-l-full p-2"
            placeholder="Search"
          ></input>
          {showSuggestions && (
            <div className="absolute bg-white w-[43rem] py-2 px-5 shadow-lg rounded-lg">
              <ul>
                {suggestions &&
                  suggestions.map((s) => (
                    <li className="shadow-sm hover:bg-gray-100 m-2">{s}</li>
                  ))}
              </ul>
            </div>
          )}
          <button className="rounded-r-full border border-gray-400 bg-gray-200 p-2">
            Search
          </button>
        </div>
      </div>
      <div className="p-2 col-span-1">
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="profile"
        ></img>
      </div>
    </div>
  );
};

export default Header;
