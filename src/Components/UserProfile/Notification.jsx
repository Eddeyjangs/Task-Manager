import "./Notification.css"

const Notification = () => {
  return (
    <div className='notification-wrapper'>
        <div className='noti'>
            <p className="textfonts zee" >Notification</p>
            <div className='asst'>8 New</div>
        </div>
        
        <div className='noti'>
            <h3 className="textfonts zee" >Congratulation Flora!</h3>
            <p className="textfont zee" >You have completed your task for the week</p>
            <div className="assts">Today</div>
        </div>

        <div className='noti'>
        <h3 className="textfonts zee" >You have a pending task</h3>
            <p className="textfont zee" >5 hours ago</p>
            <div className="assts" >Yesterday</div>
        </div>
        
        <div className='noti'>
        <h3 className="textfonts zee">You just added new task</h3>
            <p className="textfont zee">You have 10 new tasks</p>
            <div className="assts" >11 Aug</div>
        </div>
        
    </div>
  )
}

export default Notification