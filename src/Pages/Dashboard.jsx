import Welcome from "../Components/UserProfile/Welcome";
import TaskProgress from "../Components/UserProfile/TaskProgress";
import Notification from "../Components/UserProfile/Notification";
import TodayTask from "../Components/UserTask/TodayTask";
import Calendar from "../Components/UserTask/Calendar";

const Dashboard = () => {
  return (
    <div style={{width: "100%"}}>
      <div style={{width: "100%"}}>
        <div  style={{width: "60%", display: "flex", flexDirection: "column"}}>
          <Welcome />
          <TaskProgress />
        </div>
        <div style={{width: "38%", marginLeft: "5.4rem"}}>
          <Notification />
        </div>
      </div>
      <div style={{display:"flex", width: "100%", gap: "1rem"}}>
        <TodayTask />
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;
