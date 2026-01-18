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

interface TrackDetailsAttributes {
  title: string
  lyrics: string | null
}

interface TrackDetailsResource {
  id: string
  attributes: TrackDetailsAttributes
}

export const App = () => {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then(res => res.json()).then((json) => setTracks(json.data))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) return
    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then(res => res.json()).then((json) => setSelectedTrack(json.data))
  }, [selectedTrackId])

  return (
    <>
      <h1>MusicFun</h1>

      <button
        onClick={() => {
          setSelectedTrackId(null)
          setSelectedTrack(null)
        }}
      >
        Reset selection
      </button>

      <div>
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
      </div>

      <hr />

      <div>
        {!selectedTrackId && <div>No track selected</div>}
        {selectedTrackId && !selectedTrack && <div>Loading...</div>}
        {selectedTrack && <div style={{ opacity: selectedTrack.id !== selectedTrackId ? 0.4 : 1 }}>
          <h2>{selectedTrack.attributes.title}</h2>
          <p>{selectedTrack.attributes.lyrics || 'No lyrics available'}</p>
        </div>}
        {selectedTrackId && selectedTrack && selectedTrack.id !== selectedTrackId && <div>Loading...</div>}
      </div>
    </>
  )
}
