import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"

const ArtistList = ({artists}) => {
  console.log(artists)
  return (
    <div>
      TEST
    </div>
  )
}

const SearchGenre = () => {

  const [search, setSearch] = useState('')
  const [artists, setArtists] = useState('')
  const token = useSelector(state => state.token)

  const onSubmit = async (e) => {

    console.log(search)

    e.preventDefault()
    const {data} = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/search',
      withCredentials: false,
    headers: {
      Authorization: `Bearer ${token}`
      },
      params: {
        q: `genre:${search}`,
        type: 'artist'
      }
    })
    setArtists(data.artists.items)
  }

  if (!token) return null

  return(
    <div className="searchPage">
      <div className="search">
        <center>
          <h1>Find By Genre</h1>
          <form onSubmit={onSubmit}>
            <div className="input">
            <input
              placeholder="Genre name"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
            </div>
          </form>
        </center>
        {artists 
        ? <ArtistList artists={artists} />
        : null}
      </div>
    </div>
  )
}

export default SearchGenre