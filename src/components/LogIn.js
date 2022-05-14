const LogIn = (props) => {

  const CLIENT_ID = '5c2e53056c7e4287bf2c92c8edf7a6ee'
  const REDIRECT_URI = "http://localhost:3000"
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