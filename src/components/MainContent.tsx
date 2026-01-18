import type { TrackDetailsResource, TrackListItemResource } from '@/types'
import React from 'react'
import { Playlist } from '@/components/Playlist'
import { TrackDetails } from '@/components/TrackDetails'

interface Props {
  tracks: TrackListItemResource[] | null
  selectedTrackId: string | null
  setTracks: React.Dispatch<React.SetStateAction<TrackListItemResource[] | null>>
  setSelectedTrackId: React.Dispatch<React.SetStateAction<string | null>>
  selectedTrack: TrackDetailsResource | null
  setSelectedTrack: React.Dispatch<React.SetStateAction<TrackDetailsResource | null>>
}

export const MainContent = ({
                              tracks,
                              selectedTrackId,
                              setTracks,
                              setSelectedTrackId,
                              selectedTrack,
                              setSelectedTrack,
                            }: Props) => {
  return (
    <div style={{ display: 'flex', columnGap: '1rem' }}>
      <Playlist
        tracks={tracks}
        selectedTrackId={selectedTrackId}
        setTracks={setTracks}
        setSelectedTrackId={setSelectedTrackId}
      />
      <TrackDetails
        selectedTrack={selectedTrack}
        selectedTrackId={selectedTrackId}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  )
}
