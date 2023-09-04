import "./Layout.css";
import SideBar from "../Components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import SearchBar from "../Components/SearchBar/SearchBar";

const Layout = () => {
  return (
    <div className="layout">
      <div className="left">
      <SideBar />

      </div>
      <div className="right-layout">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
