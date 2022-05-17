import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "./reducers/tokenReducer";

import LogIn from "./components/LogIn";

const App = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.token)

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        {token
        ? <div className="menu">
            <button><Link style={padding} to="/home">home</Link></button>
            <button id='right' onClick={() => {
              dispatch(userLogout())
              window.localStorage.setItem('token', '')}}>
                <Link style={padding} to='/'>Logout</Link>
            </button>
          </div>
        : <LogIn />}
        
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      {token
      ? <p>You're logged in</p>
      : null}
    </Router>
  );
}

export default App;