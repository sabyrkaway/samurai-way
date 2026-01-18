import type { TrackListItemResource } from '@/types'
import React, { useEffect } from 'react'
import { TrackItem } from '@/components/TrackItem'

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
  }, [setTracks])

  return (
    <div>
      {tracks === null && <div>Loading...</div>}
      {tracks?.length === 0 && <div>No tracks available</div>}
      {tracks && <ul>
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            selectedTrackId={selectedTrackId}
            setSelectedTrackId={setSelectedTrackId}
          />
        ))}
      </ul>}
    </div>
  )
}
