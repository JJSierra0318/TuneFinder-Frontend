import Home from "./components/Home";
import { useState } from 'react'
import LogIn from "./components/LogIn";

const App = () => {

  const [page, setPage] = useState('home')

  return (
    <div className="App">
      <div className="Menu">
        <button onClick={() => setPage('home')}>Home</button>
        <button>Favorites</button>
        <button onClick={() => setPage('login')}>Log In</button>
        <button>Sign Up</button>
        <button>User</button>
      </div>
      <Home show={page === 'home'}/>
      <LogIn show={page === 'login'}/>
    </div>
  );
}

export default App;
