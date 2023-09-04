import VerticalDot from "../assets/VerticalDot.png";
import InProgressChip from "../assets/InProgressChip.png";
import InProgressChipTwo from "../assets/InProgressChipTwo.png";
import PaperClip from "../assets/PaperClip.png";
import Chat from "../assets/Chat.png";
import Stacked from "../assets/Stacked.png";
import InReviewChip from "../assets/InReviewChip.png";
import InReviewChipTwo from "../assets/InReviewChipTwo.png";
import InReviewImage from "../assets/InReviewImage.png";
import DoneChip from "../assets/DoneChip.png";
import DoneChipTwo from "../assets/DoneChipTwo.png";
import Avatar from "../assets/Avatar.png";
import AvatarOne from "../assets/AvatarOne.png";
import LiveChip from "../assets/LiveChip.png";
import LiveImage from "../assets/LiveImage.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="CardContainer">
      <div className="InProgress">
        <div className="one">
          <div className="InProgressText">
            <h3>In Progress</h3>
          </div>
          <div className="VerticalDot">
            <img src={VerticalDot} />
          </div>
        </div>
        <div className="two">
          <div className="Chip">
            <img src={InProgressChip} />
          </div>
          <div className="Text">
            <p>Research FAQ page UX</p>
          </div>
          <div className="IconsAvatar">
            <div className="Icons">
              <div className="PaperClip">
                <img src={PaperClip} />
                <p>4</p>
              </div>
              <div className="Chat">
                <img src={Chat} />
                <p>12</p>
              </div>
            </div>
            <div className="Avatar">
              <img src={Stacked} />
            </div>
          </div>
        </div>
        <div className="three">
          <div className="Chip">
            <img src={InProgressChipTwo} />
          </div>
          <div className="Text">
            <p>Review Javascript code</p>
          </div>
          <div className="IconsAvatar">
            <div className="Icons">
              <div className="PaperClip">
                <img src={PaperClip} />
                <p>2</p>
              </div>
              <div className="Chat">
                <img src={Chat} />
                <p>8</p>
              </div>
            </div>
            <div className="Avatar">
              <img src={Stacked} />
            </div>
          </div>
        </div>
        <div className="four">
          <p>+ Add New Item</p>
        </div>
      </div>
      <div className="InReview">
        <div className="one">
          <div className="InReviewText">
            <h3>In Review</h3>
          </div>
          <div className="VerticalDot">
            <img src={VerticalDot} />
          </div>
        </div>
        <div className="two">
          <div className="Chip">
            <img src={InReviewChip} />
          </div>
          <div className="Text">
            <p>Review completed Apps</p>
          </div>
          <div className="IconsAvatar">
            <div className="Icons">
              <div className="PaperClip">
                <img src={PaperClip} />
                <p>8</p>
              </div>
              <div className="Chat">
                <img src={Chat} />
                <p>17</p>
              </div>
            </div>
            <div className="Avatar">
              <img src={Stacked} />
            </div>
          </div>
        </div>
        <div className="threeX">
          <div className="Chip">
            <img src={InReviewChipTwo} />
          </div>
          <div className="ImageWrapper">
            <img src={InReviewImage} />
          </div>
          <div className="Text">
            <p>Find new imgaes for pages</p>
          </div>
          <div className="IconsAvatar">
            <div className="Icons">
              <div className="PaperClip">
                <img src={PaperClip} />
                <p>10</p>
              </div>
              <div className="Chat">
                <img src={Chat} />
                <p>18</p>
              </div>
            </div>
            <div className="Avatar">
              <img src={Stacked} />
            </div>
          </div>
        </div>
        <div className="four">
          <p>+ Add New Item</p>
        </div>
      </div>
      <div className="Done">
        <div className="one">
          <div className="DoneText">
            <h3>Done</h3>
          </div>
          <div className="VerticalDot">
            <img src={VerticalDot} />
          </div>
        </div>
        <div className="two">
          <div className="Chip">
            <img src={DoneChip} />
          </div>
          <div className="Text">
            <p>Forms & tables section</p>
          </div>
          <div className="IconsAvatar">
            <div className="Icons">
              <div className="PaperClip">
                <img src={PaperClip} />
                <p>1</p>
              </div>
              <div className="Chat">
                <img src={Chat} />
                <p>4</p>
              </div>
            </div>
            <div className="Avatar">
              <img src={Stacked} />
            </div>
          </div>
        </div>
        <div className="three">
          <div className="Chip">
            <img src={DoneChipTwo} />
          </div>
          <div className="Text">
            <p>Completed charts & maps</p>
          </div>
          <div className="IconsAvatar">
            <div className="Icons">
              <div className="PaperClip">
                <img src={PaperClip} />
                <p>6</p>
              </div>
              <div className="Chat">
                <img src={Chat} />
                <p>21</p>
              </div>
            </div>
            <div className="AvatarX">
              <img src={Avatar} />
            </div>
          </div>
        </div>
        <div className="textX" placeholder="Search Invoice"></div>
        <div className="AddCancle">
          <button className="Add">
            <h3>ADD</h3>
          </button>
          <button className="Cancle">
            <h3>Cancle</h3>
          </button>
        </div>
      </div>
      <div className="Live">
        <div className="one">
          <div className="LiveText">
            <h3>Live</h3>
          </div>
          <div className="VerticalDot">
            <img src={VerticalDot} />
          </div>
        </div>
        <div className="three">
          <div className="Chip">
            <img src={LiveChip} />
          </div>
          <div className="Text">
            <p>Food delivery ios app</p>
          </div>
          <div className="ImageWrapper">
            <img src={LiveImage} />
          </div>
          <div className="IconsAvatar">
            <div className="Icons">
              <div className="PaperClip">
                <img src={PaperClip} />
                <p>2</p>
              </div>
              <div className="Chat">
                <img src={Chat} />
                <p>8</p>
              </div>
            </div>
            <div className="AvatarX">
              <img src={Avatar} />
              <img src={AvatarOne} />
            </div>
          </div>
        </div>
        <div className="four">
          <p>+ Add New Item</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
