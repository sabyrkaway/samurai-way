import type { TrackDetailsResource, TrackListItemResource } from '@/types'
import { PageTitle } from '@/components/PageTitle'
import { useState } from 'react'
import { ResetButton } from '@/components/ResetButton'
import { Playlist } from '@/components/Playlist'
import { TrackDetails } from '@/components/TrackDetails'

export const MainPage = () => {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

  return (
    <main>
      <PageTitle />
      <ResetButton
        setSelectedTrackId={setSelectedTrackId}
        setSelectedTrack={setSelectedTrack}
      />
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
    </main>
  )
}
