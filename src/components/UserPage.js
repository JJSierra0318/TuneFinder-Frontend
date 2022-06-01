import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import User from '../images/User.png'

const UserPage = () => {

  const [playlists, setPlaylists] = useState('')
  const [following, setFollowing] = useState('')
  const [playing, setPlaying] = useState('')
  const user = useSelector(state => state.user)
  const token = useSelector(state => state.token)

  const fetchUser = async () => {
    const {data} = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/playlists',
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setPlaylists(data)
  }

  const fetchFollowed = async () => {
    const {data} = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/following?type=artist',
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
    setFollowing(data)
  }

  const fetchCurrentlyPlaying = async () => {
    const {data} = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/player/currently-playing',
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setPlaying(data)
  }

  useEffect(() => {
    if (!playlists) fetchUser()
    if (!following) fetchFollowed()
    if (!playing) fetchCurrentlyPlaying()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlists])

  if (!token || !following || !playing) return null

  console.log(playlists)
  console.log(playing)

  return(
    <div className="searchPage">
      <div className="search">
        <div className="userInfo">
          {user.images.length > 0
            ? <img src={user.images[0].url} alt="User logo"/>
            : <img src={User} alt="User logo"/>}
          <h2>{user.display_name}</h2>
          <p><strong>Most recently played: </strong>{playing.item.name}</p>
          <p><strong>Followers: </strong>{user.followers.total}</p>
          <p><strong>Followed: </strong>{following.artists.total}</p>
        </div>
      </div>
    </div>
  )
}

export default UserPage