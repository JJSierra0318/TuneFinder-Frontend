import { useState } from "react"

const SearchGenre = () => {

  const [search, setSearch] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <div className="searchPage">
      <div className="search">
        <center>
          <h1>Find By Genre</h1>
          <form onSubmit={onSubmit}>
            <div className="input">
            <input
              placeholder="Genre name"
              onChange={(e) => setSearch(e)}
            />
            <button type="submit">Search</button>
            </div>
          </form>
        </center>
      </div>
    </div>
  )
}

export default SearchGenre