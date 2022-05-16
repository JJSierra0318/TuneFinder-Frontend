import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { userLogin } from "../reducers/tokenReducer"

const LogIn = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {

    const hash = window.location.hash
    let token = window.localStorage.getItem('token')
    console.log(token)

    if (!token && hash) {
      let urlParams = new URLSearchParams(window.location.hash.replace('#','?'))
      let token = urlParams.get('access_token')

      window.location.hash = ''
      window.localStorage.setItem('token',token)

      console.log(token)
    }

    setToken(token)
    dispatch(userLogin(token))

  }, [])

  const [token, setToken] = useState('')

  const CLIENT_ID = '5c2e53056c7e4287bf2c92c8edf7a6ee'
  const REDIRECT_URI = "http://localhost:3000/login"
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  return (
    <div className="LogIn">
      <h1>Log In</h1>
      
      <a 
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
        Login to Spotify
      </a>

    </div>
  )
}

export default LogIn