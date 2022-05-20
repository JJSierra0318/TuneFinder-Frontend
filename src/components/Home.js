import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Home = (props) => {

  const loggedIn = useSelector(state => state.token)
  if (!loggedIn) return null

  return (
    <div className="home">
      <center>
        <div>
          <h1>Find by genre</h1>
          <button>Search</button>
          </div>
        <div>
          <h1>Search by artist</h1>
          <Link to='/search-artist'><button>Search</button></Link>
          </div>
        </center>
      </div>
  )
}

export default Home