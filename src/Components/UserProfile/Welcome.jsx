import WelcomeUser from "../../assets/WelcomeUser.png";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="user-details">
        <h1 className="user-name">Hello Edobor!</h1>
        <p className="user-text">
          Get things done and start your day more productivity
        </p>
      </div>
      <div className="img-container">
        <img className="user" src={WelcomeUser} alt="welcomeUser" />
      </div>
    </div>
  );
};

export default Welcome;
