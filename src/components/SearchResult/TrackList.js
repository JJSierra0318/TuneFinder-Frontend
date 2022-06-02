import Note from '../../images/Note.png'

const TrackList = ({tracks}) => {
  return(
    <div>
      {tracks.map(track => <div className="artistList" key={track.id}>
        {track.album.images.length > 0
          ? <img src={track.album.images[0].url} alt='album logo'/>
          : <img src={Note} alt='album logo'/>}
      </div>)}
    </div>
  )
}

export default TrackList