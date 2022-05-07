import { useState } from "react"

const LogIn = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (!props.show) return null

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(username, password)
    setUsername('')
    setPassword('')
  }

  return (
    <div className="LogIn">
      <h1>Log In</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="username"
            value={username}
            onChange={({ target }) => {setUsername(target.value)}}/>
        </div>
        <div>
          <input 
            type="password" 
            placeholder="password"
            value={password}
            onChange={({ target }) => {setPassword(target.value)}}/>
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

export default LogIn