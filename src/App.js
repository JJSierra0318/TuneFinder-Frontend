import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Menu from './components/Menu';
import { setUser } from './reducers/userReducer';
import loginService from './services/login'
import SearchArtist from './components/SearchArtist';


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
  await loginService.login(data)
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

  window.onbeforeunload = () => localStorage.clear()

  return (
    <Router>
      <div>
        {token
        ? <Menu />
        : <LogIn />}
        
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='search-artist' element={<SearchArtist />} />
        <Route path='/' element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;