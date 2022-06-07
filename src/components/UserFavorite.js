import { useSelector } from "react-redux"

const UserFavorite = () => {

  const token = useSelector(state => state.token)

  if (!token) return null

  return(
    <div className="searchPage">
      <div className="search">
        <h2>Favorite Artists</h2>
      </div>
    </div>
  )

}

export default UserFavorite