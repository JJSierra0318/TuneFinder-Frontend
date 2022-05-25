import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import User from '../images/User.png'
import Note from '../images/Note.png'

const ArtistPage = () => {

  const [artist, setArtist] = useState('')
  const [albums, setAlbums] = useState('')
  const token = useSelector(state => state.token)

  const fetchArtist = async () => {
    const {data} = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/artists/${id}`,
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setArtist(data)
  }

  const fetchTracks = async () => {
    const {data} = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/artists/${id}/albums`,
    withCredentials: false,
    headers: {
      Authorization: `Bearer ${token}`
      }
    })

    setAlbums(data)
  }

  const id = useParams().id

  useEffect(() => {
    if (!artist) fetchArtist()
    if (artist && !albums) fetchTracks()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albums, artist])
    
  console.log(artist)
  console.log(albums)

  if (!token || !artist || !albums) return null

  return (
    <div className="searchPage">
      <div className="search">
        <div className="generalInfo">
        {artist.images.length > 0
          ? <img src={artist.images[0].url} alt='Artist Logo'/>
          : <img src={User} alt='Artist Logo'/>}
          <h2>{artist.name}</h2>
          <hr />
          {artist.genres.length > 0
          ? <p><strong>Genres: </strong>{artist.genres.map(genre => <em key={genre}>{genre} / </em>)}</p>
          : null}
          <p><strong>Followers:  </strong><em>{artist.followers.total}</em></p>
        </div>
        <div className="albums">
            {albums.items.map(album => <div className='album' key={album.id}>
              {album.images.length > 0
                ? <img src={album.images[0].url} alt='Artist Logo'/>
                : <img src={Note} alt='Artist Logo'/>}
              <h2>{album.name}</h2>
              <p><strong>Release date: </strong>{album.release_date}</p>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default ArtistPage