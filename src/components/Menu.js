import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../reducers/tokenReducer"

const Menu = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const padding = {
    padding: 5
  }

  return (
    <div className="menu">
      <button><Link style={padding} to="/home">home</Link></button>
           
      <button id='right' onClick={() => {
          dispatch(userLogout())
          window.localStorage.setItem('token', '')}}>
          <Link style={padding} to='/'>Logout</Link>
      </button>

      {user ? <button id='right'><Link to='/user'>{user.display_name}</Link></button> : null}
      {user ? <button id='right'><Link to='/favorite'>Favorites</Link></button> : null}
    </div>
  )
}

export default Menu