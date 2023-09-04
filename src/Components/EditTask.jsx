import { Stacked } from '../../assets/Stacked.png';
import { BitX } from '../../assets/BitX.png';
import { EditBx } from '../../assets/EditBx.png';
import { DeleteBx } from '../../assets/DeleteBx.png';
import { AutoChip } from '../../assets/AutoChip.png';
import { DropDown } from '../../assets/DropDown.png';
import { Upload } from '../../assets/Upload.png';
import { BoldBx } from '../../assets/BoldBx.png';
import { ItalicsBx } from '../../assets/ItalicsBx.png';
import { UnderlinBx } from '../../assets/UnderlinBx.png';
import { FontBx } from '../../assets/FontBx.png';
import { LinkBx } from '../../assets/LinkBx.png';
import { ImageBx } from '../../assets/ImageBx.png';


const EditTask = () => {
  return (
    <div className="EditTaskContainer">
        <header className="EditBitX">
            <div className="EditTask">
                <h3>Edit Task</h3>
            </div>
            <div className="BitX">
                <img src={BitX} />
            </div>
        </header>
        <div className="Details">
            <div className="EditDelete">
                <div className="Edit" style={{color: 'white', backgroundColor: 'black', textAlign:'center'}}>
                    <div className="EditBx">
                        <img src={EditBx} />
                        <p>EDIT</p>
                    </div>
                </div>
                <div className="Delete" style={{color: 'white', backgroundColor: 'black', textAlign:'center'}}>
                    <div className="DeleteBx">
                        <img src={DeleteBx} />
                        <p>DELETE</p>
                    </div>
                </div>
            </div>
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
    </div>
  )
}

export default EditTask