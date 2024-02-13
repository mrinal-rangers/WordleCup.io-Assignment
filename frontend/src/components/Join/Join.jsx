import "./Join.css"
import logo from "./images/logo.png"
import ClearIcon from '@mui/icons-material/Clear';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CropFreeIcon from '@mui/icons-material/CropFree';
import Chat from "../chat/ChatInput"

const Join = () => {
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
      <div className="navbar">
        <div className="left-div">
          <img src={logo}/>
          <h3>Worldcup.io Assignment</h3>
        </div>
        <div className="right-div">
          
          <div className="icons"><CloseFullscreenIcon/></div>
          <div className="icons"><CropFreeIcon/></div>
          <div className="icons"><ClearIcon/></div>
        </div>
        
        
      </div>
      <div className="chat-box">
        <Chat/>
      </div>
        
      </div>
    </div>
  )
}

export default Join

