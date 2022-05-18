import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "./reducers/tokenReducer";
import axios from 'axios';

import LogIn from "./components/LogIn";
import Home from "./components/Home";

const getUser = async (token) => {
  const {data} = await axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/me',
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}

const App = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  console.log(token)
  let user = ''

    if (token) {
      user = getUser(token)
    }
    


  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        {token
        ? <div className="menu">
            <button><Link style={padding} to="/home">home</Link></button>
            <></>
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