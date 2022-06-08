import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import favoriteService from "../services/favorites"

const UserFavorite = () => {

  const [favorites, setFavorites] = useState('')
  const token = useSelector(state => state.token)
  const user = useSelector(state => state.user)

  useEffect(() => {
    favoriteService.getFavorites({ username: user.display_name }).then(favorites => setFavorites(favorites))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!token || !user || favorites.length < 1) return null

  console.log(favorites)

  return (
    <div className="searchPage">
      <div className="search">
        <h2>Favorite Artists</h2>
        {}
      </div>
    </div>
  )

}

export default UserFavorite