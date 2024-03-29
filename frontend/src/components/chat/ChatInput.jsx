import "./chat.css"
import SendIcon from '@mui/icons-material/Send';
import  { useState } from 'react'
import InputEmoji from 'react-input-emoji'
import male from './images/male.png';
import female from './images/female.png'

const Chat = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState("join");
  const avatars = [male,female]; // Example: ["avatar1.png", "avatar2.png", "avatar3.png", "avatar4.png"]

  function handleOnEnter(text) {
    console.log('enter', text);
  }

  function handleJoinClick() {
    setStep("name");
  }

  function handleNameSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Please enter your name.");
    } else {
      setStep("avatar");
    }
  }

  function handleAvatarSelect(avatar) {
    // Handle avatar selection logic here
    console.log("Avatar selected:", avatar);
    setStep("chat");
  }

  return (
    <div className="outer">
      {step === "join" && (
        <button id="join-btn" onClick={handleJoinClick}>Join Group Chat</button>
      )}
      {step === "name" && (
        <div id="name-div" >
        <form onSubmit={handleNameSubmit}>
          <input id="name-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button id="name-btn" type="submit">Submit</button>
        </form>
        </div>
      )}
      {step === "avatar" && (
        <>
          <div className="avatar-container">
            <h3>Choose Avatar</h3>
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Avatar ${index + 1}`}
                onClick={() => handleAvatarSelect(avatar)}
              />
            ))}
          </div>
        </>
      )}
      {step === "chat" && (
        <>
          <div className="input-field">
            <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handleOnEnter}
              placeholder="Type a message"
            />
          </div>
          <button><SendIcon /></button>
        </>
      )}
    </div>
  );
}

export default Chat