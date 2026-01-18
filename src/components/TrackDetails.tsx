import React, { useEffect } from 'react'
import { useStore } from '@/store/useStore'

export const TrackDetails = () => {
  const { selectedTrack, selectedTrackId, setSelectedTrack } = useStore()

  useEffect(() => {
    if (!selectedTrackId) return
    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then(res => res.json()).then((json) => setSelectedTrack(json.data))
  }, [selectedTrackId, setSelectedTrack])

  return (
    <div>
      {!selectedTrackId && <div>No track selected</div>}
      {selectedTrackId && !selectedTrack && <div>Loading...</div>}
      {selectedTrack && <div style={{ opacity: selectedTrack.id !== selectedTrackId ? 0.4 : 1 }}>
        <h2>{selectedTrack.attributes.title}</h2>
        <p>{selectedTrack.attributes.lyrics || 'No lyrics available'}</p>
      </div>}
      {selectedTrackId && selectedTrack && selectedTrack.id !== selectedTrackId && <div>Loading...</div>}
    </div>
  )
}
