import "./SideBar.css";
import UserImage from "../../assets/UserImage.png";
import { SideBarData } from "./SideBarData";
import { Link } from 'react-router-dom';

const SideBar = () => {
  const userDetails = {
    image: UserImage,
    name: "Edobor Iweka",
    email: "iwekae@gmail.com"
  };

  return (
    <main className="sidebar-components">
      <ul className="nav-menu-items">
          {SideBarData.map((item, index) => {
            return (
                <Link 
                key={index}
                  to={item.path} className="list-item">
                  <img src={item.icon} alt="" />
                  <span className="item-title">{item.title}</span>
                </Link>
              
            );
          })}
          </ul>

      <div className="lower-nav-menu">
        <div className="add-task-btn">
          <Link to="/dashboard/tasks">
            <button className="add-btn">+ Add New Task</button>
          </Link>
        </div>
        <div className="profile-card">
          <div className="profile-pic">
            <img src={userDetails.image} alt="" />
          </div>
          <div className="username-email">
            <div className="details">{userDetails.name}</div>
            <div className="email">{userDetails.email}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
