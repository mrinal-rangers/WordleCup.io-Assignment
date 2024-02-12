import socketIO from "socket.io-client"
import "./App.css"
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import Join from "./components/Join/Join"


const ENDPOINT = "http://localhost:8000/";
const socket = socketIO(ENDPOINT, { transports: ['websocket'] });


const App = () => {
  socket.on("connect",()=>{
    console.log("Connected to server");
  })

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route exact path="/chat" />
        </Routes>  
     </Router>
    </div>
  )
}

export default App

