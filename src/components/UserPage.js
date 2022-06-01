import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

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
    <div>
      HELLO
    </div>
  )
}

export default UserPage