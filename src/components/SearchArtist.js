import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import ArtistList from "./SearchResult/ArtistList"

const SearchArtist = () => {

  const [search, setSearch] = useState('')
  const [artists, setArtists] = useState('')

  const loggedIn = useSelector(state => state.token)
  if (!loggedIn) return null

  const onSubmit = async (e) => {
    e.preventDefault()
    const {data} = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/search',
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${loggedIn}`
      },
      params: {
        q: search,
        type: 'artist'
      }
    })
    setArtists(data.artists.items)
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
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
          </div>
        </form>
        </center>
        {artists 
        ? <ArtistList artists={artists}/>
        : null}
      </div>
    </div>
  )
}

export default SearchArtist