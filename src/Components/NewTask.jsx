import { Stacked } from '../../assets/Stacked.png';
import { BitX } from '../../assets/BitX.png';
import { AutoChip } from '../../assets/AutoChip.png';
import { DropDown } from '../../assets/DropDown.png';
import { Upload } from '../../assets/Upload.png';
import { BoldBx } from '../../assets/BoldBx.png';
import { ItalicsBx } from '../../assets/ItalicsBx.png';
import { UnderlinBx } from '../../assets/UnderlinBx.png';
import { FontBx } from '../../assets/FontBx.png';
import { LinkBx } from '../../assets/LinkBx.png';
import { ImageBx } from '../../assets/ImageBx.png';



const NewTask = () => {
  return (
    <div className="NewTaskContainer">
        <header className="NewTaskBitX">
            <div className="EditTask">
                <h3>New Task</h3>
            </div>
            <div className="BitX">
                <img src={BitX} />
            </div>
        </header>
        <div className='Details'>
            <div className="Title">
                <legend>Completed Charts & Maps</legend>
            </div>
            <div className="DueDate">
                <legend>7 April, 2022</legend>
            </div>
            <div className="Label">
                <div className="AutoChip">
                    <img src={AutoChip} />
                </div>
                <div className="DropDown">
                    <img src={DropDown} />
                </div>
            </div>
            <div className="Assigned">
                <p>Assigned</p>
                <img src={Stacked} />
            </div>
            <div className="Attachment">
                <p>Attachments</p>
                <div className="Upload">
                    <img src={Upload} />
                </div>
            </div>
            <div className="Comment">
                <p>Comment</p>
                <textfield placeholder='Write a Comment...' />
                <div className="ActionBtn">
                    <div className="BoldBx">
                        <img src={BoldBx} />
                    </div>
                    <div className="ItalicsBx">
                        <img src={ItalicsBx} />
                    </div>
                    <div className="UnderlineBx">
                        <img src={UnderlinBx} />
                    </div>
                    <div className="FontBx">
                        <img src={FontBx} />
                    </div>
                    <div className="LinkBx">
                        <img src={LinkBx} />
                    </div>
                    <div className="ImageBx">
                        <img src={ImageBx} />
                    </div>
                </div>
            </div>
        </div>
        <div className='Add' style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>
            <p>Add</p>
        </div>
    </div>
  )
}

export default NewTask