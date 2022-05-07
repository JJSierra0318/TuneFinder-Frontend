const Home = (props) => {

  if (!props.show) return null

  return (
    <div className="Home">
        <button>Find by genre</button>
        <button>Fin by artist</button>
      </div>
  )
}

export default Home