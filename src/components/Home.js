import { useSelector } from "react-redux"

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
          <button>Search</button>
          </div>
        </center>
      </div>
  )
}

export default Home