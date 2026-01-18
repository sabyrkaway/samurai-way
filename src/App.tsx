import './App.css'
import { useEffect, useState } from 'react'

interface TrackAttachment {
  url: string
}

interface TrackListItemAttributes {
  title: string
  attachments: TrackAttachment[]
}

interface TrackListItemResource {
  id: string
  attributes: TrackListItemAttributes
}

export const App = () => {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then(res => res.json()).then((json) => setTracks(json.data))
  }, [])

  return (
    <>
      <h1>MusicFun</h1>

      <button onClick={() => setSelectedTrackId(null)}>
        Reset selection
      </button>

      {tracks === null && <div>Loading...</div>}
      {tracks?.length === 0 && <div>No tracks available</div>}
      {tracks && <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            onClick={() => setSelectedTrackId(track.id)}
            style={{ border: `1px solid ${track.id === selectedTrackId ? '#646cff' : 'transparent'}` }}
          >
            <div>{track.attributes.title}</div>
            <audio controls src={track.attributes.attachments[0].url} />
          </li>
        ))}
      </ul>}
    </>
  )
}
