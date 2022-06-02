import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import ArtistList from "./SearchResult/ArtistList"
import TrackList from "./SearchResult/TrackList"

const SearchGenre = () => {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('artist')

  const [artists, setArtists] = useState('')
  const [tracks, setTracks] = useState('')
  const [playlists, setPlaylists] = useState('')
  const token = useSelector(state => state.token)

  const onSubmit = async (e) => {

    e.preventDefault()
    const { data } = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/search',
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: `genre:${search}`,
        type: filter
      }
    })
    
    switch(filter) {
      case 'artist':
        setArtists(data.artists.items)
        break
      case 'track':
        console.log(data)
        setTracks(data.tracks.items)
        break
      case 'playlist':
        console.log('playlist')
        break
      default:
        setArtists(data.artists.items)
    }
  }

  if (!token) return null

  return (
    <div className="searchPage">
      <div className="search">
        <center>
          <h1>Find By Genre</h1>
          <form onSubmit={onSubmit}>
            <div className="filter">
              <center>
                <button onClick={() => setFilter('artist')}>Artists</button>
                <button onClick={() => setFilter('track')}>Tracks</button>
                <button onClick={() => setFilter('playlist')}>Playlists</button>
              </center>
            </div>
            <div className="input">
              <input
                placeholder="Genre name"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
          </form>
        </center>
        {filter === 'artist' && artists
          ? <ArtistList artists={artists} />
          : null}
        {filter === 'track' && tracks
          ? <TrackList tracks={tracks}/>
          : null}
      </div>
    </div>
  )
}

export default SearchGenre