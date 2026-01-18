import type { TrackListItemResource } from '@/types'
import React, { useEffect } from 'react'

interface Props {
  tracks: TrackListItemResource[] | null
  selectedTrackId: string | null
  setTracks: React.Dispatch<React.SetStateAction<TrackListItemResource[] | null>>
  setSelectedTrackId: React.Dispatch<React.SetStateAction<string | null>>
}

export const Playlist = ({ tracks, selectedTrackId, setTracks, setSelectedTrackId }: Props) => {
  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then(res => res.json()).then((json) => setTracks(json.data))
  }, [])

  return (
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
  )
}
