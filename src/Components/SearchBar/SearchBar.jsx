import { BsSearch } from "react-icons/bs";
import { RxSwitch } from "react-icons/rx";
import { MdOutlineDarkMode } from "react-icons/md";
import {  MdOutlineNotificationAdd } from "react-icons/md";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="header-searchbar">
      <form className="search-form">
        <div className="search-icon">
          <BsSearch />
        </div>

        <input className="search-term" type="text" placeholder="Search" />
      </form>
      <div className="icons">
          <RxSwitch />
          <MdOutlineDarkMode />
          <MdOutlineNotificationAdd />
      </div>
    </div>
  );
};

export default SearchBar;
