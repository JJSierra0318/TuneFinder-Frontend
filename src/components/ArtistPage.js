import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import User from '../images/User.png'

const ArtistPage = () => {

  const [artist, setArtist] = useState('')
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

  const id = useParams().id

  useEffect(() => {
    if (!artist) fetchArtist()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    
  console.log(artist)


  if (!token || !artist) return null

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
      </div>
    </div>
  )
}

export default ArtistPage