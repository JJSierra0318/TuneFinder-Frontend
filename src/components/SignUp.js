import { useState } from 'react'

const SignUp = (props) => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  if (!props.show) return null

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(email, username, password, confirmPass)
    setEmail('')
    setUsername('')
    setPassword('')
    setConfirmPass('')
  }

  return (
    <div className="SignUp">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
      <div>
          <input 
            type="text" 
            placeholder="email"
            value={email}
            onChange={({ target }) => {setEmail(target.value)}}/>
        </div>
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
        <div>
          <input 
            type="password" 
            placeholder="confirm password"
            value={confirmPass}
            onChange={({ target }) => {setConfirmPass(target.value)}}/>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp