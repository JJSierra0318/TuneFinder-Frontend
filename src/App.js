import Home from "./components/Home";
import { useState } from 'react'
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

const App = () => {

  const [page, setPage] = useState('home')

  return (
    <div className="App">
      <div className="Menu">
        <button onClick={() => setPage('home')}>Home</button>
        <button>Favorites</button>
        <button onClick={() => setPage('login')}>Log In</button>
        <button onClick={() => setPage('signup')}>Sign Up</button>
        <button>User</button>
      </div>
      <Home show={page === 'home'}/>
      <LogIn show={page === 'login'}/>
      <SignUp show={page === 'signup'}/>
    </div>
  );
}

export default App;
