import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Menu from './components/Menu';
import { setUser } from './reducers/userReducer';
import loginService from './services/login'


const getUser = async (token, dispatch) => {
  const {data} = await axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/me',
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  dispatch(setUser(data))
  const a = loginService.login(data)
  console.log(a)
  return data
}

const App = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (token && !user) {
      getUser(token, dispatch)
    }

  }, [token, user, dispatch])

  return (
    <Router>
      <div>
        {token
        ? <Menu />
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