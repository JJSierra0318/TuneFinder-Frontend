import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import ArtistList from "./SearchResult/ArtistList"
import TrackList from "./SearchResult/TrackList"

const SearchArtist = () => {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  const [artists, setArtists] = useState('')
  const [tracks, setTracks] = useState('')
  const [playlists, setPlaylists] = useState('')
  const loggedIn = useSelector(state => state.token)
  if (!loggedIn) return null

  const onSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/search',
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${loggedIn}`
      },
      params: {
        q: `artist:${search}`,
        type: filter
      }
    })

    switch (filter) {
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

  return (
    <div className='searchPage'>
      <div className='search'>
        <center>
          <h1>Find by Artist</h1>
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
                placeholder="Artist name"
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

export default SearchArtist