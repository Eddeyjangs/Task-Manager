import  Stacked  from "../../assets/Stacked.png";
import  TimelineDotRed from "../../assets/TimelineDotRed.png";
import  Connector  from "../../assets/Connector.png";
import  TimelineDotBlue from "../../assets/TimelineDotBlue.png";
import TimelineDotYellow from "../../assets/TimelineDotYellow.png";
import UserImage from "../../assets/UserImage.png";
import "./TodayTask.css"


const TodayTask = () => {
  return (
    <div className="TodayTaskFrame">
      <div className="TodayTask">
        <h2>Today Task</h2>
      </div>
      <div className="TaskDetails">
        <div className="learn">
          <div className="TimeLine">
            <img src={TimelineDotRed} alt="TimeLineDot" />
          </div>
          <div className="TimeLineText">
            <h3>Learn React</h3>
          </div>
          <div className="review">
            <p>12 min ago</p>
          </div>
        </div>
        <div className="CreateReact">
          <div className="TimeLine">
            <img src={Connector} alt="Connector" />
          </div>
          <div className="TimeLineText">
            <p>Create a simple website with reacts</p>
          </div>
        </div>
        <div className="DoResponsive">
          <div className="TimeLine">
            <img src={TimelineDotBlue} alt="TimeLineDot" />
          </div>
          <div className="TimeLineText">
            <h3>Do a responsive landing page</h3>
          </div>
          <div className="review">
            <p>45 min ago</p>
          </div>
        </div>
        <div className="Project CreateReact">
          <div className="TimeLine">
            <img src={Connector} alt="Connector" />
          </div>
          <div className="TimeLineText">
            <p>Project meeting with Edobor @10:15am</p>
          </div>
        </div>
        <div className="MixedIcons">
          <div className="TimeLine">
            <img src={Connector} alt="connector" />
          </div>
          <div className="UserImage">
            <img src={UserImage} alt="userimage" />
          </div>
          <div className="Details">
            <h3>Edobor Iweka (Client)</h3>
            <p>Project meeting with Edobor @10:15am</p>
          </div>
        </div>
        <div className="CreateNew">
          <div className="TimeLine">
            <img src={TimelineDotYellow} alt="TimeLineDot" />
          </div>
          <div className="TimeLineText">
            <h3 className="text">Create a new react project for client</h3>
          </div>
          <div className="review">
            <p>1 hr ago </p>
          </div>
        </div>
        <div className="Team CreateReact">
          <div className="TimeLine">
            <img src={Connector} alt="Connector" />
          </div>
          <div className="TimeLineText">
            <p>5 team members in a project</p>
          </div>
        </div>
        <div className="MembersImage CreateReact">
          <div className="StackedWrapper">
            <img src={Stacked} alt="stacked-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayTask;
