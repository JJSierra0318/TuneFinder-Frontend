import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userLogin } from "../reducers/tokenReducer"

const LogIn = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {

    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if (!token && hash) {
      let urlParams = new URLSearchParams(window.location.hash.replace('#','?'))
      let token = urlParams.get('access_token')

      window.location.hash = ''
      window.localStorage.setItem('token',token)
    }

    dispatch(userLogin(token))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const CLIENT_ID = '5c2e53056c7e4287bf2c92c8edf7a6ee'
  const REDIRECT_URI = "http://localhost:3000/home"
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'
  const SCOPE = 'user-read-private playlist-read-private user-read-currently-playing'

  return (
    <div className="login">
      <center>
        <h1>Log In to Continue</h1>
        <div>
          <a 
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>
            Login with Spotify
          </a>
        </div>
      </center>
    </div>
  )
}

export default LogIn