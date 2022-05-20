import { useSelector } from "react-redux"

const SearchArtist = () => {

  const loggedIn = useSelector(state => state.token)
  if (!loggedIn) return null

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('submited')
  }

  return (
    <div className='searchPage'>
      <div className='search'>
        <center>
        <h1>Find by Artist</h1>
        <form onSubmit={onSubmit}>
          <div className="input">
          <input
            placeholder="Artist name"
          />
          <button type="submit">Search</button>
          </div>
        </form>
        </center>
      </div>
    </div>
  )
}

export default SearchArtist