import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useSelector } from "react-redux";

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

const App = () => {

  const token = useSelector(state => state.token)

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <p>token: {token}</p>
        <Link style={padding} to="/login">login</Link>
        {token
        ? <div>
            <Link style={padding} to="/home">home</Link>
            <Link style={padding} to="/signup">sign up</Link>
          </div>
        : null}
        
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {token
      ? <p>You're logged in</p>
      : null}
    </Router>
  );
}

export default App;