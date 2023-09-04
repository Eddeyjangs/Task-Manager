import "./TaskProgress.css"


const TaskProgress = () => {
    const userTask = {
        totalTask: "10",
        pendingTask: "8",
        inProgressTask: "2",
        completedTask: "5",
      };

  return (
    <div className='TaskProgress-container'>
        <div className="cards">
            <div className="card1 card">
                <p>{userTask.totalTask}</p>
                <p className="card-text">Total Task</p>
            </div>
            <div className="card2 card">
                <p>{userTask.pendingTask}</p>
                <p className="card-text">Pending</p>
            </div>
            <div className="card3 card">
                <p>{userTask.inProgressTask}</p>
                <p className="card-text">In Progress</p>
            </div>
            <div className="card4 card">
                <p>{userTask.completedTask}</p>
                <p className="card-text">Completed</p>
            </div>
        </div>
    </div>
  );
};

export default TaskProgress;