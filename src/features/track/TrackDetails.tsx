import React, { useEffect } from 'react'
import { useStore } from '@/store/useStore'
import { getTrackDetails } from '@/features/track/track.api'

export const TrackDetails = () => {
  const { selectedTrack, selectedTrackId, setSelectedTrack } = useStore()

  useEffect(() => {
    if (!selectedTrackId) return
    getTrackDetails(selectedTrackId).then((json) => setSelectedTrack(json.data))
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
