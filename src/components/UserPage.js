import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import User from '../images/User.png'

const UserPage = () => {

  const [playlists, setPlaylists] = useState('')
  const user = useSelector(state => state.user)
  const token = useSelector(state => state.token)
  console.log(user)

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

  useEffect(() => {
    if (!playlists) fetchUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlists])

  if (!token) return null

  console.log(playlists)

  return(
    <div className="searchPage">
      <div className="search">
        <div className="userInfo">
          {user.images.length > 0
            ? <img src={user.images[0].url} alt="User logo"/>
            : <img src={User} alt="User logo"/>}
          <h2>{user.display_name}</h2>
        </div>
      </div>
    </div>
  )
}

export default UserPage