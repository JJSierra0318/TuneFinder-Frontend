import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/home">home</Link>
        <Link style={padding} to="/login">login</Link>
        <Link style={padding} to="/signup">sign up</Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;